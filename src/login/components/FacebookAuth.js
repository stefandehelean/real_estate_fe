import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as queryString from 'query-string';
import loginActions from "../Login.actions";

function Login() {
  const urlParams = queryString.parse(window.location.search);

  const dispatch = useDispatch();
  if (urlParams.code) {
    dispatch(loginActions.loginFB(urlParams.code));
  }

  return (
    <></>
  );
}

export default Login;
