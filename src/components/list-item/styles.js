import {StyleSheet} from 'react-native';
import {colors, commonStyles} from '../../utils/constant';

export const styles = StyleSheet.create({
  ...commonStyles,
  listWrapper: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginTop: 12,
  },
  imageWrapper: {
    width: 80,
    height: 80,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  eventDetails: {
    marginLeft: 10,
    marginTop: 8,
    flex: 1,
  },
  eventText: {
    fontSize: 16,
  },
  eventEntry: {
    backgroundColor: colors.lightBrown,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  deleteBtn: {
    borderWidth: 1,
    backgroundColor: colors.lightBrown,
    borderColor: colors.brown,
    borderRadius: 5,
    padding: 2,
  },
});
