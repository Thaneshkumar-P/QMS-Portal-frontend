import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './projectSlice';
import authReducer from './authSlice';
import userReducer from './userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import persistConfig from './persistConfig';

const rootReducer = combineReducers({
  auth: authReducer,
  projects: projectReducer,
  user: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});

const persistor = persistStore(store);

export { store, persistor };

