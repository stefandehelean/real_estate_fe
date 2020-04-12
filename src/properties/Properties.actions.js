import { propertyConstants } from './Property.constants';
import propertyService  from './Properties.service';

const propertiesActions = {
  getAll,
  getById
};

function getAll(filter) {
  return dispatch => {
    dispatch(request());

    propertyService.getAll(filter)
      .then(
        properties => {
          dispatch(success(properties))
        },
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: propertyConstants.GETALL_REQUEST } }
  function success(properties) { return { type: propertyConstants.GETALL_SUCCESS, properties } }
  function failure(error) { return { type: propertyConstants.GETALL_FAILURE, error } }
}

function getById(id) {
  return dispatch => {
    dispatch(request());

    propertyService.getById(id)
      .then(
        properties => {
          dispatch(success(properties))
        },
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: propertyConstants.GETBYID_REQUEST } }
  function success(properties) { return { type: propertyConstants.GETBYID_SUCCESS, properties } }
  function failure(error) { return { type: propertyConstants.GETBYID_FAILURE, error } }
}


export default propertiesActions;