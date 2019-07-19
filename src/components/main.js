import React, { Component } from 'react';
import Header from './header'
import Home from './home';
import Login from './login';
// import Menu from './MenuComponent';
// import Contact from './ContactComponent';
// import About from './AboutComponent'
// import DishDetail from './DishdetailComponent';
// import Footer from './FooterComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state=>{
    return{
        auth: state.Auth
    }

}
class Main extends Component {

  constructor(props) {
    super(props);
  }
checkLogin= ()=>{
    // if (!this.props.auth.token){
    //     return <Redirect to="/login"/>
    // }
    // else
    //     return <Redirect to="./home"/>
}

  render() {
    return (
      <div>
        {this.checkLogin()}
        <Header/>
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login}/>
        </Switch> 
        {/* <Footer/>*/}
      </div>

    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));