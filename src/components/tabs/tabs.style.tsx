import { StyleSheet } from 'react-native';

export const tabsStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tab: {
    borderColor: 'black',
    borderWidth: 0.5,
    flex: 1,
    height: 30,
    justifyContent: 'center',
  },
});
