import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import App from '../containers/app';
import Home from '../containers/Home';
import City from '../containers/City';
import User from '../containers/User';
import Search from '../containers/Search';
import Detail from '../containers/Detail';
import NotFound from '../containers/404';

class RouteMap extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Route exact path="/" render={() => <Redirect to="/home" component={Home} />} />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/city" component={City} />
            <Route path="/user" component={User} />
            <Route path="/search/:type(/:keyword)" component={Search} />
            <Route path="/detail/:id" component={Detail} />
            <Route component={NotFound} />
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}

export default RouteMap;
