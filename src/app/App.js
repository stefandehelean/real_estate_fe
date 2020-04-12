import React from "react";
import {Provider} from 'react-redux';
import store from '../data/stores/default';
import PrivateRoute from '../utils/PrivateRoute';
import { history } from '../utils/_History';
import Login from '../login/Login';
import Properties from '../properties/Properties';
import PropertyDetails from '../propertyDetails/PropertyDetails';
import FacebookAuth from '../login/components/FacebookAuth';

import {
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Switch>
            <PrivateRoute exact path="/" component={Properties}/>
            <PrivateRoute exact path="/details/:id" component={PropertyDetails}/>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/facebookauth">
              <FacebookAuth />
            </Route>
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
