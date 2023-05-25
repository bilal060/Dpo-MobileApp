import React, {useRef, memo} from 'react';
import {Formik} from 'formik';
import Validations from './Validations';
import {TouchableOpacity, View} from 'react-native';
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
  const {
    submit,
    loading,
    toggleCountryModal,
    selectedCountry,
    onDocumentPress,
    selectedFile,
  } = props;

  const form = useRef(null);
  const CfullName = useRef(null);

  const email = useRef(null);
  const number = useRef(null);
  const cAddress = useRef(null);
  const cLicenseNo = useRef(null);
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
                  ref={CfullName}
                  placeholder={'Company Name'}
                  value={values.CfullName}
                  onChangeText={handleChange('CfullName')}
                  error={errors.CfullName}
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
                ref={cLicenseNo}
                placeholder={'Company License Number'}
                value={values.cLicenseNo}
                onChangeText={handleChange('cLicenseNo')}
                error={errors.cLicenseNo}
                sec
                leftIconNAme={CardIcon}
                returnKeyType="next"
                onSubmitEditing={() => dob.current.focus()}
              />

              <CInput
                ref={cAddress}
                placeholder={'Complete Address'}
                value={values.cAddress}
                onChangeText={handleChange('cAddress')}
                error={errors.cAddress}
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
              <CText style={AuthStyle.uploadText}>
                Upload Registration Documents
              </CText>

              <TouchableOpacity
                onPress={onDocumentPress}
                style={AuthStyle.selectFileView}>
                {/* <CText>HHHH</CText> */}
                <View style={{width: 40}}>
                  <ProgressiveImage
                    source={UploadIcon}
                    style={AuthStyle.inputLeftIconButton}
                    resizeMode={'contain'}AQAQAQAQ
                  />
                </View>
                <View style={{width: 100}}>
                  <CText style={AuthStyle.selectFile}>Choose File</CText>
                </View>
              </TouchableOpacity>
              { selectedFile?.name &&
                <CText style={[AuthStyle.uploadText ,{marginLeft:10, marginBottom:10 , color:'#0064FA'}]}>
                 {selectedFile?.name}
                </CText>
              }
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
