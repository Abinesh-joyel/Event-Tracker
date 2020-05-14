import {StyleSheet} from 'react-native';
import {colors, commonStyles} from '../../../utils/constant';

export const styles = StyleSheet.create({
  ...commonStyles,
  container: {
    flex: 1,
  },
  picker: {
    backgroundColor: colors.white,
    height: 50,
  },
  listItem: {
    paddingBottom: 65,
  },
  listPadding: {
    paddingHorizontal: 15,
  },
});
