import React, { useState } from 'react';
import {Container , CountriesModal} from '../../../containers';
import {CPagination, CText, ProgressiveImage, RadioButton} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, Modal, View} from 'react-native';
import AuthStyle from '../Auth.style';
import CForm from './Form';
import {useNavigation} from '@react-navigation/native';
import {Facebook, Google, LoginImg, RegisterImg, RoleIcon} from '../../../assets/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import GlobalStyle from '../../../assets/styling/GlobalStyle';
import { forceTouchHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/ForceTouchGestureHandler';
const {width, height} = Dimensions.get('screen')

function Register({route}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const reduxState = useSelector(({auth, global}) => {
    return {
      loading: auth.signUpLoading,
      currentCountry: global?.currentCountry,
      countries: global?.countries,
    };
  });

  const [countryModalIsOpen, updateCountryModalIsOpen] = useState(false);
  const [selectedCountry, updateSelectedCountry] = useState(
      reduxState.currentCountry
  );
const [account ,setAccount ] = useState('Customer')


  const toggleCountryModal = () => {
      updateCountryModalIsOpen(!countryModalIsOpen);
  };

  const countryOnSelect = (item) => {
      updateSelectedCountry(item);
      toggleCountryModal();
  };



  const headerProps = {
    showCenterLogo: false,
    headerLeft: true,
    headerTitle: 'Sing in',
    showCenterLogo: RegisterImg,
    ProgressiveImageHeader:false
  };

  const submit = async values => {
    if(account === "Owner"){
      navigation.navigate("CompanyProfile")
    } else{

      navigation.navigate("VerifyOtp")
    }
  };



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
        
      <CForm submit={submit} loading={reduxState?.loading} selectedCountry={selectedCountry}
                toggleCountryModal={toggleCountryModal}
                account={account} setAccount={setAccount} />
     
      <View style={AuthStyle.orContainer}>
        <CText style={AuthStyle.cardBottomText}>Already have an account?</CText>
        <CText onPress={()=> navigation.navigate('Login')} style={[AuthStyle.cardBottomText2]}>Sign in</CText>
      </View>
      <Modal
                transparent={true}
                visible={countryModalIsOpen}
                onRequestClose={() => toggleCountryModal()}
            >
                <View style={AuthStyle.modalContainer}>
                    <View style={AuthStyle.modalInnerContainer}>
                        <CountriesModal
                            onSelect={(val) => countryOnSelect(val)}
                        />
                    </View>
                </View>
            </Modal>

    </Container>
  );
}
export default Register;
