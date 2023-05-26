import React, { useState } from 'react';
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
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Profile, WelcomeLogo } from '../../assets/images';
import { ProgressiveImage } from '../../components';
const Welcome = () => {
  const onPressLogin = () => {
    // Do something about login operation
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    // Do something about signup operation
  };
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  return (
    <View style={styles.container}>
      <ProgressiveImage
        source={WelcomeLogo}
        style={styles.logo}
        resizeMode="contain"
      />

      <TouchableOpacity
        onPress={onPressLogin}
        style={styles.loginBtn}>
        <Text style={[styles.loginText, { color: "white", fontWeight: "bold", }]}>LOGIN </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressLogin}
        style={styles.createBtn}>
        <Text style={[styles.loginText, { color: "#0064FA", fontWeight: "bold", }]}>Create New Account </Text>
      </TouchableOpacity>

      <View style={{flexDirection: "row"}}>
        <View style={styles.hairline} />

        <TouchableOpacity onPress={onPressSignUp}>
          <Text style={styles.forgotAndSignUpText}>OR</Text>
        </TouchableOpacity>

        <View style={styles.hairline} />
      </View>

      <TouchableOpacity
        onPress={onPressLogin}
        style={styles.registerBtn}
        color="#000"
      >
        <Text style={[styles.loginText, { color: "#0064FA", fontWeight: "bold", }]}>Register as Service Provder </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hairline: {
    marginTop: 31,
    backgroundColor: '#E7E6E9',
    height: 2,
    width: 150
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#000",
    marginBottom: 50,
  },
  logo: {
    width: 187,
    height: 62,
    marginBottom: 120,
  },
  forgotAndSignUpText: {
    color: "grey",
    marginTop: 24,
    fontFamily: 'AvenirNext-Bold',
  fontSize: 11,
  paddingHorizontal: 5,
  alignSelf: 'center',
  },
  loginBtn: {

    width: "80%",
    color: "white",
    backgroundColor: "#0064FA",
    borderRadius: 8,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 20,
    // marginBottom: 10
  },
  createBtn: {
    width: "80%",
    color: "#0064FA",
    backgroundColor: "#F1F6F7",
    borderRadius: 8,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    // marginBottom: 10
  },
  registerBtn: {
    width: "80%",
    color: "#0064FA",
    backgroundColor: "#E6EFFE",
    borderWidth: 1,
    borderColor: "#0064FA",
    borderRadius: 8,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 31,
    // marginBottom: 10
  },
});
export default Welcome;