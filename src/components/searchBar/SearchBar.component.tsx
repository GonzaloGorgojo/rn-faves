import { TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import searchBarStyles from "./searchBar.style";

const SearchBar = (): JSX.Element => {
  return (
    <View style={searchBarStyles.container}>
      <TextInput
        style={searchBarStyles.textInput}
        placeholder="Search users..."
      />
      <TouchableOpacity>
        <MaterialIcons name="person-search" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;