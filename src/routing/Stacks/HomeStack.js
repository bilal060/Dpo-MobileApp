import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { BookCleaner, BookDetails, BookSummary,  Services } from '../../pages/Protected';
import OrdersPlacement from './OrdersPlacement'
import {Home} from '../../pages/Protected/Owner'
const Stack = createStackNavigator();

const StackScreenOptions = {
  headerShown: false,
};

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={StackScreenOptions}>
      <Stack.Screen name="Home" component={Home} />
     
      

    </Stack.Navigator>
  );
}

export default HomeStack;
