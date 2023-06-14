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

const TabBar = ({state, navigation}) => {
  const navigationState = useNavigationState(state => state);
  const isOwnerScreenActive =  navigationState?.routes[navigationState?.index]?.name === 'Messages';
  const reduxState = useSelector(({auth, language, root}) => {
    return {
      messages: root?.messages,
    };
  });
  
  const routes = [
    {
      name: 'Home',
      key: 'home',
      icon: 'home',
      onPress: () => navigation.navigate('Home'),
      fontSize: 32,
      marginTop: -40,
      type: 'antdesign',
      img: Home,
      img2: FocusedHome,
    },
    {
      name: 'Cart',
      key: 'cart',
      icon: 'shopping-basket',
      onPress: () =>
        navigation.navigate('Booking', {
          screen: 'Booking',
          initial: false,
        }),
      // onPress: () =>  navigation.navigate('Cart'),
      fontSize: 30,
      type: 'fontisto',
      img: Booking,
      img2: FocusedBooking,
    },
    {
      name: 'Search',
      key: 'store',
      icon: 'search1',
      onPress: () =>
        navigation.navigate('Payment', {
          screen: 'Payment',
          initial: false,
        }),
      fontSize: 30,
      type: 'antdesign',
      img: PaymentHistory,
      img2: FPaymentHistory,
    },
    {
      name: 'Location',
      key: 'location',
      icon: 'location-outline',
      onPress: () => navigation.navigate('Chats'),
      fontSize: 30,
      type: 'ionicon',
      img: Message,
      img2: FocusedMessage,
    },
    {
      name: 'Profile',
      key: 'profile',
      icon: 'user',
      onPress: () => navigation.navigate('Profile'),
      fontSize: 30,
      type: 'antdesign',
      img: Setting,
      img2: FocusedSetting,
    },
  ];
  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={Styles.tabContainer}>
      <View style={Styles.tabInnerContainer}>
        <MappedElement
          data={routes}
          renderElement={(route, i) => {

            const isroute = state?.routes?.[3]?.name === 'Messages' ? true : false;

            return (
                <TouchableOpacity
                  onPress={route.onPress}
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
