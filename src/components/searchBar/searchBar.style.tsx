import { colors } from '@src/common/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '90%',
    marginTop: 15,
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    padding: 3,
    paddingLeft: 5,
    borderColor: colors.customBlue,
    width: '75%',
    borderRadius: 5,
  },
});
