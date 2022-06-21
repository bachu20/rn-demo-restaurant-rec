import { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchValue, setSearchValue, onSearchSubmit }) => {
  return (
    <View style={styles.wrapper}>
      <Feather style={styles.icon} name="search" size={30} color="black" />
      <TextInput
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={searchValue}
        onChangeText={setSearchValue}
        onEndEditing={onSearchSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F0EEEE",
    height: 50,
    flexDirection: "row",
    marginTop: 15,
    borderRadius: 5,
  },
  icon: {
    marginLeft: 10,
    marginRight: 15,
    alignSelf: "center",
  },
  input: {
    flex: 1,
  },
});

export default SearchBar;
