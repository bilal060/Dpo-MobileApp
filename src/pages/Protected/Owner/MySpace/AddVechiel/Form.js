import React, {useRef, memo} from 'react';
import {Formik} from 'formik';
import {View , TouchableOpacity} from 'react-native';
import {CButton, CInput, CText, DateTimePicker} from '../../../../../components';
import AuthStyle from '../MySpace.style';
import {themes} from '../../../../../theme/colors';
import { DesIcon, EmailIcon, PassIcon, PhoneIcon, Truck, VComapny, VModal, Vreg, langIcon } from '../../../../../assets/images';
import { useTranslation } from 'react-i18next';
import moment from 'moment';



function CForm(props) {
  const {submit, loading , onForgotPress , selectedCountry , toggleCountryModal , selectDate , updateSelectDate ,
    updateRegisterNo,
    registerNo,
    selectedCompanyError,
    selectedCompany,
    onCompanyPress,
    onCompanyModelPress,
    selectedCompanyModel,
    selectedCompanyModelError,
    onStatePress , selectedState  ,
    updateDRegisterNo,dregisterNo,dregisterNoError,
    registerNoError,
     user , selectedStateError} = props;
  const {t,} = useTranslation();

  const form = useRef(null);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const phone = useRef(null);
const des = useRef(null);
  return (
    <Formik
      innerRef={form}
      enableReinitialize
      onSubmit={values => submit(values)}
      initialValues={{
        fullName:user?.fullName,
        phone:user?.phone,
        email:user?.email,
        des:user?.bio
      }}
    //   validationSchema={Validations}
      >
      {({handleChange, values, handleSubmit, errors}) => {
        console.log('errors', errors);
        return (
          <View>
            <View style={AuthStyle.card}>
              
              

              <View style={AuthStyle.cardBody}>
                <CInput
                  ref={fullName}
                  placeholder={t('Select Company')}
                  value={values.fullName}
                  onChangeText={handleChange('fullName')}
                  sec
                  leftIconNAme={VComapny}
                  type="view"
                  error={selectedCompanyError}
                  selectValue={selectedCompany}
                  onPress={onCompanyPress}
                  returnKeyType="next"
                  onSubmitEditing={() =>password.current.focus()}
                />
                <CInput
                  ref={fullName}
                  placeholder={t('Select Model')}
                  value={values.fullName}
                  onChangeText={handleChange('fullName')}
                  sec
                  error={selectedCompanyModelError}
                  selectValue={selectedCompanyModel}
                  onPress={onCompanyModelPress}
                  leftIconNAme={VModal}
                  type="view"
                 
                  returnKeyType="next"
                  onSubmitEditing={() =>password.current.focus()}
                />
                 <CInput
                  ref={email}
                  placeholder={t('Select Truck Type')}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  sec
                  leftIconNAme={Truck}
                  type="view"
                  error={selectedStateError}
                  selectValue={selectedState}
                  onPress={onStatePress}
                  returnKeyType="next"
                  onSubmitEditing={() =>password.current.focus()}
                />
                {/* <CInput
                  ref={des}
                  // inputLabel={'Email_address'}
                  placeholder={'States'}
                  // value={selectedState ? selectedState?.name : ''}
                  // onChangeText={handleChange('city')}
                  error={selectedStateError}
                  selectValue={selectedState}
                  sec
                  onPress={onStatePress}
                  type="view"
                  leftIconType="MaterialCommunityIcons"
                  returnKeyType="next"
                  onSubmitEditing={() => dob.current.focus()}
                /> */}
                
              {/* <DateTimePicker placeHolder={"Date of birth"}  hideIcon value={selectDate ? selectDate : new Date(user?.dob)} onChange={updateSelectDate}/> */}

                 <CInput
                  ref={des}
                  placeholder={t('Registration No.')}
                  value={registerNo}
                  onChangeText={updateRegisterNo}
                  error={registerNoError}
                  sec
                  leftIconNAme={Vreg}
                 
                  returnKeyType="next"
                  onSubmitEditing={() =>password.current.focus()}
                />
                
                <CInput
                  ref={des}
                  placeholder={t('Driving License No')}
                  value={dregisterNo}
                  onChangeText={updateDRegisterNo}
                  error={dregisterNoError}
                  sec
                  leftIconNAme={Vreg}
                 
                  returnKeyType="next"
                  onSubmitEditing={() =>password.current.focus()}
                />
               
                 
                {/* <CInput
                  ref={fullName}
                  placeholder={'Select Branch'}
                  value={values.fullName}
                  onChangeText={handleChange('fullName')}
                  error={errors.fullName}
                  sec
                  type="view"
                  leftIconNAme={langIcon}
                  returnKeyType="next"
                  onSubmitEditing={() => dob.current.focus()}
                /> */}

               
              </View>

              <CButton
                title={'Cancel'}
                iconType="left"
                loading={loading}
                buttonStyle={AuthStyle.spaceCancelBtn}
                buttonText={AuthStyle.buttonText}
                onPress={() => handleSubmit()}
              />
              <CButton
                title={'Reserve Slot'}
                iconType="left"
                loading={loading}
                buttonStyle={AuthStyle.spaceSaveBtn}
                onPress={() => submit()}
              />

              

            
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
export default memo(CForm);
