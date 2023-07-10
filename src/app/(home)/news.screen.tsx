import { useAuth } from '@clerk/clerk-expo';
import MainFeed from '@src/components/moviesFeed/MoviesFeed.component';
import CSearchBar from '@src/components/searchBar/SearchBar.component';
import { Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';

export default function NewsScreen(): JSX.Element {
  const { isLoaded, isSignedIn } = useAuth();
  const { t } = useTranslation();

  if (!isLoaded) {
    return <Text>{t('loading')}</Text>;
  } else if (!isSignedIn) {
    return <Redirect href="/" />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <CSearchBar />
      <MainFeed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
