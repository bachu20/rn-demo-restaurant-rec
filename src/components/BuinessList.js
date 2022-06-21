import { View, FlatList, Text, StyleSheet } from "react-native";

import BusinessItem from "./BusinessItem";

const BusinessList = ({ items, category, navigation }) => {
  return (
    <View>
      <Text style={styles.categoryTitle}>{category}</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={items}
        horizontal
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <BusinessItem business={item} />}
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
