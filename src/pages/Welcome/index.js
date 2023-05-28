import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {Profile, WelcomeLogo} from '../../assets/images';
import {CText, ProgressiveImage} from '../../components';
import {themes} from '../../theme/colors';
const {width, height} = Dimensions.get('screen');


const Welcome = ({navigation}) => {
  const onPressLogin = () => {
    // navigation.navigate('Login');
    // Do something about login operation
  };
  const onPressForgotPassword = () => {
    navigation.navigate('Register');

    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    navigation.navigate('Register')

    // Do something about signup operation
  };

  return (
    <View style={styles.container}>
      <ProgressiveImage
        source={WelcomeLogo}
        style={styles.logo}
        resizeMode="contain"
      />

      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <CText style={[styles.loginText, {color: 'white', fontWeight: 'bold'}]}>
          Login
        </CText>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressLogin} style={styles.createBtn}>
        <CText
          style={[styles.loginText, {color: '#0064FA', fontWeight: 'bold'}]}>
          Create New Account
        </CText>
      </TouchableOpacity>

      <View style={{flexDirection: 'row'}}>
        <View style={styles.hairline} />

        <CText onPress={onPressSignUp} style={styles.forgotAndSignUpText}>
          OR
        </CText>

        <View style={styles.hairline} />
      </View>

      <TouchableOpacity onPress={onPressLogin} style={styles.registerBtn}>
        <CText
          style={[styles.loginText, {color: '#0064FA', fontWeight: 'bold'}]}>
          Register as Service Provder
        </CText>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.light.colors.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hairline: {
    marginTop: 31,
    backgroundColor: themes.light.colors.gray3,
    height: 2,
    width: width * 0.37,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#000',
    marginBottom: 50,
  },
  logo: {
    width: 187,
    height: 65,
    marginBottom: 120,
  },
  forgotAndSignUpText: {
    color: themes.light.colors.gray4,
    marginTop: 24,
    fontFamily: themes.font.medium,
    fontSize: 11,
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  loginText: {
    fontFamily: themes.font.regular,
    fontSize: 15,
    lineHeight: 16,
  },
  loginBtn: {
    width: '80%',
    color: 'white',
    backgroundColor: themes.light.colors.primary,
    fontFamily: themes.font.semiBold,

    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 20,
    // marginBottom: 10
  },
  createBtn: {
    width: '80%',
    color: themes.light.colors.fontColor,
    backgroundColor: themes.light.colors.lightenGray,
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    // marginBottom: 10
  },
  registerBtn: {
    width: '80%',
    color: '#0064FA',
    backgroundColor: themes.light.colors.secondary4,
    borderWidth: 1,
    borderColor: '#0064FA',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 31,
    // marginBottom: 10
  },
});
export default Welcome;
