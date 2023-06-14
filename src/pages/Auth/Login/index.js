import React, { useEffect, useState } from 'react';
import {Container} from '../../../containers';
import {CPagination, CText, ProgressiveImage} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, View} from 'react-native';
import AuthStyle from '../Auth.style';
import CForm from './Form';
import {useNavigation} from '@react-navigation/native';
import {Facebook, Google, LoginImg} from '../../../assets/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { login } from '../../../redux/actions/Auth.action';
import ToggleSwitch from '../../../components/cToggleSwitch/CToggleSwitch';
import i18n from '../../../utils/i18n/i18n';
const {width, height} = Dimensions.get('screen')

function Login({route}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [value , selectValue] = useState(false) 

  const reduxState = useSelector(({auth, global}) => {
    return {
      // loading: auth.loginLoading,
      loading: false,

    };
  });
  const headerProps = {
    showCenterLogo: false,
    headerLeft: true,
    headerTitle: 'Sing in',
    showCenterLogo : LoginImg
  };

  const submit = async values => {
    dispatch(login(values , callBack))
  };
  const callBack = (res) => {
    console.log("🚀 ~ file: index.js:37 ~ callBack ~ res:", res)
   
  }

  // useEffect(() => {
  //   i18n.changeLanguage(!value ? "en" :"hi");
  // }, [value]);

  return (
    <Container
      backgroundColor={'theme-color'}
      showPattern={true}
      scrollView={true}
      style={AuthStyle.style}
      headerProps={headerProps}
      loading={reduxState?.loading}
      scrollViewProps={{
        contentContainerStyle: AuthStyle.container,
      }}>
        
      {/* <CPagination /> */}
      <CForm submit={submit} loading={reduxState?.loading} onForgotPress={()=> navigation.navigate('Forgot')} />
      {/* <View style={{flex:1 , alignSelf:"center"}}>
      <ToggleSwitch isOn={value}  onToggle={selectValue} />

        </View> */}


      <View style={[AuthStyle.orContainer , AuthStyle.googleContainer]}>
        <ProgressiveImage
          source={Google}
          resizeMode={'contain'}
          style={AuthStyle.IconImage}
        />
        <CText style={AuthStyle.googleAccount}>Login With Google</CText>
      
      </View>

      <View style={AuthStyle.orContainer}>
        <CText style={AuthStyle.cardBottomText}>Don’t have an account?</CText>
        <CText onPress={()=> navigation.navigate('Register',{role: 'Customer'})} style={[AuthStyle.cardBottomText2]}>Register?</CText>
      </View>
    </Container>
  );
}
export default Login;
