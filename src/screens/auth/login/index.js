import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors, Icons} from '../../../utils/constant';
import {Text} from '../../../components';
import {styles} from './styles';
import {connect} from 'react-redux';

const Login = ({navigation, loginSubmit}) => {
  const [username, setUsername] = useState('');
  const submit = () => {
    if (!username) {
      return;
    }
    loginSubmit(username);
  };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText} weight="extrabold">
          Event Tracker
        </Text>
      </View>
      <View style={styles.textHolder}>
        <View style={styles.textIcon}>
          <Icon name={Icons.user} color={colors.brown} size={24} />
        </View>
        <TextInput
          value={username}
          onChangeText={(v) => setUsername(v)}
          placeholder="Username"
          placeholderTextColor={colors.brown}
          style={styles.textInput}
        />
      </View>
      <View style={styles.loginBtnHolder}>
        <TouchableOpacity
          onPress={submit}
          activeOpacity={0.6}
          style={styles.loginBtn}>
          <Text style={styles.loginText} weight="extrabold">
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = ({auth: {loginSubmit}}) => ({
  loginSubmit,
});

export default connect(null, mapDispatchToProps)(Login);
