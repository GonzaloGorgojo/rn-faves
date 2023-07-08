import { colors } from '@src/common/colors';
import { StyleSheet } from 'react-native';

export const topTenCardStyle = StyleSheet.create({
  container: {
    marginVertical: 8,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 4,
    borderRadius: 10,
    //shadows for ios
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    //elevation are shadows for android
    elevation: 7,
    backgroundColor: colors.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  cardTitle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const activityCardStyle = StyleSheet.create({
  container: {
    marginVertical: 8,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 4,
    borderRadius: 10,
    //shadows for ios
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    //elevation are shadows for android
    elevation: 2,
    backgroundColor: colors.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
