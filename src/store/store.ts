/*import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reloadReducer from './reload-slice';
import themeReducer from './theme-slice.ts';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  theme: themeReducer,
  reload: reloadReducer,
});

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);*/

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reloadReducer from './reload-slice';
import themeReducer from './theme-slice.ts';

const rootReducer = combineReducers({
  theme: themeReducer,
  reload: reloadReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({reducer: persistedReducer});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
