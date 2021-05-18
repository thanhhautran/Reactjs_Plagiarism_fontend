import React, { Component } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import { connect,Provider } from "react-redux";
import store from './store';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { history } from './helper/history';
import { clearMessage } from './actions/message';
class App extends Component{
        constructor(props) {
          super(props);
         
        }
        render(){
          return (
            <Provider store={store}>
            <Router history={history}>
                <div className="App">
                   <Link to="/" ></Link>
                   <Link to="/Login" ></Link>
                   <Link to="/Register" ></Link>
                   <Switch>
                     <Route exact path = "/"> <HomePage/> </Route>
                     <Route exact path="/login" component={LoginPage} />
                     <Route exact path="/register" component={RegisterPage} />
                   </Switch>
             </div>
            </Router>
            </Provider>
          ); 
        }
}

export default App;
