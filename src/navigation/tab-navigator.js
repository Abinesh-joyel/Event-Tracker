import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import EventList from '../screens/events/list';
import EventTrackings from '../screens/events/trackings';
import {colors} from '../utils/constant';
import {screenWidth} from '../utils/helper';

const Tab = createMaterialTopTabNavigator();
const tabWidth = screenWidth / 2;
function AppTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: colors.balck,
        inactiveTintColor: colors.black,
        tabStyle: {
          width: tabWidth,
        },
        labelStyle: {
          textTransform: 'capitalize',
          fontSize: 14,
          fontFamily: 'nunito_sans_bold',
        },
        style: {
          elevation: 0,
        },
        indicatorStyle: {
          backgroundColor: colors.brown,
        },
      }}>
      <Tab.Screen name="list" component={EventList} />
      <Tab.Screen name="trackings" component={EventTrackings} />
    </Tab.Navigator>
  );
}

export default AppTab;
