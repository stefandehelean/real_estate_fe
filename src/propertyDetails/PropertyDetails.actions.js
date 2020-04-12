import { propertyDetailsConstants } from './PropertyDetails.constants';
import PropertyDetailsService  from './PropertyDetails.service';

const propertyDetailsActions = {
  getById
};


function getById(id) {
  return dispatch => {
    dispatch(request());

    PropertyDetailsService.getById(id)
      .then(
        propertyDetails => {
          dispatch(success(propertyDetails))
        },
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: propertyDetailsConstants.GETBYID_REQUEST } }
  function success(propertyDetails) { return { type: propertyDetailsConstants.GETBYID_SUCCESS, propertyDetails } }
  function failure(error) { return { type: propertyDetailsConstants.GETBYID_FAILURE, error } }
}


export default propertyDetailsActions;