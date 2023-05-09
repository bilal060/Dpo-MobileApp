import React from 'react';
import {
  Alert,
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Add,
  Booking,
  Celender,
  Faceid,
  FocusedBooking,
  FocusedCalender,
  FocusedHome,
  FocusedManager,
  FocusedMegaphone,
  FocusedMessage,
  FocusedProfile,
  FocusedSetting,
  FocusedSpace,
  Home,
  Managers,
  Megaphone,
  Message,
  MySpace,
  ProfileIcon,
  Setting,
} from '../assets/images';
import {ProgressiveImage} from '../components';
import {navigate} from './Ref';
import {useNavigation} from '@react-navigation/native';
import OwnerStack from './Stacks/Owner';
import {themes} from '../theme/colors';
import HomeStack from './Stacks/HomeStack';

const Screen1 = () => {
  return <View style={styles.screen1} />;
};

const Screen2 = () => {
  return <View style={styles.screen2} />;
};

export default function App() {
  const navigation = useNavigation();
  const _renderIcon = (routeName, selectedTab) => {
    console.log('selectedTab', selectedTab);
    let icon = '';

    switch (routeName) {
      case 'Home1':
        icon = selectedTab === routeName ? FocusedHome : Home;
        break;
      case 'MySpace':
        icon = selectedTab === routeName ? FocusedSpace : MySpace;
        break;
      case 'Booking':
        icon = selectedTab === routeName ? FocusedBooking : Booking;
        break;
      
      case 'Manager':
        icon = selectedTab === routeName ? FocusedManager : Managers;
        break;
      case 'Message':
        icon = selectedTab === routeName ? FocusedMessage : Message;
        break;
      case 'Setting':
        icon = selectedTab === routeName ? FocusedSetting : Setting;
        break;
    }

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: routeName}],
          })
        }>
        <ProgressiveImage
          source={icon}
          resizeMode={'contain'}
          style={{width: 55, height: 55, alignSelf: 'center'}}
        />
      </TouchableOpacity>
    );
  };
  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      type="DOWN"
      screenOptions={{headerShown: false}}
      tabBarOptions={{style: {backgroundColor: 'yellow'}}}
      style={{borderRadius: 50}}
      shadowStyle={styles.shawdow}
      //   height={65}
      //   width={50}
      circleWidth={50}
      bgColor="#FFF"
      initialRouteName="title1"
      borderTopLeftRight
      renderCircle={({selectedTab, navigate}) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <ProgressiveImage
              source={Add}
              resizeMode={'contain'}
              style={{width: 30, height: 30, alignSelf: 'center'}}
            />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name="Home1"
        position="LEFT"
        component={() => <HomeStack />}
      />
      <CurvedBottomBar.Screen
        name="MySpace"
        component={() => <OwnerStack />}
        position="LEFT"
      />
      <CurvedBottomBar.Screen
        name="Booking"
        component={() => <OwnerStack />}
        position="LEFT"
      />

      <CurvedBottomBar.Screen
        name="Manager"
        component={() => {}}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name="Message"
        component={() => <OwnerStack />}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name="Setting"
        component={() => <OwnerStack />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  btnCircleUp: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themes['light'].colors.primary,
    bottom: 18,
    shadowColor: '##FFF',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});
