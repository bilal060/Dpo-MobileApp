import {StyleSheet, Text, View , Button} from 'react-native';
import React, {useEffect} from 'react';
import Root from './src/routing/Root';
import Auth from './src/routing/Auth';
import {useDispatch, useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {getCountries} from './src/redux/actions/Global.action';
import {changeLanguage} from './src/redux/actions/Language.action';
import {useTranslation} from 'react-i18next';
import i18n from './src/utils/i18n/i18n'
import OwnerStack from './src/routing/Stacks/Owner';
const App = () => {
  const dispatch = useDispatch();
  const {t,} = useTranslation();

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  useEffect(() => {
    SplashScreen.hide();
    dispatch(getCountries());
    dispatch(changeLanguage({lan: 'ger'}));
  }, []);

  const reduxState = useSelector(({auth, language}) => {
    return {
      isLoggedin: auth?.isLoggedIn,
      language: language?.language?.lan,
    };
  });

  return (
    <>
     {reduxState?.isLoggedin ? <Auth /> : <Root />}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
