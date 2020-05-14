import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  logo: {
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 20,
    color: colors.brown,
  },
  textHolder: {
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: colors.brown,
    flexDirection: 'row',
    height: 60,
  },
  textIcon: {
    justifyContent: 'center',
  },
  textInput: {
    marginLeft: 15,
    fontSize: 16,
    flex: 1,
  },
  loginBtnHolder: {
    marginTop: 30,
    alignItems: 'center',
  },
  loginBtn: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: 260,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: colors.brown,
  },
  loginText: {
    color: colors.white,
  },
});
