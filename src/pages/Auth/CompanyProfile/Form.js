import React, {useRef, memo} from 'react';
import {Formik} from 'formik';
import Validations from './Validations';
import {View} from 'react-native';
import {
  CButton,
  CDropDown,
  CInput,
  CText,
  ProgressiveImage,
} from '../../../components';
import AuthStyle from '../Auth.style';
import {themes} from '../../../theme/colors';
import {
  CNameIcon,
  CardIcon,
  DobIcon,
  EmailIcon,
  LocationIcon,
  PassIcon,
  PhoneIcon,
  UploadIcon,
} from '../../../assets/images';

function CForm(props) {
  const {submit, loading, toggleCountryModal, selectedCountry} = props;

  const form = useRef(null);
  const fullName = useRef(null);
  const email = useRef(null);
  const number = useRef(null);
  const cpassword = useRef(null);
  const password = useRef(null);
  const dob = useRef(null);
  const idCard = useRef(null);

  return (
    <Formik
      innerRef={form}
      onSubmit={values => submit(values)}
      initialValues={{}}
      validationSchema={Validations}>
      {({handleChange, values, handleSubmit, errors}) => {
        return (
          <View>
            <View style={[AuthStyle.card]}>
              <View style={AuthStyle.cardHeader}>
                <CText style={AuthStyle.cardHeaderTitle}>CompanyProfile</CText>
                <CText style={AuthStyle.cardHeaderSubTitle}>
                  Enter your company’s information below.
                </CText>
              </View>

              <View style={AuthStyle.cardBody}>
                <CInput
                  ref={fullName}
                  placeholder={'Company Name'}
                  value={values.fullName}
                  onChangeText={handleChange('fullName')}
                  error={errors.fullName}
                  sec
                  leftIconNAme={CNameIcon}
                  returnKeyType="next"
                  onSubmitEditing={() => number.current.focus()}
                />

                <CInput
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
                  onSubmitEditing={() => fullName.current.focus()}
                />
              </View>

              <CInput
                ref={fullName}
                placeholder={'Company License Number'}
                value={values.fullName}
                onChangeText={handleChange('fullName')}
                error={errors.fullName}
                sec
                leftIconNAme={CardIcon}
                returnKeyType="next"
                onSubmitEditing={() => dob.current.focus()}
              />



              <CInput
                ref={dob}
                placeholder={'Complete Address'}
                value={values.dob}
                onChangeText={handleChange('dob')}
                error={errors.dob}
                sec
                leftIconNAme={LocationIcon}
                returnKeyType="next"
                onSubmitEditing={() => idCard.current.focus()}
              />
              {/* <CDropDown   label={label}  data={data} onSelect={onSelect} /> */}
              {/* <CInput
                  ref={idCard}
                  placeholder={'National ID Card Number'}
                  value={values.idCard} 
                  onChangeText={handleChange('idCard')}
                  error={errors.idCard}
                  sec
                  leftIconNAme={CardIcon}

                  returnKeyType="next"
                  onSubmitEditing={() => password.current.focus()}
                /> */}
              {/* <CInput
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
                /> */}
                <CText style={AuthStyle.uploadText}>Upload Registration Documents</CText>

              <View style={AuthStyle.selectFileView}>
                {/* <CText>HHHH</CText> */}
                <View style={{width:40 , }}>
                  <ProgressiveImage
                    source={UploadIcon}
                    style={AuthStyle.inputLeftIconButton}
                    resizeMode={'contain'}
                  />
                </View>
                <View style={{width:100 , }}>
                  <CText style={AuthStyle.selectFile}>Choose File</CText>
                </View>
              </View>

              <CButton
                title={'Register'}
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
