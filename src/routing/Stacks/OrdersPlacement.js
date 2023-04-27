import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { BookCleaner, BookDetails, BookSummary, OrderPayment, OrderSummary, OrderUserDetails, Services } from '../../pages/Protected';

const Stack = createStackNavigator();

const StackScreenOptions = {
  headerShown: false,
};

function OrdersPlacement() {
  return (
    <Stack.Navigator
      initialRouteName="OrderSummary"
      screenOptions={StackScreenOptions}>
      <Stack.Screen name="OrderSummary" component={OrderSummary} />
      <Stack.Screen name="OrderUserDetails" component={OrderUserDetails} />
      <Stack.Screen name="OrderPayment" component={OrderPayment} />


      

    </Stack.Navigator>
  );
}

export default OrdersPlacement;
