import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import placeholder from "../../assets/default-placeholder-300x300.png";

const BusinessItem = ({ business }) => {
  const navigation = useNavigation();
  const image = business.image_url ? { uri: business.image_url } : placeholder;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Business", {
            businessID: business.id,
            businessName: business.name,
          })
        }
      >
        <Image style={styles.image} source={image} />
      </TouchableOpacity>

      <Text style={styles.title}>{business.name}</Text>
      <Text style={styles.subtitle}>
        {business.rating} Stars, {business.review_count} Reviews
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
