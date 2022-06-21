import axios from "axios";
import * as Location from "expo-location";

const YELP_API_KEY =
  "YMcW4MzqcR7PWo4c_uJvnojH-u8ixgtQGZLZRmPRl0EuAYCxryTySs1fcrE51SJdg5yJsgtfUHEMDWpSq34axBnkz1brgD4py-ZoXWf45Rq2Pb1t-NsAxwtZ692wYnYx";

class YelpClient {
  constructor() {
    const client = axios.create({
      baseURL: "https://api.yelp.com/v3",
      timeout: 10000,
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    });

    this._client = client;
    this._deviceLocation = null;
  }

  async _getQueryString(options = {}) {
    const { location, latitude, longitude } = options;
    let params = [];

    if (!(location || (latitude && longitude))) {
      const { coords } = await this._getDeviceLocation();

      options.latitude = coords.latitude;
      options.longitude = coords.longitude;
    }

    for (const key in options) {
      params.push(`${key}=${options[key]}`);
    }

    params = params.join("&");

    return params ? "?" + params : params;
  }

  _handleErrors(error) {
    error.response
      ? console.log(error.response.data)
      : console.log(error.message);
  }

  async _getDeviceLocation() {
    if (this._deviceLocation) return this._deviceLocation;

    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      console.error("Permission to access location was denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    this._deviceLocation = location;

    return this._deviceLocation;
  }

  async searchBusinesses(options = {}) {
    const query = await this._getQueryString(options);

    return this._client
      .get("/businesses/search" + query)
      .catch(this._handleErrors);
  }

  async getBusiness(id, options = {}) {
    const query = await this._getQueryString(options);

    return this._client
      .get(`/businesses/${id}` + query)
      .catch(this._handleErrors);
  }
}

export default YelpClient;
