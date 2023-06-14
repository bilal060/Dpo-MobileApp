import {FlatList, StyleSheet, Text, View, Modal} from 'react-native';
import React, {useState} from 'react';
import {Container, CountriesModal, PackageCard} from '../../../../containers';


import {
  CButton,
  CheckBox,
  CList,
  CPagination,
  CText,
  ProfileCard,
  ProgressiveImage,
  RadioButton,
} from '../../../../components';

import Styles from './NewSpace.style';

import {themes} from '../../../../theme/colors';
import {ManagerIcon, PlaceIcon} from '../../../../assets/images';
import GlobalStyle from '../../../../assets/styling/GlobalStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';

import TruckParking from './TruckParking';
import CarParking from './CarParking';
import WareHouse from './WareHouse';
import Storage from './Storage';


import {useSelector} from 'react-redux';
const NewSpace = ({navigation}) => {
  const [selectValue, setSelectedValue] = useState(0);
  const headerProps = {
    ProgressiveImageHeader: true,
    headerLeft: true,
    backBtnColor: themes.light.colors.fontLowColor,
    headerTransparentStyle: Styles.headerTransparentStyle,
    headerTitleStyle: Styles.headerTitleStyle,
    headerTitle: 'Add New Space',
    backButtonIcon: true,
    headerRight: false,
    rightPress: () => navigation.navigate('AddNewManager'),
  };

  const timeSlot = ['Truck Parking', 'Car Parking', 'Warehouse', 'Storage'];

  const reduxState = useSelector(({auth, global}) => {
    return {
      loading: auth.signUpLoading,
      currentCountry: global?.currentCountry,
      countries: global?.countries,
    };
  });

  const renderTimeSlot = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedValue(index)}
        style={
          index === selectValue ? Styles.memberCard : Styles.unActiveMember
        }>
        <CText
          style={
            index === selectValue ? Styles.manager : Styles.unActivemanager
          }>
          {item}
        </CText>
      </TouchableOpacity>
    );
  };

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

  const renderProfile = ({item, index}) => {
    return (
      <View style={Styles.ProfileCard}>
        <ProfileCard
          name={item.name}
          address={item?.address}
          active={item?.active}
          phone={item?.phone}
        />
      </View>
    );
  };

  const submit = async values => {
    navigation.navigate('NewSpace');
  };

  const renderForm = value => {
    if (value === 0) {
      return (
        <TruckParking
          submit={submit}
          loading={reduxState?.loading}
          selectedCountry={selectedCountry}
          toggleCountryModal={toggleCountryModal}
        />
      );
    } else if(value === 1) {
      return (
        <CarParking
          submit={submit}
          loading={reduxState?.loading}
          selectedCountry={selectedCountry}
          toggleCountryModal={toggleCountryModal}
        />
      );
    } else if(value === 2) {
      return (
        <WareHouse
          submit={submit}
          loading={reduxState?.loading}
          selectedCountry={selectedCountry}
          toggleCountryModal={toggleCountryModal}
        />
      );
    }
    else if(value === 3) {
      return (
        <Storage
          submit={submit}
          loading={reduxState?.loading}
          selectedCountry={selectedCountry}
          toggleCountryModal={toggleCountryModal}
        />
      );
    }
  };

  return (
    <Container
      scrollView
      bottomSpace
      edges={['left', 'right']}
      headerProps={headerProps}>
      <View style={Styles.container}>
        <View style={{paddingHorizontal: 20, paddingVertical: 25}}>
          <View style={[GlobalStyle.row, Styles.headerView]}>
            <ProgressiveImage
              source={PlaceIcon}
              resizeMode="contain"
              style={{width: 25, height: 25}}
            />
            <CText style={Styles.listHeader}>{`Select Space Stype`}</CText>
          </View>
          <FlatList
            data={timeSlot}
            renderItem={renderTimeSlot}
            horizontal
            nestedScrollEnabled
            
            ListHeaderComponentStyle={{flex: 1}}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {renderForm(selectValue)}

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

export default NewSpace;

const styles = StyleSheet.create({});
