import { useAuth } from '@clerk/clerk-expo';
import MainFeed from '@src/components/moviesFeed/MoviesFeed.component';
import CSearchBar from '@src/components/searchBar/SearchBar.component';
import { Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen(): JSX.Element {
  const { isLoaded, isSignedIn } = useAuth();
  const { t } = useTranslation();
  if (!isLoaded) {
    return <Text>{t('loading')}</Text>;
  } else if (!isSignedIn) {
    return <Redirect href="/" />;
  }

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <StatusBar style="dark" />
      <CSearchBar />
      <MainFeed />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
