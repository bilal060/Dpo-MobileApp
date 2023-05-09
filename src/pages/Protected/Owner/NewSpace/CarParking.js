import React, {useRef, memo} from 'react';
import {Formik} from 'formik';
import {View} from 'react-native';
import {CButton, CInput, CText, ProgressiveImage} from '../../../../components';
import Styles from './NewSpace.style';
import {themes} from '../../../../theme/colors';
import {
  CNameIcon,
  CardIcon,
  CctvIcon,
  DesIcon,
  DobIcon,
  EmailIcon,
  FuelIcon,
  LocationIcon,
  NameIcon,
  ParkingIcon,
  PassIcon,
  PhoneIcon,
  PlaceIcon,
  RateIcon,
  SecurityIcon,
  TimeIcon,
  UploadIcon,
} from '../../../../assets/images';
import * as Yup from 'yup';
import GlobalStyle from '../../../../assets/styling/GlobalStyle';

function CarParking(props) {
  const {submit, loading, toggleCountryModal, selectedCountry} = props;

  const scheme = Yup.object().shape({
    email: Yup.string()
      .required('Please enter email address')
      .email('Please enter valid email address'),
  });

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
      validationSchema={scheme}>
      {({handleChange, values, handleSubmit, errors}) => {
        return (
          <View>
            <View style={[Styles.card]}>
              <View style={Styles.cardBody}>
                <CInput
                  ref={fullName}
                  placeholder={'Select Company'}
                  value={values.fullName}
                  onChangeText={handleChange('fullName')}
                  error={errors.fullName}
                  sec
                  leftIconNAme={CNameIcon}
                  returnKeyType="next"
                  onSubmitEditing={() => number.current.focus()}
                />

                <CInput
                  ref={fullName}
                  placeholder={'Select Branch'}
                  value={values.fullName}
                  onChangeText={handleChange('fullName')}
                  error={errors.fullName}
                  sec
                  type="view"
                  leftIconNAme={CNameIcon}
                  returnKeyType="next"
                  onSubmitEditing={() => dob.current.focus()}
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
                ref={dob}
                placeholder={'Enter Location'}
                value={values.dob}
                onChangeText={handleChange('dob')}
                error={errors.dob}
                sec
                leftIconNAme={LocationIcon}
                returnKeyType="next"
                onSubmitEditing={() => idCard.current.focus()}
              />
              <CInput
                ref={dob}
                placeholder={'CCTV Cameras'}
                value={values.dob}
                onChangeText={handleChange('dob')}
                error={errors.dob}
                sec
                type="view"
                leftIconNAme={CctvIcon}
                returnKeyType="next"
                onSubmitEditing={() => idCard.current.focus()}
              />

              <CInput
                ref={dob}
                placeholder={'Security Type'}
                value={values.dob}
                onChangeText={handleChange('dob')}
                error={errors.dob}
                sec
                type="view"
                leftIconNAme={SecurityIcon}
                returnKeyType="next"
                onSubmitEditing={() => idCard.current.focus()}
              />
              <CInput
                ref={dob}
                placeholder={'Add Description...'}
                value={values.dob}
                onChangeText={handleChange('dob')}
                error={errors.dob}
                sec
                leftIconNAme={DesIcon}
                returnKeyType="next"
                onSubmitEditing={() => idCard.current.focus()}
              />
              <CInput
                ref={dob}
                placeholder={'Enter Parking Capacity '}
                value={values.dob}
                onChangeText={handleChange('dob')}
                error={errors.dob}
                sec
                leftIconNAme={ParkingIcon}
                returnKeyType="next"
                onSubmitEditing={() => idCard.current.focus()}
              />
              <CInput
                ref={dob}
                placeholder={'Select Fuel Availability'}
                value={values.dob}
                onChangeText={handleChange('dob')}
                error={errors.dob}
                sec
                type="view"
                leftIconNAme={FuelIcon}
                returnKeyType="next"
                onSubmitEditing={() => idCard.current.focus()}
              />
              <View style={GlobalStyle.row}>
                <View style={Styles.inputView}>
                  <CInput
                    ref={dob}
                    placeholder={'Rate / Hour'}
                    value={values.dob}
                    onChangeText={handleChange('dob')}
                    error={errors.dob}
                    sec
                    leftIconNAme={RateIcon}
                    returnKeyType="next"
                    onSubmitEditing={() => idCard.current.focus()}
                  />
                </View>
                <View style={Styles.inputView}>
                  <CInput
                    ref={dob}
                    placeholder={'Rate / Day'}
                    value={values.dob}
                    onChangeText={handleChange('dob')}
                    error={errors.dob}
                    sec
                    leftIconNAme={RateIcon}
                    returnKeyType="next"
                    onSubmitEditing={() => idCard.current.focus()}
                  />
                </View>
              </View>
              <View style={GlobalStyle.row}>
                <View style={Styles.inputView}>
                  <CInput
                    ref={dob}
                    placeholder={'Rate / Week'}
                    value={values.dob}
                    onChangeText={handleChange('dob')}
                    error={errors.dob}
                    sec
                    leftIconNAme={RateIcon}
                    returnKeyType="next"
                    onSubmitEditing={() => idCard.current.focus()}
                  />
                </View>
                <View style={Styles.inputView}>
                  <CInput
                    ref={dob}
                    placeholder={'Rate / Month'}
                    value={values.dob}
                    onChangeText={handleChange('dob')}
                    error={errors.dob}
                    sec
                    leftIconNAme={RateIcon}
                    returnKeyType="next"
                    onSubmitEditing={() => idCard.current.focus()}
                  />
                </View>
              </View>

              <CText style={Styles.uploadText}>
              Upload Images
              </CText>

              <View style={Styles.selectFileView}>
                {/* <CText>HHHH</CText> */}
                <View style={{width: 40}}>
                  <ProgressiveImage
                    source={UploadIcon}
                    style={Styles.inputLeftIconButton}
                    resizeMode={'contain'}
                  /> 
                </View>
                <View style={{width: 100}}>
                  <CText style={Styles.selectFile}>Choose File</CText>
                </View>
              </View>

              <CButton
                title={'Cancel'}
                iconType="left"
                loading={loading}
                buttonStyle={Styles.spaceCancelBtn}
                buttonText={Styles.buttonText}
                onPress={() => handleSubmit()}
              />
              <CButton
                title={'Save'}
                iconType="left"
                loading={loading}
                buttonStyle={Styles.spaceSaveBtn}
                onPress={() => handleSubmit()}
              />

              {/* <View>
                <CText style={Styles.continueText}>Or continue with</CText>
              </View> */}
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
export default memo(CarParking);
