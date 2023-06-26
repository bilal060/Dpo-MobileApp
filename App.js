import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';
import Root from './src/routing/Root';
import CustomerRoot from './src/routing/CustomerRoot';
import TruckDriverRoot from './src/routing/TruckDriverRoot';


import Auth from './src/routing/Auth';
import {useDispatch, useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {getCountries} from './src/redux/actions/Global.action';
import {changeLanguage} from './src/redux/actions/Language.action';
import {useTranslation} from 'react-i18next';
import i18n from './src/utils/i18n/i18n';
import OwnerStack from './src/routing/Stacks/Owner';

import {Socket} from './src/utils/methods'
// yaha import kro welcome Screen
import { Linking } from 'react-native';



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

  const handleDeepLink = (event) => {
    console.log('1111111111111111111111111111111111', 1);

    // Extract the path and query parameters from the deep link URL
    const { path, queryParams } = Linking.parse(event.url);
  
    // Handle the specific path or screen based on the deep link URL
    if (path === 'verify-manager-invitation') {
      // Extract the necessary parameters from queryParams
      const { token, email, branch } = queryParams;
  
      // Navigate to the appropriate screen using your navigation library (e.g., react-navigation)
      // navigation.navigate('VerifyManagerInvitation', { token, email, branch });
    }
  };
  
  // Add a listener to handle deep links when the app is opened through a deep link
  Linking.addEventListener('url', handleDeepLink);




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
    }  else if (reduxState?.userRole === 'Truck Driver') {
      return <TruckDriverRoot />
    } else {
      return <Root />;
    }
  };

  return renderRoot();
};

export default App;

const styles = StyleSheet.create({});
