/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';
import TruckDriverRoot from './src/routing/TruckDriverRoot';

import Auth from './src/routing/Auth';
import {useDispatch, useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {getCountries} from './src/redux/actions/Global.action';
import {changeLanguage} from './src/redux/actions/Language.action';
import {useTranslation} from 'react-i18next';
import i18n from './src/utils/i18n/i18n';
import {Socket} from './src/utils/methods';
import Root from './src/routing/Auth copy';
// yaha import kro welcome Screen

const App = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const handleLanguageChange = languageCode => {
    i18n.changeLanguage(languageCode);
  };
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    dispatch(getCountries());
    handleLanguageChange('en');
    dispatch(changeLanguage({lan: 'ger'}));
  }, []);

  const reduxState = useSelector(({auth, language}) => {
    return {
      isLoggedin: auth?.isLoggedIn,
      language: language?.language?.lan,
      userRole: auth?.user?.role,
      user: auth?.user,
    };
  });

  const userId = reduxState?.user?._id;
  useEffect(() => {
    Socket.emit('join', {userId});
  }, []);

  const renderRoot = () => {

    // if (!reduxState?.isLoggedin) {
    //   return <Auth />;
    // } else {
    //   return <TruckDriverRoot />;
    // }
  };

  return  reduxState?.isLoggedin ?  <Auth /> :  <TruckDriverRoot /> 
};

export default App;

const styles = StyleSheet.create({});
