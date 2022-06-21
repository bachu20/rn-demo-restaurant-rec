import { useState, useLayoutEffect, useEffect } from "react";
import { View, Image, FlatList, StyleSheet } from "react-native";

import Client from "../clients/yelp";

const Business = ({ route, navigation }) => {
  const [business, setBusiness] = useState();
  const { businessID, businessName } = route.params;

  useEffect(() => {
    Client.getBusiness(businessID).then((response) =>
      setBusiness(response.data)
    );
  }, [businessID]);

  useLayoutEffect(() => {
    navigation.setOptions({ title: businessName });
  }, [businessName, navigation]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={business?.photos ?? []}
        keyExtractor={(item) => item}
        renderItem={({ item: uri }) => (
          <Image style={styles.image} source={{ uri }} />
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
  },
  image: {
    flex: 1,
    height: 250,
    marginBottom: 20,
  },
});

export default Business;
