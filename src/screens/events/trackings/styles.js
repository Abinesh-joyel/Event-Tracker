import {StyleSheet} from 'react-native';
import {commonStyles} from '../../../utils/constant';
export const styles = StyleSheet.create({
  ...commonStyles,
  container: {
    flex: 1,
  },
  listContainer: {
    width: '100%',
    maxWidth: 600,
  },
  listItem: {
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
});
