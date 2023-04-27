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
                  Enter your new password below
                </CText>
              </View>

              <View style={AuthStyle.cardBody}>
                <CInput
                  ref={password}
                  inputLabel={'Password'}
                  placeholder={'Password'}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry={true}
                  error={errors.password}
                  returnKeyType="next"
                  onSubmitEditing={() => cpassword.current.focus()}
                  leftIconType="MaterialCommunityIcons"
                  leftIconColor={themes.light.colors.fontColor}
                  leftIconNAme="email"
                  leftIconeSize={18}
                  rightIconType="AntDesign"
                  rightIconName="eyeo"
                  rightIconeColor={themes.light.colors.gray4}
                  rightIconeSize={18}
                />
                <CText style={AuthStyle.changePassText}>Password must be eight characters long including one uppercase letter, one special character and alphanumeric characters.</CText>
                <CInput
                  ref={password}
                  inputLabel={'Re-enter Password'}
                  placeholder={'Re-enter Password'}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry={true}
                  error={errors.password}
                  returnKeyType="next"
                  onSubmitEditing={() => cpassword.current.focus()}
                  leftIconType="MaterialCommunityIcons"
                  leftIconColor={themes.light.colors.fontColor}
                  leftIconNAme="email"
                  leftIconeSize={18}
                  rightIconType="AntDesign"
                  rightIconName="eyeo"
                  rightIconeColor={themes.light.colors.gray4}
                  rightIconeSize={18}
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
