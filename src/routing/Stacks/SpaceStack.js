import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, MySpace, SpaceDetails , AddVechieal} from '../../pages/Protected/Owner'
const Stack = createStackNavigator();

const StackScreenOptions = {
  headerShown: false,
};

function SpaceStack() {
  return (
    <Stack.Navigator
      initialRouteName="MySpace"
      screenOptions={StackScreenOptions}>
      <Stack.Screen name="MySpace" component={MySpace} />
      <Stack.Screen name="SpaceDetails" component={SpaceDetails} />
      <Stack.Screen name="AddVechile" component={AddVechieal} />


      
     
      

    </Stack.Navigator>
  );
}

export default SpaceStack;
