import React, {useRef, memo} from 'react';
import {Formik} from 'formik';
import Validations from './Validations';
import {View , TouchableOpacity} from 'react-native';
import {CButton, CInput, CText, DateTimePicker} from '../../../../../components';
import AuthStyle from '../Myprofile.style';
import {themes} from '../../../../../theme/colors';
import { DesIcon, EmailIcon, PassIcon, PhoneIcon, langIcon } from '../../../../../assets/images';
import { useTranslation } from 'react-i18next';



function CForm(props) {
  const {submit, loading , onForgotPress , selectedCountry , toggleCountryModal , selectDate , updateSelectDate} = props;
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
        fullName:"Elvis Cadmora",
        phone:"012 3456 789",
        email:"elviscadmora@email.com",
        des:"Lorem ipsum dolor sit amet consr."
      }}
      validationSchema={Validations}>
      {({handleChange, values, handleSubmit, errors}) => {
        return (
          <View>
            <View style={AuthStyle.card}>
              
              

              <View style={AuthStyle.cardBody}>
                <CInput
                  ref={fullName}
                  placeholder={t('Email Address')}
                  value={values.fullName}
                  onChangeText={handleChange('fullName')}
                  error={errors.fullName}
                  sec
                  leftIconNAme={EmailIcon}
                 
                  returnKeyType="next"
                  onSubmitEditing={() =>password.current.focus()}
                />
                 <CInput
                  ref={email}
                  placeholder={t('Email Address')}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  error={errors.email}
                  sec
                  leftIconNAme={EmailIcon}
                 
                  returnKeyType="next"
                  onSubmitEditing={() =>password.current.focus()}
                />
                <CInput
                  ref={phone}
                  type="number"
                  // disabled={true}
                  selectedCountry={selectedCountry}
                  onPress={() => toggleCountryModal()}
                  keyboardType={'numeric'}
                  leftIconNAme={PhoneIcon}
                  placeholder={'000-000-0000'}
                  value={values?.phone}
                  onChangeText={val => {
                    let phone = val;
                    let reg = /^0+/gi;
                    if (phone.match(reg)) {
                      phone = phone.replace(reg, '');
                    }
                    handleChange('phone')(phone);
                  }}
                  error={errors.phone}
                  returnKeyType="next"
                  onSubmitEditing={() => bio.current.focus()}
                />
              <DateTimePicker placeHolder={"Date of birth"}  hideIcon value={new Date()} onChange={updateSelectDate}/>

                 <CInput
                  ref={des}
                  placeholder={t('Email Address')}
                  value={values.des}
                  onChangeText={handleChange('des')}
                  error={errors.des}
                  sec
                  leftIconNAme={DesIcon}
                 
                  returnKeyType="next"
                  onSubmitEditing={() =>password.current.focus()}
                />
                 
                <CInput
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
                />

               
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
                title={'Save'}
                iconType="left"
                loading={loading}
                buttonStyle={AuthStyle.spaceSaveBtn}
                onPress={() => handleSubmit()}
              />

              

            
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
export default memo(CForm);
