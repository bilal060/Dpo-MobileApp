import React, {useRef, memo} from 'react';
import {Formik} from 'formik';
import Validations from './Validations';
import {View , TouchableOpacity} from 'react-native';
import {CButton, CInput, CText} from '../../../components';
import AuthStyle from '../Auth.style';
import {themes} from '../../../theme/colors';

function CForm(props) {
  const {submit, loading , onForgotPress} = props;

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
                  {'Welcome Back!'}
                </CText>
                <CText style={AuthStyle.cardHeaderSubTitle}>
                  {'Login to your account.'}
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
              </View>
              <TouchableOpacity onPress={onForgotPress} style={AuthStyle.forgot}>
                <CText style={AuthStyle.forgotText}>Forgot password?</CText>
              </TouchableOpacity>
              <CButton
                title={'Sign In'}
                iconType="left"
                loading={loading}
                onPress={() => handleSubmit()}
              />

              <View>
                <CText style={AuthStyle.continueText}>Or continue with</CText>
              </View>

            
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
export default memo(CForm);
