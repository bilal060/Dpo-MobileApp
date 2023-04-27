import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabBar } from "../containers";
import {Home} from '../pages/Protected'
import ServiceTab from './Stacks/Services'

const Tab = createBottomTabNavigator();

const Root = ({initial}) => {
    console.log("🚀 ~ file: Root.js ~ line 17 ~ Root ~ rootIntial", initial)
    return (
        <Tab.Navigator
            initialRouteName={!initial ? "Home" : "Cart"}
            tabBar={(props) => <TabBar {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Service" component={ServiceTab} />

           

           
        </Tab.Navigator>
    );
};

export default Root;
