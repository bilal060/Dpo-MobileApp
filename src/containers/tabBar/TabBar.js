import React, {Fragment, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Platform, StatusBar} from 'react-native';
import {CIcon, CLoading, CText, ProgressiveImage} from '../../components';
import Styles from './TabBar.style';
import {SafeAreaView} from '../index';
import {MappedElement} from '../../utils/methods';
import {TouchableOpacity} from 'react-native';
import {
  Add,
  Booking,
  Chat,
  Explore,
  FocusedBooking,
  FocusedChat,
  FocusedExplore,
  FocusedHome,
  FocusedMessage,
  FocusedOctions,
  Focusedplace,
  FocusedSetting,
  FocusedUser,
  FPaymentHistory,
  Home,
  Message,
  Octicons,
  PaymentHistory,
  Place,
  Profile,
  Setting,
  User,
} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {storageOwnerRoutes, truckDriverRoutes} from '../../utils/constant';
import {useRoute} from '@react-navigation/native';

const TabBar = ({state}) => {
  const [currentState, setState] = useState(1);
  const navigation = useNavigation();
  const routes = useRoute();

  const reduxState = useSelector(({auth, language}) => {
    return {
      isLoggedin: auth?.isLoggedIn,
      language: language?.language?.lan,
      userRole: auth?.user?.role,
      user: auth?.user,
    };
  });
  const returnRoutes = ()=>{
    if(reduxState?.userRole === "Storage Owner"){
      return  storageOwnerRoutes
    }
  }

  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={Styles.tabContainer}>
      <View style={Styles.tabInnerContainer}>
        <MappedElement
          data={returnRoutes()}
          renderElement={(route, i) => {
            return (
              <TouchableOpacity
                onPress={() => (
                  setState(route?.id), navigation.navigate(route?.navigate)
                )}
                key={i}
                style={Styles.tab}>
                <ProgressiveImage
                  source={
                    route?.navigate === routes?.name ? route?.img2 : route.img
                  }
                  style={{width: 50, height: 50}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            );
          }}
        />
       {reduxState?.userRole  == "Storage Owner" &&
        <TouchableOpacity style={Styles.addBtnn} onPress={() => {navigation.navigate("NewSpace")}} >
          <ProgressiveImage
            source={Add}
            style={{width: 32, height: 32}}
            resizeMode="contain"
          />
        </TouchableOpacity>}
      </View>
    </SafeAreaView>
  );
};

export default TabBar;
