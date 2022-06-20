import { View, Text, StyleSheet, Image } from "react-native";

const BusinessItem = ({ item }) => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subtitle}>
        {item.stars} Stars, {item.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    marginRight: 30,
  },
  image: {
    height: 200,
    width: 300,
  },
  title: {
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 5,
  },
  subtitle: {
    color: "gray",
  },
});

export default BusinessItem;
