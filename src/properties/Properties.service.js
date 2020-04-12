import { authHeader } from '../utils/AuthHeader';
import {config} from '../config/config';
import loginService from '../login/Login.service';
import * as queryString from 'query-string';

const PropertyService = {
  getAll
};

function getAll(filter) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  const filterString = filter && Object.keys(filter).length > 0 ?
    `?${queryString.stringify(filter)}` :
    "";

  return fetch(`${config.apiUrl}/api/property${filterString}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 500) {
        loginService.logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export default PropertyService;