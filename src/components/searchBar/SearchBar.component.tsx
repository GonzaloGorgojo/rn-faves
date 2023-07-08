import { TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import searchBarStyles from './searchBar.style';

const CSearchBar = (): JSX.Element => {
  return (
    <View style={searchBarStyles.container}>
      <TextInput
        style={searchBarStyles.textInput}
        placeholder="Search users..."
        placeholderTextColor="grey"
      />
      <TouchableOpacity>
        <MaterialIcons name="person-search" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default CSearchBar;
