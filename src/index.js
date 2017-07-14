import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './components/App.js';
import SignUp from './components/SignUp.js';
import SignIn from './components/SignIn.js';
import Patient from './components/Patient.js';
import Report from './components/Report.js';
import Profile from './components/Profile.js';
import { Router, Route, NavLink } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { firebaseApp } from './firebase'
import reducer from './reducers'
import { logUser } from './actions'


firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        // console.log('User has signed in or up', user);
        const { email } = user;
        store.dispatch(logUser(email))
        history.push('/App');
    } else {
        // console.log('User has signed out or still need to sign in.')
        history.replace('/signin');
    }
})




const history = createBrowserHistory();
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={history}>
            <div>
                <Route path="/app" component={App} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/patient" component={Patient} />
                <Route path="/report" component={Report} />
                <Route path="/profile" component={Profile} />
            </div>
        </Router>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
