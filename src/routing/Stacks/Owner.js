import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { AddNewManager, Managers, NewSpace,  } from '../../pages/Protected/Owner';
const Stack = createStackNavigator();

const StackScreenOptions = {
  headerShown: false,
};

function OwnerStack() {
  return (
    <Stack.Navigator
      initialRouteName="Managers"
      screenOptions={StackScreenOptions}>
      <Stack.Screen name="Managers" component={Managers} />
      <Stack.Screen name="AddNewManager" component={AddNewManager} />
<Stack.Screen name="NewSpace" component={NewSpace} />
    </Stack.Navigator>
  );
}

export default OwnerStack;
