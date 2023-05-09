import React, { useState } from 'react';
import {Container , CountriesModal} from '../../../containers';
import {CPagination, CText, ProgressiveImage} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, Modal, View} from 'react-native';
import AuthStyle from '../Auth.style';
import CForm from './Form';
import {useNavigation} from '@react-navigation/native';
import {Facebook, Google, LoginImg, RegisterImg} from '../../../assets/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen')
import CountDown from 'react-native-countdown-component';

function VerifyOtp({route}) {
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
    showCenterLogo: RegisterImg
  };

  const submit = async values => {
    navigation.navigate("Information")
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
                toggleCountryModal={toggleCountryModal} />
     
      <View style={[AuthStyle.orContainer ,{marginTop:-20}]}>
        <CText style={AuthStyle.cardBottomText}>Re-Send code in.</CText>
        <CountDown
        until={100}
        onFinish={() => {}}
        onPress={() => {}}
        size={15}
        timeToShow={['S']}
        timeLabels={{ s: ''}}
        digitTxtStyle={AuthStyle.timeCountDown}
        digitStyle={AuthStyle.timeView}
      />
        <CText onPress={()=> navigation.navigate('Login')} style={[AuthStyle.cardBottomText2]}>s</CText>
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
export default VerifyOtp;
