import {FlatList, StyleSheet, Text, View, Modal} from 'react-native';
import React, {useRef, useState , useEffect} from 'react';
import {Container, CountriesModal, PackageCard} from '../../../../containers';
import {
  CButton,
  CheckBox,
  CInput,
  CList,
  CPagination,
  CText,
  ProfileCard,
  ProgressiveImage,
  RadioButton,
} from '../../../../components';
import Styles from './Managers.styles';
import {themes} from '../../../../theme/colors';
import {CNameIcon, ManagerIcon, TimeIcon} from '../../../../assets/images';
import GlobalStyle from '../../../../assets/styling/GlobalStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getSpacsss} from '../../../../redux/actions/Root.Action';

const Managers = ({navigation}) => {
  const type = useRef(null);
  const sort = useRef(null);
  const headerProps = {
    ProgressiveImageHeader: true,
    headerLeft: true,
    backBtnColor: themes.light.colors.fontLowColor,
    headerTransparentStyle: Styles.headerTransparentStyle,
    headerTitleStyle: Styles.headerTitleStyle,
    headerTitle: 'My Managers',
    headerRight: true,
    backButtonIcon: false,
    headerRight: true,
    rightPress: () => navigation.navigate('AddNewManager'),
  };
  const reduxState = useSelector(({auth, language, root}) => {
    console.log('rootrootroot', root?.spaces, auth);
    return {
      spaces: root?.spaces,
      userRole: auth?.user?.role,
      loading: root?.spacesLoading,
      userId: auth?.user?._id,
    };
  });

  const timeSlot = ['09 :00', '10 :00'];
  const [spaces, setSpaces] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpacsss(reduxState?.userId, callBack));
  }, []);

  const callBack = res => {
    console.log('🚀 ~ file: Managers.js:54 ~ callBack ~ res:', res);
    setSpaces(res?.spaces);
  };

  const data = [
    {
      name: 'Tony Stark',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      active: true,
    },
    {
      name: 'Tony Stark',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      active: true,
    },
    {
      name: 'Tony Stark',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      active: true,
    },
    {
      name: 'Tony Stark',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      active: false,
    },
    {
      name: 'Tony Stark',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      active: true,
    },
    {
      name: 'Tony Stark',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      active: false,
    },
  ];



  const [countryModalIsOpen, updateCountryModalIsOpen] = useState(false);
  const [selectedCountry, updateSelectedCountry] = useState("");
  console.log("🚀 ~ file: Managers.js:101 ~ Managers ~ selectedCountry:", selectedCountry)

  const renderTimeSlot = ({item, index}) => {
    return (
      <View style={Styles.memberCard}>
        <View style={GlobalStyle.row}>
          <CText style={Styles.manager}>{`Total Managers`}</CText>
          <ProgressiveImage
            source={ManagerIcon}
            resizeMode="contain"
            style={{width: 25, height: 25, marginTop: 10}}
          />
        </View>

        <View>
          <CText style={Styles.activeMember}>{`14`}</CText>
        </View>
      </View>
    );
  };

  const renderListHeader = () => (
    <CText style={Styles.mainHeading}>{`All Managers`}</CText>
  );

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
  const toggleCountryModal = () => {
    updateCountryModalIsOpen(!countryModalIsOpen);
  };

  const countryOnSelect = item => {
    updateSelectedCountry(item);
    toggleCountryModal();
  };

  return (
    <Container
      scrollView
      bottomSpace
      edges={['left', 'right']}
      headerProps={headerProps}>
      <View style={Styles.container}>
        <View style={{paddingHorizontal: 20, paddingVertical: 25}}>
          <View style={[GlobalStyle.row, {alignItems: 'center'}]}>
            <CText style={Styles.mainHeading}>Booking History</CText>
          </View>
          <CInput
            ref={type}
            placeholder={'Select Branch'}
            // selectedCountry={selectedCountry}
            onPress={toggleCountryModal}
            selectValue={selectedCountry}
            // onChangeText={handleChange('fuel')}
            // error={errors.fuel}
            sec
            inputInnerContainerStyle={Styles.inputInnerContainerStyle}
            type="view"
            leftIconNAme={CNameIcon}
            returnKeyType="next"
          />
          <CInput
            ref={type}
            placeholder={'Select Time Slot'}
            // value={values.fuel}
            // onChangeText={handleChange('fuel')}
            // error={errors.fuel}
            inputInnerContainerStyle={Styles.inputInnerContainerStyle}
            sec
            type="view"
            leftIconNAme={TimeIcon}
            returnKeyType="next"
          />
          {/* <FlatList
            data={timeSlot}
            renderItem={renderTimeSlot}
            horizontal
            showsHorizontalScrollIndicator={false}
          /> */}
          <FlatList
            ListHeaderComponent={renderListHeader}
            ListHeaderComponentStyle={Styles.listHeader}
            data={data}
            nestedScrollEnabled
            extraData={data}
            renderItem={renderProfile}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      <Modal
        transparent={true}
        visible={countryModalIsOpen}
        onRequestClose={() => toggleCountryModal()}>
        <View style={Styles.modalContainer}>
          <View style={Styles.modalInnerContainer}>
            <CountriesModal
              data={spaces}
              onSelect={val => countryOnSelect(val)}
            />
          </View>
        </View>
      </Modal>
    </Container>
  );
};

export default Managers;

const styles = StyleSheet.create({});
