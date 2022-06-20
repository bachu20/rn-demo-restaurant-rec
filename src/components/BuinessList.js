import { View, FlatList, Text, StyleSheet } from "react-native";

import BusinessItem from "./BusinessItem";

const BusinessList = ({ items, category }) => {
  return (
    <View>
      <Text style={styles.categoryTitle}>{category}</Text>

      <FlatList
        data={items}
        horizontal
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <BusinessItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryTitle: {
    fontSize: 25,
    fontWeight: "700",
  },
});

export default BusinessList;
