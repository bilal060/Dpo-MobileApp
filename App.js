  import {StyleSheet, Text, View} from 'react-native';
import React ,{useEffect} from 'react';
import Root from './src/routing/Root';
import Auth from './src/routing/Auth';
import {useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

const App = () => {


    useEffect(() => {
      SplashScreen.hide()
    }, []);




  const reduxState = useSelector(({auth}) => {
    return {
      isLoggedin: auth?.isLoggedIn,
    };
  });

  return !reduxState?.isLoggedIn ? <Auth /> : <Root />;
};

export default App;

const styles = StyleSheet.create({});
