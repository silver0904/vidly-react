import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <h1>Hello {this.props.name}</h1>
        )
    }
}
const mapStateToProps = state=>{
    return{
        name: state.Auth.name
    }
}
export default connect(mapStateToProps)(Home);