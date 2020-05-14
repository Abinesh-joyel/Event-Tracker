/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {getPersistor} from '@rematch/persist';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store from './src/store';

import Navigation from './src/navigation';
import {Loading} from './src/components';

const persistor = getPersistor();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={<Loading />}>
            <Navigation />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
