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
import {updateUserProfile} from '../../../redux/actions/Auth.action';
const {width, height} = Dimensions.get('screen');
import DocumentPicker from 'react-native-document-picker';

function CompanyProfile({route}) {
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
    reduxState.currentCountry,
  );

  const toggleCountryModal = () => {
    updateCountryModalIsOpen(!countryModalIsOpen);
  };

  const countryOnSelect = item => {
    updateSelectedCountry(item);
    toggleCountryModal();
  };

  const headerProps = {
    showCenterLogo: false,
    headerLeft: true,
    headerTitle: 'Sing in',
    // showCenterLogo: RegisterImg
  };

  const submit = async values => {
    const formData = new FormData();
    formData.append('cType', values?.CfullName);
    formData.append('cPhone', values?.phone);
    formData.append('cLicenseNo', values?.cLicenseNo);
    formData.append('cAddress', values?.cAddress);
    formData.append('c_docs', selectedFile);
    // const payload = {
    //   cType:values?.CfullName,
    //   cPhone:values?.phone,
    //   cLicenseNo:values?.cLicenseNo,
    //   doc_img:selectedFile
    // }
    dispatch(updateUserProfile(formData, callBack));

    
    // navigation.navigate("VerifyOtp")
  };
  const callBack = res => {
    if(res){
    navigation.navigate("Login")

    }
    console.log('🚀 ~ file: index.js:58 ~ callBack ~ res:', res);
  };
  const [selected, setSelected] = useState(undefined);
  const [selectedFile, setSelectedFile] = useState();

  const data = [
    {label: 'One', value: '1'},
    {label: 'Two', value: '2'},
    {label: 'Three', value: '3'},
    {label: 'Four', value: '4'},
    {label: 'Five', value: '5'},
  ];
  const onDocumentPress = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      setSelectedFile(res?.[0]);
      //Printing the log realted to the file

      //Setting the state to show single file attributes
      // this.setState({ singleFile: res });
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
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
      <CForm
        selectedFile={selectedFile}
        onDocumentPress={onDocumentPress}
        label="Select Item"
        data={data}
        onSelect={setSelected}
        submit={submit}
        loading={reduxState?.loading}
        selectedCountry={selectedCountry}
        toggleCountryModal={toggleCountryModal}
      />

      <View
        style={[
          AuthStyle.orContainer,
          {paddingHorizontal: 20, width: '70%', alignSelf: 'center'},
        ]}>
        <CText style={AuthStyle.cardBottomText}>
          By registering, you’re agree to our,
        </CText>
        <CText
          onPress={() => navigation.navigate('Login')}
          style={[AuthStyle.cardBottomText2]}>
          Terms & Condition{' '}
        </CText>
      </View>
      <View
        style={[
          AuthStyle.orContainer,
          {paddingHorizontal: 20, width: '70%', alignSelf: 'center'},
        ]}>
        <CText
          onPress={() => navigation.navigate('Login')}
          style={AuthStyle.cardBottomText}>
          {' '}
          and
        </CText>

        <CText
          onPress={() => navigation.navigate('Login')}
          style={[AuthStyle.cardBottomText2]}>
          {' '}
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
export default CompanyProfile;
