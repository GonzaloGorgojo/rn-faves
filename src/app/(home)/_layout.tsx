import { colors } from '@src/common/colors';
import { Tabs } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Platform } from 'react-native';

export default function TabsScreen(): JSX.Element {
  const { t } = useTranslation();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarActiveBackgroundColor: colors.mainColor,
        tabBarStyle: {
          paddingBottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="news.screen"
        options={{
          tabBarLabel: t('news') || 'News',
          tabBarLabelStyle: {
            paddingBottom: Platform.OS === 'ios' ? 20 : 0,
            fontSize: 13,
          },
          tabBarItemStyle: {
            borderColor: 'grey',
            borderWidth: 0.5,
            marginBottom: 0,
          },
          tabBarIcon: () => {
            return <FontAwesome5 name="newspaper" size={23} color="black" />;
          },
          tabBarIconStyle: {
            marginTop: 2,
          },
        }}
      />
      <Tabs.Screen
        name="tastes.screen"
        options={{
          tabBarLabel: 'Taste',
          tabBarLabelStyle: {
            paddingBottom: Platform.OS === 'ios' ? 20 : 0,
            fontSize: 13,
          },
          tabBarItemStyle: {
            borderColor: 'grey',
            borderWidth: 0.5,
          },
          tabBarIcon: () => {
            return <AntDesign name="staro" size={23} color="black" />;
          },
          tabBarIconStyle: {
            marginTop: 2,
          },
        }}
      />
    </Tabs>
  );
}
