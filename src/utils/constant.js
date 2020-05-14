import {StyleSheet} from 'react-native';

export const colors = {
  white: '#fff',
  black: '#000',
  brown: '#B8A380',
  lightBrown: '#F0EDE6',
};

export const Icons = {
  user: 'user',
};

export const commonStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  juscenter: {
    justifyContent: 'center',
  },
  jusbetween: {
    justifyContent: 'space-between',
  },
  spaceTop: {
    marginTop: 10,
  },
});
