
import React, { Component } from 'react';
import Main from './components/main';
import Login from './components/login'
import './App.css';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {

  redirectLogin= (store)=>{
    if (store.getState().Auth.token === ""){
        return <Redirect to='/login'/>
    }
    else
      return <Redirect to='/'/>

  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/" component={Main}/>
            </Switch> 
            {this.redirectLogin(store)}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
