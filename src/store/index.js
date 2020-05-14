import {init} from '@rematch/core';
import immerPlugin from '@rematch/immer';
import createLoadingPlugin from '@rematch/loading';
import createRematchPersist from '@rematch/persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import AsyncStorage from '@react-native-community/async-storage';
import * as models from './models';

const loading = createLoadingPlugin({});
const immer = immerPlugin();

const persistPlugin = createRematchPersist({
  key: 'root',
  version: 1,
  blacklist: ['loading', 'auth'],
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
});

const store = init({
  models,
  plugins: [persistPlugin, immer, loading],
});

export const {dispatch, getState} = store;

export default store;
