import React from 'react';
import {Container} from '../../../containers';
import {CPagination, CText, ProgressiveImage} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, View} from 'react-native';
import AuthStyle from '../Auth.style';
import CForm from './Form';
import {useNavigation} from '@react-navigation/native';
import {Facebook, Google} from '../../../assets/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen')

function Register({route}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const reduxState = useSelector(({auth, global}) => {
    return {
      loading: auth.signUpLoading,
    };
  });
  const headerProps = {
    showCenterLogo: false,
    headerLeft: true,
    headerTitle: 'Sing in',
    bgHeadeStyle:{width: width * 1, height: height * 0.3, marginTop: -30, paddingVertical: 40, paddingHorizontal: 20}
  };

  const submit = async values => {};

  return (
    <Container
      backgroundColor={'theme-color'}
      showPattern={true}
      scrollView={true}
      style={AuthStyle.style}
      headerProps={headerProps}
      loading={reduxState?.loading}
      scrollViewProps={{
        contentContainerStyle: AuthStyle.container,
      }}>
      <CPagination />
      <CForm submit={submit} loading={reduxState?.loading} />
      <View style={AuthStyle.orContainer}>
        <ProgressiveImage
          source={Google}
          resizeMode={'contain'}
          style={AuthStyle.IconImage}
        />
        <ProgressiveImage
          source={Facebook}
          resizeMode={'contain'}
          style={AuthStyle.IconImage}
        />
      </View>
      <View style={AuthStyle.orContainer}>
        <CText style={AuthStyle.cardBottomText}>Already have an account? </CText>
        <CText onPress={()=> navigation.navigate('Login')} style={[AuthStyle.cardBottomText2]}>Sign in</CText>
      </View>
    </Container>
  );
}
export default Register;
