import React, { useEffect, useState } from 'react';
import {Container} from '../../../../../containers';
import {CPagination, CText, ProgressiveImage} from '../../../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, View} from 'react-native';
import AuthStyle from '../Myprofile.style';
import CForm from './Form';
import {useNavigation} from '@react-navigation/native';
import {Facebook, Google, LoginImg, Profile} from '../../../../../assets/images';
const {width, height} = Dimensions.get('screen')

function EditProfile({route}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [value , selectValue] = useState(false) 

  const reduxState = useSelector(({auth, global}) => {
    return {
      loading: auth.signUpLoading,
    };
  });
  const headerProps = {
    ProgressiveImageHeader: true,
    backButtonIcon: true,

    headerTitle: 'Edit Profile',
    headerRight: false,
    
  };


  const submit = ()=>{

  }

 

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
        
        <View
            style={{
              alignItems: 'center',
              marginTop:20,
            }}>
            <ProgressiveImage
              source={Profile}
              resizeMode="contain"
              style={{width: 100, height: 100, borderRadius: 10 }}
            />
            
          </View>
      {/* <CPagination /> */}
      <CForm submit={submit} loading={reduxState?.loading} onForgotPress={()=> navigation.navigate('Forgot')} />
      


      
    </Container>
  );
}
export default EditProfile;
