import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { BookCleaner, BookDetails, BookSummary,  Services } from '../../pages/Protected';
import OrdersPlacement from './OrdersPlacement'
import {Chats, Home, Messages, MySpace, SpaceDetails} from '../../pages/Protected/Owner'
const Stack = createStackNavigator();

const StackScreenOptions = {
  headerShown: false,
  tabBarVisible: true
};

function ChatStack() {
  return (
    <Stack.Navigator
      initialRouteName="Chats"
      screenOptions={StackScreenOptions}>
    <Stack.Screen name="Chats" component={Chats} />
    <Stack.Screen name="Messages" component={Messages} options={{ tabBarVisible: false }}  />

      
     
      

    </Stack.Navigator>
  );
}
export default ChatStack;
 