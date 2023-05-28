import {FlatList, StyleSheet, Text, View, Modal} from 'react-native';
import React, {useState} from 'react';
import {
  Container,
  CountriesModal,
  PackageCard,
} from '../../../../../containers';
import {
  CButton,
  CheckBox,
  CList,
  CPagination,
  CText,
  ProfileCard,
  ProgressiveImage,
  RadioButton,
} from '../../../../../components';
import Styles from '../Managers.styles';
import {themes} from '../../../../../theme/colors';
import {ManagerIcon} from '../../../../../assets/images';
import GlobalStyle from '../../../../../assets/styling/GlobalStyle';
import {useSelector} from 'react-redux';
import CForm from './Form';

const NewPayment = ({navigation}) => {
  const headerProps = {
    ProgressiveImageHeader: true,
    headerLeft: true,

    headerTitle: 'Add Payment Method',
    backButtonIcon: true,
    headerRight: false,
  };

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

  const submit = async values => {
    navigation.navigate('NewSpace');
  };

  return (
    <Container
      backgroundColor={'theme-color'}
      showPattern={true}
      scrollView={true}
      style={Styles.style}
      headerProps={headerProps}
      loading={reduxState?.loading}
      scrollViewProps={{
        contentContainerStyle: Styles.container,
      }}>
      <View style={{paddingHorizontal: 20, paddingVertical: 25}}>
        <CForm
          submit={submit}
          loading={reduxState?.loading}
          selectedCountry={selectedCountry}
          toggleCountryModal={toggleCountryModal}
        />

       
        <Modal
          transparent={true}
          visible={countryModalIsOpen}
          onRequestClose={() => toggleCountryModal()}>
          <View style={Styles.modalContainer}>
            <View style={Styles.modalInnerContainer}>
              <CountriesModal onSelect={val => countryOnSelect(val)} />
            </View>
          </View>
        </Modal>
      </View>
    </Container>
  );
};

export default NewPayment;
 
const styles = StyleSheet.create({});
