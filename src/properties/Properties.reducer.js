import { propertyConstants } from './Property.constants';

export function properties(state = {}, action) {
  switch (action.type) {
    case propertyConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case propertyConstants.GETALL_SUCCESS:
      return {
        items: action.properties
      };
    case propertyConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}