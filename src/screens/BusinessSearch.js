import { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import Client from "../clients/yelp";

import SearchBar from "../components/SearchBar";
import BusinessList from "../components/BuinessList";

const BusinessSearch = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState();
  const [query, setQuery] = useState({});
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    Client.searchBusinesses({ limit: 50, ...query }).then((response) =>
      setBusinesses(response.data.businesses)
    );
  }, [query]);

  const costEffective = businesses.filter((i) => i.price === "$");
  const bitPricier = businesses.filter((i) => i.price === "$$");
  const bigSpender = businesses.filter((i) => ["$$", "$$$"].includes(i.price));

  const businessCategories = [
    { items: costEffective, category: "Cost Effective" },
    { items: bitPricier, category: "Bit Pricier" },
    { items: bigSpender, category: "Big Spender!" },
  ];

  return (
    <View style={styles.wrapper}>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onSearchSubmit={() => setQuery({ term: searchValue })}
      />

      <Text style={styles.total}>
        We have found {businesses.length}{" "}
        {businesses.length === 1 ? "result" : "results"}
      </Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={businessCategories}
        keyExtractor={({ category }) => category}
        renderItem={({ item, index }) => (
          <View>
            <BusinessList items={item.items} category={item.category} />
            {index + 1 < businessCategories.length && (
              <View style={styles.hr} />
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  total: {
    alignSelf: "center",
    marginVertical: 18,
    fontWeight: "400",
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
});

export default BusinessSearch;
