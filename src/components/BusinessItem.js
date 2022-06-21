import { View, Text, StyleSheet, Image } from "react-native";

import placeholderImage from "../../assets/default-placeholder-300x300.png";

const BusinessItem = ({ item }) => {
  const image = item.image_url ? { uri: item.image_url } : placeholderImage;

  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subtitle}>
        {item.rating} Stars, {item.review_count} Reviews
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
