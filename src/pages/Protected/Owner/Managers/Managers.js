import {FlatList, StyleSheet, Text, View, Modal} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
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
import {
  filter_ownerManager,
  getSpacsss,
  get_ownerManager,
} from '../../../../redux/actions/Root.Action';

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
  const [managers, setManagers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getAllAPi();
  }, [reduxState?.userId]);

  const getAllAPi = () => {
    dispatch(getSpacsss(reduxState?.userId, callBack));
    dispatch(get_ownerManager(reduxState?.userId, managerCallBack));
  };

  const callBack = res => {
    console.log('🚀 ~ file: Managers.js:54 ~ callBack ~ res:', res);
    setSpaces(res?.spaces);
  };

  const filterManger = id => {
    const payload = {
      id: reduxState?.userId,
      spaceId: id,
    };
    dispatch(filter_ownerManager(payload, managerCallBack));
  };

  const managerCallBack = res => {
    
    setManagers(res?.managers);
  };

 

  const [countryModalIsOpen, updateCountryModalIsOpen] = useState(false);
  const [selectedCountry, updateSelectedCountry] = useState('');

 
  const renderListHeader = () => (
    <CText style={Styles.mainHeading}>{`All Managers`}</CText>
  );

  const renderProfile = ({item, index}) => {
    return (
      <View style={Styles.ProfileCard}>
        <ProfileCard
          name={item.fullName}
          address={item?.branch?.location?.address}
          active={item?.isTrue}
          phone={item?.phoneNo}
        />
      </View>
    );
  };
  const toggleCountryModal = () => {
    updateCountryModalIsOpen(!countryModalIsOpen);
  };

  const countryOnSelect = item => {
    filterManger(item?._id);
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
           
            inputInnerContainerStyle={Styles.inputInnerContainerStyle}
            sec
            type="view"
            leftIconNAme={TimeIcon}
            returnKeyType="next"
          />
         
          <CList
            style={Styles.spacelist}
            // numColumns={2}
            //   horizontal
            // contentContainerStyle={[GlobalStyle.list, ]}
            data={managers}
            loading={reduxState.loading}
            renderItem={renderProfile}
            ListHeaderComponent={renderListHeader}
            ListHeaderComponentStyle={Styles.listHeader}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            emptyOptions={{
              // icon: require('../../assets/images/empty.png'),
              text: 'Mangers not found',
            }}
            onRefreshLoading={reduxState.loading}
            onRefreshHandler={() => getAllAPi()}
            // onEndReached={onEndReached}
            // onEndReachedThreshold={0.1}
            // maxToRenderPerBatch={10}
            // windowSize={10}
          />
          {/* <FlatList
            ListHeaderComponent={renderListHeader}
            ListHeaderComponentStyle={Styles.listHeader}
            data={managers}
            nestedScrollEnabled
            extraData={managers}
            renderItem={renderProfile}
            showsVerticalScrollIndicator={false}
          /> */}
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
