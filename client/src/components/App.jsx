import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";

import Main from './Main';
import Surveys from './Surveys';
import  NewSurvey from './NewSurvey';
import Nav from './Nav';
import './css/App.css';
import * as actions from '../actions';


class App extends React.Component{
    // const state = useSelector( state.auth );
    componentDidMount() {
        this.props.fetchUser();
      }
    

    render(){
        // console.log('app is running');
        return(
            <main className='app'>            
                <BrowserRouter>
                    <Nav />

                    <Route  exact path='/' component={Main} />
                
                    <Route exact path='/surveys' component={Surveys} />
                    <Route exact path='/surveys/new' component={NewSurvey} />

                </BrowserRouter>
            </main>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
  }

export default connect(mapStateToProps, actions)(App);
