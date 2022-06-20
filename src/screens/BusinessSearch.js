import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import SearchBar from "../components/SearchBar";
import BusinessList from "../components/BuinessList";

const samplePrice = "$$$$";

const sampleItems = new Array(10).fill("placeholder").map((v, i) => ({
  id: i,
  image: `https://picsum.photos/seed/randomseed${i}/300/200`,
  price: samplePrice.slice(0, Math.ceil(Math.random() * 4)),
  stars: 4.5,
  review_count: Math.floor(Math.random() * 1000),
  name: "Fish City #" + (i + 1),
}));

const getFilteredBusinessItems = (sourceList, filter) => {
  if (sourceList.length && filter) {
    return sourceList.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return sourceList;
};

const Home = () => {
  const [searchValue, setSearchValue] = useState();
  const [businessItems, setBusinessItems] = useState(sampleItems);

  const handleOnSearchSubmit = () => {
    setBusinessItems(getFilteredBusinessItems(sampleItems, searchValue));
  };

  const costEffective = businessItems.filter((i) => i.price.length < 3);
  const bitPricier = businessItems.filter((i) => i.price.length === 3);
  const bigSpender = businessItems.filter((i) => i.price.length > 3);

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
        onSearchSubmit={handleOnSearchSubmit}
      />

      <FlatList
        data={businessCategories}
        keyExtractor={(_, index) => index}
        renderItem={({ item, index }) => (
          <View>
            <BusinessList items={item.items} category={item.category} />
            {index + 1 < businessCategories.length && (
              <View style={styles.hr} />
            )}
          </View>
        )}
      />

      <BusinessList items={costEffective} category="Cost Effective" />

      <View style={styles.hr} />

      <BusinessList items={bitPricier} category="Bit Pricer" />

      <View style={styles.hr} />

      <BusinessList items={bigSpender} category="Big Spender!" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
});

export default Home;
