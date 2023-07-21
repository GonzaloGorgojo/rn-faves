import { Text, TextInput, View } from 'react-native';
import { TastesSearchStyle } from './tastes.style';
import { ITastesSearch } from '@src/common/interfaces';
import searchBarStyle from '../searchBar/searchBar.style';
import { useState } from 'react';

const TastesSearch = ({ tasteType }: ITastesSearch) => {
  const [searchInput, setSearchInput] = useState<string>('');

  return (
    <View style={TastesSearchStyle.tasteContainer}>
      <TextInput
        value={searchInput}
        style={searchBarStyle.textInput}
        placeholder="Search..."
        placeholderTextColor="grey"
        onChangeText={(text) => setSearchInput(text)}
      />
      <Text>{tasteType}</Text>
    </View>
  );
};

export default TastesSearch;
