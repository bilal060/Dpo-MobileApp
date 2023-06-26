import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Platform, StatusBar} from 'react-native';
import {CIcon, CLoading, CText, ProgressiveImage} from '../../components';
import Styles from './TabBar.style';
import {SafeAreaView} from '../index';
import {MappedElement} from '../../utils/methods';
import {TouchableOpacity} from 'react-native';
import {
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
  Setting,
  User,
} from '../../assets/images';
import {useNavigationState} from '@react-navigation/native';

const TabBar = ({state, navigation  , customerRoutes}) => {
 console.log("🚀 ~ file: TabBar.js:34 ~ TabBar ~ routes:", customerRoutes)
 
  

  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={Styles.tabContainer}>
      <View style={Styles.tabInnerContainer}>
        <MappedElement
          data={customerRoutes}
          renderElement={(route, i) => {


            return (
                <TouchableOpacity
                  onPress={() => navigation.navigate(route?.navigate)}
                  key={i}
                  style={Styles.tab}>
                  <ProgressiveImage
                    source={state?.index === i ? route?.img2 : route.img}
                    style={{width: 50, height: 50}}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default TabBar;
