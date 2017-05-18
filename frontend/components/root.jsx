import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionForm from './session_form';
import Landing from './landing';
import Browse from './browse';
import Genre from './genre';
import Search from './search';
import Player from './player';
import MyList from './my_list';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/browse');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  return(
    <Provider store={ store }>
      <Router onUpdate={() => window.scrollTo(0, 0)} history={ hashHistory } >
        <Route path="/" component={ App } >
          <IndexRoute component={ Landing } onEnter={_redirectIfLoggedIn}/>
          <Route path="/login" component={ SessionForm } onEnter={_redirectIfLoggedIn}/>
          <Route path="/signup" component={ SessionForm } onEnter={_redirectIfLoggedIn}/>
          <Route path="/browse" component={ Browse } onEnter={_ensureLoggedIn}/>
          <Route path="/browse/genre/:id" component={ Genre } onEnter={_ensureLoggedIn}/>
          <Route path="/search" component={Search} onEnter={_ensureLoggedIn}/>
          <Route path="/mylist" component={MyList} onEnter={_ensureLoggedIn}/>
        </Route>
        <Route path="/watch/:id" component={Player} onEnter={_ensureLoggedIn}/>
      </Router>
    </Provider>
  );

};
export default Root;
