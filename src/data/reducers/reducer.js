import {combineReducers} from 'redux';
import defaultReducer from './default'
import { login } from '../../login/Login.reducer';
import { properties } from '../../properties/Properties.reducer';
import { propertyDetails } from '../../propertyDetails/PropertyDetails.reducer';

const getReducers = () =>
  combineReducers({
    defaultReducer,
    login,
    properties,
    propertyDetails
  });

export default getReducers;