import React, {useRef, memo} from 'react';
import {Formik} from 'formik';
import Validations from './Validations';
import {View} from 'react-native';
import {CButton, CInput, CText} from '../../../components';
import AuthStyle from '../Auth.style';
import {themes} from '../../../theme/colors';

function CForm(props) {
  const {submit, loading} = props;

  const form = useRef(null);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const cpassword = useRef(null);

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
                <CText style={AuthStyle.cardHeaderTitle}>
                Forgot your password
                </CText>
                <CText style={AuthStyle.cardHeaderSubTitle}>
                Enter your email address and we will send you a link to reset your password
                </CText>
              </View>

              <View style={AuthStyle.cardBody}>
                <CInput
                  ref={email}
                  inputLabel={'Email_address'}
                  placeholder={'Email Address'}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  error={errors.email}
                  sec
                  leftIconType="MaterialCommunityIcons"
                  leftIconColor={themes.light.colors.fontColor}
                  leftIconNAme="email"
                  leftIconeSize={20}
                  returnKeyType="next"
                  onSubmitEditing={() => handleSubmit()}
                />

               
              </View>

              <CButton
                title={'Send Password Reset Link'}
                iconType="left"
                loading={loading}
                onPress={() => handleSubmit()}
              />
{/* 
              <View>
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
