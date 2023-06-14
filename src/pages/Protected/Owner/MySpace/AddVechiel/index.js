import React, {useEffect, useState} from 'react';
import {Container, CountriesModal} from '../../../../../containers';
import {CPagination, CText, ProgressiveImage} from '../../../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, Modal, View} from 'react-native';
import AuthStyle from '../MySpace.style';
import CForm from './Form';
import {useNavigation} from '@react-navigation/native';
import {
  Facebook,
  Google,
  LoginImg,
  Profile,
} from '../../../../../assets/images';
import {BASE_URL_IMG} from '../../../../../config/webservices';
import { add_vehicle } from '../../../../../redux/actions/Root.Action';
const {width, height} = Dimensions.get('screen');

function AddVechiel({route}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [value, selectValue] = useState(false);

  const [stateModalIsOpen, updateStateModalIsOpen] = useState(false);
  const [selectedState, updateSelectedState] = useState('');
  const [selectedStateError, updateSelectedStateError] = useState('');

  const [companyModalIsOpen, updateCompanyModalIsOpen] = useState(false);
  const [selectedCompany, updateSelectedCompany] = useState('');
  console.log("🚀 ~ file: index.js:30 ~ AddVechiel ~ selectedCompany:", selectedCompany)
  const [selectedCompanyError, updateSelectedCompanyError] = useState('');

  const [companyModelModalIsOpen, updateCompanyModelModalIsOpen] =
    useState(false);
  const [selectedCompanyModel, updateCompanyModelState] = useState('');
  const [selectedCompanyModelError, updateSelectedCompanyModelError] =
    useState('');

  const [registerNo, updateRegisterNo] = useState('');
  const [registerNoError, updateRegisterNoError] = useState('');

  const [dregisterNo, updateDRegisterNo] = useState('');
  const [dregisterNoError, updateDRegisterNoError] = useState('');

  const toggleStateModal = () => {
    updateStateModalIsOpen(!stateModalIsOpen);
  };
  const stateOnSelect = item => {
    updateSelectedState(item);
    updateSelectedStateError('');
    toggleStateModal();
  };

  const toggleCompanyModal = () => {
    updateCompanyModalIsOpen(!companyModalIsOpen);
  };

  const companyOnSelect = item => {
    updateSelectedCompany(item);
    updateSelectedCompanyError('');
    toggleCompanyModal();
  };

  const toggleCompanyModelModal = () => {
    updateCompanyModelModalIsOpen(!companyModelModalIsOpen);
  };

  const companyModelOnSelect = item => {
    updateCompanyModelState(item);
    updateSelectedCompanyModelError('');
    toggleCompanyModelModal();
  };

  const reduxState = useSelector(({auth, language, root}) => {
    console.log('rootrootroot', root?.spaces, auth);
    return {
      spaces: root?.spaces,
      userRole: auth?.user?.role,
      loading: root?.vehicleLoading,
      userId: auth?.user?._id,
    };
  });
  const headerProps = {
    ProgressiveImageHeader: true,
    backButtonIcon: true,

    headerTitle: 'CheckOut',
    headerRight: false,
  };

  const submit = () => {
    if (!selectedCompany) {
      updateSelectedCompanyError('Please Select Company');
    } else if (!selectedCompanyModel) {
      updateSelectedCompanyModelError('Please Select Company Model');
    } else if (!selectedState) {
      updateSelectedStateError('Please Select Truck Type');
    } else if (!registerNo) {
      updateRegisterNoError('Please enter register number');
    } else if (!dregisterNo) {
      updateDRegisterNoError('Please enter License number');
    } else {
      updateRegisterNoError('');
      handleCallApi();
    }
  };
  const data = [
    {name: 'Kenworth'},
    {name: 'Peterbilt'},
    {name: 'Toyata'},
    {name: 'Suzuki'},
    {name: 'Mack Trucks'},
    {name: 'Honda'},
  ];
  const dataYear = [
    {name: '2023'},
    {name: '2022'},
    {name: '2021'},
    {name: '2020'},
    {name: '2019'},
    {name: '2018'},
    {name: '2017'},
    {name: '2016'},
    {name: '2015'},
    {name: '2014'},
    {name: '2013'},
    {name: '2012'},
    {name: '2011'},
    {name: '2010'},
  ];
  const dataTypes = [
    {name: 'Dump'},
    {name: 'Water'},
    {name: 'Bulldozers'},
    {name: 'Front Loaders'},
    {name: 'Grader'},
    {name: 'Cranes'},
    {name: 'Loaders'},
    {name: 'Compactors'},
  ];

  const handleCallApi = () => {
    const formData = new FormData();
    // formData.append('userId', reduxState?.userId),
    //   formData.append('company', selectedCompany?.name),
    //   formData.append('model', selectedCompanyModel?.name),
    //   formData.append('type', selectedState?.name),
    //   formData.append('regiterNo', registerNo),
    //   formData.append('drivingLicenseNo',dregisterNo),
      formData.append('vehicleType', 'Truck');
      dispatch(add_vehicle(formData , handleRes))
  };
  const handleRes = (res) => {
      console.log("🚀 ~ file: index.js:153 ~ handleRes ~ res:", res)
   
  }
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
      <CForm
        user={reduxState?.user}
        submit={submit}
        loading={reduxState?.loading}
        onForgotPress={() => navigation.navigate('Forgot')}
        onStatePress={toggleStateModal}
        selectedState={selectedState}
        selectedStateError={selectedStateError}
        onCompanyPress={toggleCompanyModal}
        selectedCompany={selectedCompany}
        selectedCompanyError={selectedCompanyError}
        onCompanyModelPress={toggleCompanyModelModal}
        selectedCompanyModel={selectedCompanyModel}
        selectedCompanyModelError={selectedCompanyModelError}
        registerNo={registerNo}
        updateRegisterNo={updateRegisterNo}
        registerNoError={registerNoError}
        dregisterNo={dregisterNo}
        updateDRegisterNo={updateDRegisterNo}
        dregisterNoError={dregisterNoError}
      />

      <Modal
        transparent={true}
        visible={stateModalIsOpen}
        onRequestClose={() => toggleStateModal()}>
        <View style={AuthStyle.modalContainer}>
          <View style={AuthStyle.modalInnerContainer}>
            <CountriesModal
              onSelect={val => stateOnSelect(val)}
              data={dataTypes || []}
              key="c"
              Value="G"
            />
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        visible={companyModalIsOpen}
        onRequestClose={() => toggleCompanyModal()}>
        <View style={AuthStyle.modalContainer}>
          <View style={AuthStyle.modalInnerContainer}>
            <CountriesModal
              onSelect={val => companyOnSelect(val)}
              data={data || []}
              key="c"
              Value="G"
            />
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        visible={companyModelModalIsOpen}
        onRequestClose={() => toggleCompanyModelModal()}>
        <View style={AuthStyle.modalContainer}>
          <View style={AuthStyle.modalInnerContainer}>
            <CountriesModal
              onSelect={val => companyModelOnSelect(val)}
              data={dataYear || []}
              key="c"
              Value="G"
            />
          </View>
        </View>
      </Modal>
    </Container>
  );
}
export default AddVechiel;
