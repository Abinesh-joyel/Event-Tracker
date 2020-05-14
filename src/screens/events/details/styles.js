import {StyleSheet} from 'react-native';
import {colors, commonStyles} from '../../../utils/constant';

export const styles = StyleSheet.create({
  ...commonStyles,
  container: {
    flex: 1,
  },
  imageWrapper: {
    width: '100%',
    height: 250,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  eventDetails: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  top: {
    marginTop: 30,
  },
  eventText: {
    marginLeft: 10,
    fontSize: 15,
  },
  btn: {
    elevation: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: colors.brown,
  },
  btnText: {
    fontSize: 16,
    color: colors.white,
  },
});
