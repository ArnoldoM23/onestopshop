import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import HomePage from './components/homePage';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import VendorOrClient from './components/auth/vendorOrClient';
import SignOut from './components/auth/signout';
import Business1 from './components/business/business1';
import Business2 from './components/business/business2';
import Business3 from './components/business/business3';
import Business4 from './components/business/business4';
import Business5 from './components/business/business5';
import ClientProfile from './components/clientProfile/clientProfile';
import VendorProfile from './components/vendorProfile/vendorProfile';
import VendorLayout from './components/vendorLayout/layout1';
import Reducers from './reducers/index';
import { AUTH_USER } from './actions/types';
import Authenticate from './components/auth/require_auth';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(Reducers)
const token = localStorage.getItem('token');

if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App} >
				<IndexRoute component={HomePage} />
				<Route path='/signin' component={SignIn} />
				<Route path='/signup' component={SignUp}/>
				<Route path='/vendorOrClient' component={VendorOrClient}/>
				<Route path='/signout' component={SignOut}/>
				<Route path='/business1' component={Business1} />
				<Route path='/business2' component={Business2} />
				<Route path='/business3' component={Business3} />
				<Route path='/business4' component={Business4} />
				<Route path='/business5' component={Business5} />
				<Route path='/clientProfile' component={Authenticate(ClientProfile)} />
				<Route path='/vendorProfile' component={Authenticate(VendorProfile)} />
			</Route>
		</Router>
	</Provider>, document.getElementById('container'));