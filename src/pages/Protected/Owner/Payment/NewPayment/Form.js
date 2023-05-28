import React, { useRef, memo } from 'react';
import { Formik } from 'formik';
import Validations from './Validations';
import { View } from 'react-native';
import { CButton, CInput, CText, CButtonTrans } from '../../../../../components';
import Styles from '../Managers.styles';
import { themes } from '../../../../../theme/colors';
import {
  CNameIcon,
  CardIcon,
  DobIcon,
  EmailIcon,
  NameIcon,
  PassIcon,
  PhoneIcon,
  TimeIcon,
} from '../../../../../assets/images';
import TouchableOpacity from 'react-native'

function CForm(props) {
  const { submit, loading, toggleCountryModal, selectedCountry } = props;

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
      {({ handleChange, values, handleSubmit, errors }) => {
        return (
          <View>
            <View style={[Styles.card]}>
              <View style={Styles.cardBody}>
                <CInput
                  ref={fullName}
                  placeholder={'Name on Card'}
                  value={values.fullName}
                  onChangeText={handleChange('fullName')}
                  error={errors.fullName}
                  sec
                  leftIconNAme={NameIcon}
                  returnKeyType="next"
                  onSubmitEditing={() => number.current.focus()}
                />              

              <CInput
                ref={email}
                placeholder={'Card Number'}
                value={values.email}
                onChangeText={handleChange('email')}
                error={errors.dob}
                sec
                leftIconNAme={CardIcon}
                returnKeyType="next"
                onSubmitEditing={() => idCard.current.focus()}
              />

              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: 170 }}>
                  <CInput
                    ref={fullName}
                    placeholder={'Expiry Date'}
                    value={values.fullName}
                    onChangeText={handleChange('fullName')}
                    error={errors.fullName}
                    sec
                    leftIconNAme={DobIcon}
                    returnKeyType="next"
                    onSubmitEditing={() => number.current.focus()}
                  />
                </View>
                <View style={{ width: 170 }}>
                  <CInput
                    ref={fullName}
                    placeholder={'CVV'}
                    value={values.fullName}
                    onChangeText={handleChange('fullName')}
                    error={errors.fullName}
                    sec
                    leftIconNAme={CardIcon}
                    returnKeyType="next"
                    onSubmitEditing={() => number.current.focus()}
                  />
                </View>

              </View>
              <View>

                <CButtonTrans
                  title={'Cancel'}
                  loading={loading}
                  buttonStyle={Styles.buttonStyle}
                  onPress={() => handleSubmit()}
                />
                <CButton
                  title={'Add'}
                  loading={loading}
                  buttonStyle={Styles.buttonStyle1}
                  onPress={() => handleSubmit()}
                />

              </View>
              </View>

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
export default memo(CForm);
