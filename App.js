import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';
import Root from './src/routing/Root';
import CustomerRoot from './src/routing/CustomerRoot';

import Auth from './src/routing/Auth';
import {useDispatch, useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {getCountries} from './src/redux/actions/Global.action';
import {changeLanguage} from './src/redux/actions/Language.action';
import {useTranslation} from 'react-i18next';
import i18n from './src/utils/i18n/i18n';
import OwnerStack from './src/routing/Stacks/Owner';
import Welcome from './src/pages/Welcome';
import { setTSpan } from 'react-native-svg/lib/typescript/lib/extract/extractText';
import { AddVechieal } from './src/pages/Protected/Owner';
import {Socket} from './src/utils/methods'
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
  console.log("🚀 ~ file: App.js:47 ~ reduxState ~ reduxState:", reduxState)

  // const userId = reduxState?.user?._id
  // useEffect(() => { 
  //   Socket.emit("join",{userId}); 
  // }, []);


  const renderRoot = () => {
    if (!reduxState?.isLoggedin) {
      return <Auth />;
    } else if (reduxState?.userRole === 'Customer') {
      return <CustomerRoot />;
    } else {
      return <Root />;
    }
  };

  return renderRoot();
};

export default App;

const styles = StyleSheet.create({});
