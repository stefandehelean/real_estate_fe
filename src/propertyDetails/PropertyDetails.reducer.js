import { propertyDetailsConstants } from './PropertyDetails.constants';

export function propertyDetails(state = {}, action) {
  switch (action.type) {
    case propertyDetailsConstants.GETBYID_REQUEST:
      return {
        loading: true
      };
    case propertyDetailsConstants.GETBYID_SUCCESS:
      return {
        item: action.propertyDetails
      };
    case propertyDetailsConstants.GETBYID_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}