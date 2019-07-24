import React, { Component } from 'react';
import Header from './header'
import Home from './home';
import Genre from './genre';
import Movie from './movie';
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


  render() {
    return (
      <div>
        {<Redirect to='/home'/>}
        <Header/>
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/genre" component={Genre} />
            <Route path="/movie" component={Movie} />
        </Switch> 
        {/* <Footer/>*/}
      </div>

    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));