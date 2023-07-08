import { colors } from '@src/common/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    borderRadius: 3,
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.mainColor,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
  },
});
