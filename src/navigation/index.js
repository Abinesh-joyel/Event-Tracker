import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/login';
import EventDetails from '../screens/events/details';
import {colors} from '../utils/constant';
import AppTab from './tab-navigator';
import {connect} from 'react-redux';
import {navigationRef} from './service';

const Stack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'list';

  switch (routeName) {
    case 'list':
      return 'Event List';
    case 'trackings':
      return 'Event Trackings';
    default:
      return routeName;
  }
}

function Navigator({authState}) {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerMode: 'screen',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: colors.brown,
            fontFamily: 'nunito_sans_regular',
            fontSize: 16,
          },
          headerStyle: {
            elevation: 0,
          },
        }}>
        {!authState ? (
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="app"
              component={AppTab}
              options={({route}) => ({
                headerTitle: getHeaderTitle(route),
              })}
            />
            <Stack.Screen
              name="details"
              component={EventDetails}
              options={{
                headerTitle: 'Event Details',
                gestureEnabled: true,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = ({auth: {authState}}) => ({
  authState,
});

export default connect(mapStateToProps, null)(Navigator);
