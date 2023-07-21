import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@src/common/colors';
import { EnTopTen } from '@src/common/enums';
import TastesSearch from '@src/components/tastes/tastes.component';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TastesScreen(): JSX.Element {
  const [activeTaste, setActiveTaste] = useState<EnTopTen>(EnTopTen.Movie);
  const { t } = useTranslation();

  const setIconActive = (type: EnTopTen) => {
    setActiveTaste(type);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        {t('select-category')}
      </Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={() => setIconActive(EnTopTen.Movie)}
          style={{
            ...styles.iconsButton,
            backgroundColor:
              activeTaste === EnTopTen.Movie ? colors.mainColor : 'white',
          }}
        >
          <MaterialCommunityIcons
            name="movie-filter-outline"
            size={40}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIconActive(EnTopTen.Music)}
          style={{
            ...styles.iconsButton,
            backgroundColor:
              activeTaste === EnTopTen.Music ? colors.mainColor : 'white',
          }}
        >
          <Ionicons name="musical-notes-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <TastesSearch tasteType={activeTaste} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconsContainer: {
    marginTop: 10,
    justifyContent: 'space-evenly',
    width: '50%',
    flexDirection: 'row',
  },
  iconsButton: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
});
