import {StyleSheet} from 'react-native';
import {screenWidth, gridColumns} from '../../utils/helper';
import {colors, commonStyles} from '../../utils/constant';

const gridWidth = screenWidth / gridColumns;
const imageWidth = gridWidth - 10;

export const styles = StyleSheet.create({
  ...commonStyles,
  gridWrapper: {
    width: gridWidth,
    marginTop: 10,
  },
  eventWrapper: {
    width: imageWidth,
    marginHorizontal: 5,
    position: 'relative',
  },
  imageWrapper: {
    width: imageWidth,
    height: imageWidth,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  eventText: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: colors.white,
  },
  eventEntry: {
    position: 'absolute',
    paddingHorizontal: 7,
    paddingVertical: 3,
    backgroundColor: colors.brown,
    top: 5,
    right: 5,
    borderRadius: 10,
  },
  entryText: {
    color: colors.white,
  },
});
