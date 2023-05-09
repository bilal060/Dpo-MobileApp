import React, {useState} from 'react';
import {Container, CountriesModal} from '../../../containers';
import {CPagination, CText, ProgressiveImage} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, Modal, View} from 'react-native';
import AuthStyle from '../Auth.style';
import CForm from './Form';
import {useNavigation} from '@react-navigation/native';
import {Facebook, Google, LoginImg, RegisterImg} from '../../../assets/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');
import i18n from '../../../utils/i18n/i18n';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function Information({route}) {
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
  const [profileImage, updateProfileImage] = useState(false);
  const [selectDate, updateSelectDate] = useState(false);


  const [selectedCountry, updateSelectedCountry] = useState(
    reduxState.currentCountry,
  );

  const toggleCountryModal = () => {
    updateCountryModalIsOpen(!countryModalIsOpen);
  };

  const countryOnSelect = item => {
    updateSelectedCountry(item);
    toggleCountryModal();
  };

  const openLibrary = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      console.log("🚀 ~ file: index.js:80 ~ Information ~ open:", response)
      updateProfileImage(response?.assets?.[0])
      console.log(response);
    });
  };

  const headerProps = {
    showCenterLogo: false,
    headerLeft: true,
    headerTitle: 'Sing in',
    // showCenterLogo: RegisterImg
  };

  const submit = async values => {
    navigation.navigate('VerifyOtp');
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
      <CForm
        submit={submit}
        loading={reduxState?.loading}
        selectedCountry={selectedCountry}
        onImageClick={openLibrary}
        profileImage={profileImage}
        toggleCountryModal={toggleCountryModal}
        updateSelectDate={updateSelectDate}
        selectDate={selectDate}
      />

      <View
        style={[
          AuthStyle.orContainer,
          {paddingHorizontal: 20, marginStart: 30, alignSelf: 'center'},
        ]}>
        <CText style={AuthStyle.cardBottomText}>
          By registering, you’re agree to our,
        </CText>
      </View>
      <View
        style={[
          AuthStyle.orContainer,
          {paddingHorizontal: 20, alignSelf: 'center'},
        ]}>
        <CText
          onPress={() => navigation.navigate('Login')}
          style={[AuthStyle.cardBottomText2]}>
          Terms & Condition
        </CText>

        <CText style={AuthStyle.cardBottomText}>and</CText>
        <CText
          onPress={() => navigation.navigate('Login')}
          style={[AuthStyle.cardBottomText2]}>
          Privacy Policy
        </CText>
      </View>
      <Modal
        transparent={true}
        visible={countryModalIsOpen}
        onRequestClose={() => toggleCountryModal()}>
        <View style={AuthStyle.modalContainer}>
          <View style={AuthStyle.modalInnerContainer}>
            <CountriesModal onSelect={val => countryOnSelect(val)} />
          </View>
        </View>
      </Modal>
    </Container>
  );
}
export default Information;
