import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { BookCleaner, BookDetails, BookSummary, Services } from '../../pages/Protected';
import OrdersPlacement from './OrdersPlacement'
const Stack = createStackNavigator();

const StackScreenOptions = {
  headerShown: false,
};

function CartStack() {
  return (
    <Stack.Navigator
      initialRouteName="Service"
      screenOptions={StackScreenOptions}>
      <Stack.Screen name="Service" component={Services} />
      <Stack.Screen name="Book a Cleaner" component={BookCleaner} />
      <Stack.Screen name="BookDetails" component={BookDetails} />
      <Stack.Screen name="BookSummary" component={BookSummary} />
  <Stack.Screen name="OrderSummary" component={OrdersPlacement} />
      

    </Stack.Navigator>
  );
}

export default CartStack;
