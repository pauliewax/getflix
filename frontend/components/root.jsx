import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionForm from './session_form';
import Landing from './landing';
import Browse from './browse';
import Genre from './genre';
import Search from './search';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory } >
      <Route path="/" component={ App }>
        <IndexRoute component={ Landing } />
        <Route path="/login" component={ SessionForm } />
        <Route path="/signup" component={ SessionForm } />
        <Route path="/browse" component={ Browse } />
        <Route path="/browse/genre/:id" component={ Genre } />
        <Route path="/search" component={Search} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
