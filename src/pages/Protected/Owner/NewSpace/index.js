import {FlatList, StyleSheet, Text, View, Modal} from 'react-native';
import React, {useState, useEffect} from 'react';
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
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import DocumentPicker from 'react-native-document-picker';

import {useDispatch, useSelector} from 'react-redux';
import {
  add_newSpace,
  get_spaceCategory,
} from '../../../../redux/actions/Root.Action';
const NewSpace = ({navigation}) => {
  const dispatch = useDispatch();
  const [selectValue, setSelectedValue] = useState('Storage Unit');
  const [categories, setCategories] = useState({});
  const [mapAdreess, setMapAdreess] = useState('');
  const [selectedFile, setSelectedFile] = useState();

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

  const timeSlot = [
    {
      name: 'True',
    },
    {
      name: 'False',
    },
  ];

  const reduxState = useSelector(({auth, global}) => {
    return {
      loading: auth.signUpLoading,
      currentCountry: global?.currentCountry,
      countries: global?.countries,
      userRole: auth?.user?.role,
      userId: auth?.user?._id,
    };
  });
  useEffect(() => {
    getSpaceCategory();
  }, [reduxState?.userRole]);

  const getSpaceCategory = () => {
    dispatch(get_spaceCategory(reduxState?.userRole, callBack));
  };
  const callBack = res => {
    setCategories(res?.roleCategory);
  };
  const renderTimeSlot = ({item, index}) => {
    return (
      <TouchableOpacity 
        onPress={() => setSelectedValue(item)}
        style={
          item?.name === selectValue?.name
            ? Styles.memberCard
            : Styles.unActiveMember
        }>
        <CText
          style={
            item?.name === selectValue?.name
              ? Styles.manager
              : Styles.unActivemanager
          }>
          {item?.name}
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

  const [cctcModalIsOpen, updateCctvModalIsOpen] = useState(false);
  const [selectedCCtv, updateSelectedCctv] = useState('');

  const toggleCctvModal = () => {
    updateCctvModalIsOpen(!cctcModalIsOpen);
  };

  const cctcOnSelect = item => {
    updateSelectedCctv(item?.name);
    toggleCctvModal();
  };

  const [securityModalIsOpen, updateSecurityModalIsOpen] = useState(false);
  const [selectedSecurity, updateSelectedSecurity] = useState('');

  const toggleSecurityModal = () => {
    updateSecurityModalIsOpen(!securityModalIsOpen);
  };

  const securityOnSelect = item => {
    updateSelectedSecurity(item);
    toggleSecurityModal();
  };

  const [fuelModalIsOpen, updateFuelModalIsOpen] = useState(false);
  const [selectedFuel, updateSelectedFuel] = useState('');

  const toggleFuelModal = () => {
    updateFuelModalIsOpen(!fuelModalIsOpen);
  };

  const fuelOnSelect = item => {
    updateSelectedFuel(item);
    toggleFuelModal();
  };

  const [staffModalIsOpen, updateStaffModalIsOpen] = useState(false);
  const [selectedStaff, updateSelectedStaff] = useState('');

  const toggleStaffModal = () => {
    updateStaffModalIsOpen(!staffModalIsOpen);
  };

  const staffOnSelect = item => {
    updateSelectedStaff(item);
    toggleStaffModal();
  };

  const [climateModalIsOpen, updateClimateModalIsOpen] = useState(false);
  const [selectedClimate, updateSelectedClimate] = useState('');

  const toggleClimateModal = () => {
    updateClimateModalIsOpen(!climateModalIsOpen);
  };

  const climateOnSelect = item => {
    updateSelectedClimate(item);
    toggleClimateModal();
  };

  // const [secModalIsOpen, updateSecurityModalIsOpen] = useState(false);
  // const [selectedSecurity, updateSelectedSecurity] = useState("");

  // const toggleSecurityModal = () => {
  //   updateSecurityModalIsOpen(!SecurityModalIsOpen);
  // };

  // const SecurityOnSelect = item => {
  //   toggleSecurityModal();
  // };

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

  const onDocumentPress = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
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

  const submit = async values => {
    console.log('🚀 ~ file: index.js:195 ~ submit ~ values:', values);
    navigation.navigate('NewSpace');
    const formData = new FormData();
    formData.append('userId', reduxState?.userId);
    formData.append('categoryId', categories?._id);
    formData.append('area', values?.areaSize);
    formData.append('contact', values?.phone);
    formData.append('security', 123);
    formData.append('cameras', true);
    formData.append('capacity', values.parking);
    formData.append('description', values.decs);

    formData.append('fuel', true);
    formData.append('rate_hour', values?.rHour);
    formData.append('rate_day', values?.rDay);
    formData.append('rate_week', values?.rWeek);
    formData.append('rate_month', values?.rMonth);
    formData.append(
      'location',
      'ARFA Tower, Lahore – Kasur Road, Nishtar Town, Lahore, Pakistan',
    );
    formData.append('space_imgs', {
      uri: selectedFile?.uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    formData.append('subCategoryId', selectValue?._id);
    formData.append('ownerSite', true);
    formData.append('paidStaff', true);
    formData.append('paidSecurity', true);
    formData.append('climateControl', true);

    dispatch(add_newSpace(formData, handleSpacecallBack));
  };
  const handleSpacecallBack = res => {
    navigation.navigate('MySpace');
  };

  const renderForm = value => {
    if (value === 'Truck Parking') {
      return (
        <TruckParking
          submit={submit}
          loading={reduxState?.loading}
          selectedCountry={selectedCountry}
          toggleCountryModal={toggleCountryModal}
          selectedCCtv={selectedCCtv}
          toggleCctvModal={toggleCctvModal}
          selectedFuel={selectedFuel}
          toggleFuelModal={toggleFuelModal}
          mapAdreess={mapAdreess}
          setMapAdreess={setMapAdreess}
          selectedClimate={selectedClimate}
          toggleClimateModal={toggleClimateModal}
          selectedSecurity={selectedSecurity}
          toggleSecurityModal={toggleSecurityModal}
          selectedStaff={selectedStaff}
          toggleStaffModal={toggleStaffModal}
          onDocumentPress={onDocumentPress}
          selectedFile={selectedFile}
        />
      );
    } else if (value === 'Car Parking') {
      return (
        <CarParking
          submit={submit}
          loading={reduxState?.loading}
          selectedCountry={selectedCountry}
          toggleCountryModal={toggleCountryModal}
          selectedCCtv={selectedCCtv}
          toggleCctvModal={toggleCctvModal}
          selectedFuel={selectedFuel}
          toggleFuelModal={toggleFuelModal}
          mapAdreess={mapAdreess}
          setMapAdreess={setMapAdreess}
          selectedClimate={selectedClimate}
          toggleClimateModal={toggleClimateModal}
          selectedSecurity={selectedSecurity}
          toggleSecurityModal={toggleSecurityModal}
          selectedStaff={selectedStaff}
          toggleStaffModal={toggleStaffModal}
          onDocumentPress={onDocumentPress}
          selectedFile={selectedFile}
        />
      );
    } else if (value === 'Warehouse') {
      return (
        <WareHouse
          submit={submit}
          loading={reduxState?.loading}
          selectedCountry={selectedCountry}
          toggleCountryModal={toggleCountryModal}
          selectedCCtv={selectedCCtv}
          toggleCctvModal={toggleCctvModal}
          selectedFuel={selectedFuel}
          toggleFuelModal={toggleFuelModal}
          mapAdreess={mapAdreess}
          setMapAdreess={setMapAdreess}
          selectedClimate={selectedClimate}
          toggleClimateModal={toggleClimateModal}
          selectedSecurity={selectedSecurity}
          toggleSecurityModal={toggleSecurityModal}
          selectedStaff={selectedStaff}
          toggleStaffModal={toggleStaffModal}
          onDocumentPress={onDocumentPress}
          selectedFile={selectedFile}
        />
      );
    } else if (value === 'Storage Unit') {
      return (
        <Storage
          submit={submit}
          loading={reduxState?.loading}
          selectedCountry={selectedCountry}
          toggleCountryModal={toggleCountryModal}
          selectedCCtv={selectedCCtv}
          toggleCctvModal={toggleCctvModal}
          selectedFuel={selectedFuel}
          toggleFuelModal={toggleFuelModal}
          mapAdreess={mapAdreess}
          setMapAdreess={setMapAdreess}
          selectedClimate={selectedClimate}
          toggleClimateModal={toggleClimateModal}
          selectedSecurity={selectedSecurity}
          toggleSecurityModal={toggleSecurityModal}
          selectedStaff={selectedStaff}
          toggleStaffModal={toggleStaffModal}
          onDocumentPress={onDocumentPress}
          selectedFile={selectedFile}
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
            data={categories?.subcategories}
            renderItem={renderTimeSlot}
            horizontal
            nestedScrollEnabled
            ListHeaderComponentStyle={{flex: 1}}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {renderForm(selectValue?.name)}

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

        <Modal
          transparent={true}
          visible={cctcModalIsOpen}
          onRequestClose={() => toggleCctvModal()}>
          <View style={Styles.modalContainer}>
            <View style={Styles.modalInnerContainer}>
              <CountriesModal
                data={timeSlot}
                onSelect={val => cctcOnSelect(val)}
              />
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          visible={securityModalIsOpen}
          onRequestClose={() => toggleSecurityModal()}>
          <View style={Styles.modalContainer}>
            <View style={Styles.modalInnerContainer}>
              <CountriesModal
                data={timeSlot}
                onSelect={val => securityOnSelect(val)}
              />
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          visible={fuelModalIsOpen}
          onRequestClose={() => toggleFuelModal()}>
          <View style={Styles.modalContainer}>
            <View style={Styles.modalInnerContainer}>
              <CountriesModal
                data={timeSlot}
                onSelect={val => fuelOnSelect(val)}
              />
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          visible={staffModalIsOpen}
          onRequestClose={() => toggleStaffModal()}>
          <View style={Styles.modalContainer}>
            <View style={Styles.modalInnerContainer}>
              <CountriesModal
                data={timeSlot}
                onSelect={val => staffOnSelect(val)}
              />
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          visible={climateModalIsOpen}
          onRequestClose={() => toggleClimateModal()}>
          <View style={Styles.modalContainer}>
            <View style={Styles.modalInnerContainer}>
              <CountriesModal
                data={timeSlot}
                onSelect={val => climateOnSelect(val)}
              />
            </View>
          </View>
        </Modal>
      </View>
    </Container>
  );
};

export default NewSpace;

const styles = StyleSheet.create({});
