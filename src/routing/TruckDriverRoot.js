import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  AddCard,
  AddNewManager,
  AddVechieal,
  AllBooking,
  Chats,
  EditProfile,
  Explore as ExploreScreen,
  Faqs,
  Langugae,
  Managers,
  Messages,
  MyProfile,
  Payment,
  Privacy,
  SpaceDetails,
  Home,
  MySpace,
  Change,
  MyVechiles,
  NewSpace,
} from '../pages/Protected/Owner';
import {customerRoutes, truckDriverRoutes} from '../utils/constant';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

// import {
//     HomeStack,
//     CartStack,
//     LocationStack,
//     ProfileStack,
//     StoreStack,
//     OrderTraking
// } from "./stacks";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Root = ({initial}) => {
  const TruckDriverStack = () => {
    return (
      <>
        <Stack.Screen name="Booking" component={AllBooking} />
        <Stack.Screen name="Profile" component={MyProfile} />
      </>
    );
  };

  const StorageOwnerStack = () => {
    return (
      <>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Profile" component={MyProfile} /> */}
      </>
    );
  };

  const CustomerStack = () => {
    return (
      <>
        <Stack.Screen name="Explore" component={ExploreScreen} />
        {/* <Stack.Screen name="Profile" component={MyProfile} /> */}
      </>
    );
  };


  const reduxState = useSelector(({auth, language}) => {
    return {
      userRole: auth?.user?.role,
    };
  });

  const getScreen = () => {
    if (reduxState?.userRole === 'Storage Owner') {
      return <ExploreScreen />;
    } else if (reduxState?.userRole === 'Customer') {
      return <ExploreScreen />;
    } else if (reduxState?.userRole === 'Truck Driver') {
      return <AllBooking />;
    } else {
      <ExploreScreen />
    }
    // return <TruckDriverStack />;
  };

  

  return (
    <Stack.Navigator
      // initialRouteName={!initial ? "Home" : "Cart"}

      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={getScreen} />
      <Stack.Screen name="Profile" component={MyProfile} />
      <Stack.Screen name="FAQs" component={Faqs} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="Booking" component={AllBooking} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Langugae" component={Langugae} />
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="MySpace" component={MySpace} />
      <Stack.Screen name="SpaceDetails" component={SpaceDetails} />
      <Stack.Screen name="AddVechile" component={AddVechieal} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="Managers" component={Managers} />
      <Stack.Screen name="MyVechiles" component={MyVechiles} />
      <Stack.Screen name="AddNewManager" component={AddNewManager} />
      <Stack.Screen name="NewSpace" component={NewSpace} />

      {/* <Stack.Screen name="Messages" component={Messages} /> */}
    </Stack.Navigator>
  );
};

export default Root;
