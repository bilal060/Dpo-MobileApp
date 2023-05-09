import React, {useRef, memo, useState} from 'react';
import {Formik} from 'formik';
import Validations from './Validations';
import {View} from 'react-native';
import {
  CButton,
  CInput,
  CText,
  ProgressiveImage,
  RadioButton,
} from '../../../components';
import AuthStyle from '../Auth.style';
import {themes} from '../../../theme/colors';
import {CNameIcon, EmailIcon, PassIcon, PhoneIcon, RoleIcon} from '../../../assets/images';
import GlobalStyle from '../../../assets/styling/GlobalStyle';
import Styles from '../../../containers/tabBar/TabBar.style';
import { TouchableOpacity } from 'react-native-gesture-handler';

function CForm(props) {
  const {
    submit,
    loading,
    toggleCountryModal,
    selectedCountry,
    account,
    setAccount,
  } = props;
  const form = useRef(null);
  const fullName = useRef(null);
  const email = useRef(null);
  const number = useRef(null);
  const cpassword = useRef(null);
  const password = useRef(null);

  return (
    <Formik
      innerRef={form}
      onSubmit={values => submit(values)}
      initialValues={{}}
      validationSchema={Validations}>
      {({handleChange, values, handleSubmit, errors}) => {
        return (
          <View>
            <View style={AuthStyle.card}>
              <View style={AuthStyle.cardHeader}>
                <CText style={AuthStyle.cardHeaderTitle}>Register Now</CText>
                <CText style={AuthStyle.cardHeaderSubTitle}>
                  Create your new account.
                </CText>
              </View>

              <View style={AuthStyle.cardBody}>
                <>
                  {/* <View style={{flexDirection:"row" , paddingVertical:10 , paddingHorizontal:20 , }}>
                  <ProgressiveImage
                    resizeMode={'contain'}
                    style={{...GlobalStyle.inputIcon , ...AuthStyle.inputIcon}}
                    source={RoleIcon}
                  />

                  <CText>Select Role</CText>

                </View> */}
                  <View
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 40,
                      marginVertical: 10,
                      marginTop: -10,
                      flexDirection: 'row',
                      alignSelf: 'center',
                    }}>
                    {['Customer', 'Owner'].map(e => (
                      <TouchableOpacity onPress={()=>  setAccount(e)}  style={account === e ? AuthStyle.activeUser : AuthStyle.unactiveUser}>
                        <ProgressiveImage
                          resizeMode={'contain'}
                          style={{
                            ...GlobalStyle.inputIcon,
                            ...AuthStyle.inputIcon,
                          }}
                          source={account === e ? RoleIcon : CNameIcon}
                        />
                        <CText style={AuthStyle.activeText}>{e}</CText>
                      </TouchableOpacity> 

                      // <RadioButton value={account === e ? true : false} onChange={()=> setAccount(e)} title={e} containerStyles={{flexDirection:"row"}} />
                    ))}
                  </View>
                </>

                <CInput
                  ref={email}
                  placeholder={'Email Address'}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  error={errors.email}
                  sec
                  leftIconNAme={EmailIcon}
                  returnKeyType="next"
                  onSubmitEditing={() => handleSubmit()}
                />

                {/* <CInput
                  ref={number}
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
                  onSubmitEditing={() => handleSubmit()}
                /> */}
                <CInput
                  ref={password}
                  placeholder={'Password'}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry={true}
                  error={errors.password}
                  returnKeyType="next"
                  onSubmitEditing={() => cpassword.current.focus()}
                  // leftIconType="SimpleLineIcons"
                  // leftIconColor={themes.light.colors.gray4}
                  // leftIconNAme="lock"
                  leftIconNAme={PassIcon}
                  leftIconeSize={18}
                  rightIconType="AntDesign"
                  rightIconName="eyeo"
                  rightIconeColor={themes.light.colors.gray4}
                  rightIconeSize={18}
                />
                <CInput
                  ref={cpassword}
                  placeholder={'Confirm Password'}
                  value={values.cpassword}
                  onChangeText={handleChange('cpassword')}
                  secureTextEntry={true}
                  error={errors.cpassword}
                  returnKeyType="done"
                  onSubmitEditing={() => handleSubmit()}
                  // leftIconType="SimpleLineIcons"
                  // leftIconColor={themes.light.colors.gray4}
                  // leftIconNAme="lock"
                  leftIconNAme={PassIcon}
                  leftIconeSize={18}
                  rightIconType="AntDesign"
                  rightIconName="eyeo"
                  rightIconeColor={themes.light.colors.gray4}
                  rightIconeSize={18}
                />
              </View>

              <CButton
                title={'Next'}
                iconType="left"
                loading={loading}
                onPress={() => handleSubmit()}
              />

              {/* <View>
                <CText style={AuthStyle.continueText}>Or continue with</CText>
              </View> */}
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
export default memo(CForm);
