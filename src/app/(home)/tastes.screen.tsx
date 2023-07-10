import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TastesScreen(): JSX.Element {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        {t('select-category')}
      </Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconsButton}>
          <MaterialCommunityIcons
            name="movie-filter-outline"
            size={40}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconsButton}>
          <Ionicons name="musical-notes-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
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
