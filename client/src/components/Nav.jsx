import React from 'react';
import { Link } from 'react-router-dom';
import google from './icons/google.svg';

import {fetchUser} from '../actions/index';
import './css/Nav.css';
import { connect } from 'react-redux';
import logout from './icons/logout.svg';

class Nav extends React.Component {
    renderContent() {
        switch (this.props.auth) {
          case null:
            return (
                <li className='app__nav__right__item'>
                <a href='/auth/google' className='app__nav__right__item__link app__nav__right__item__link--google'>
                    <img className='app__nav__right__item__link app__nav__right__item__link--google__icon' src={google} alt='google Icon' />
                    <span className='app__nav__right__item__link app__nav__right__item__link--google__text'>Sign in</span>
                </a>
                </li>
            );
          case false:
            return (
                <li className='app__nav__right__item'>
                <a href='/auth/google' className='app__nav__right__item__link app__nav__right__item__link--google'>
                    <img className='app__nav__right__item__link app__nav__right__item__link--google__icon' src={google} alt='google Icon' />
                    <span className='app__nav__right__item__link app__nav__right__item__link--google__text'>Sign in</span>
                </a>
                </li>
            );
          default:
            return (
                <React.Fragment>
                    <li className='app__nav__right__item'>
                        <div className='app__nav__right__item__user'>
                            <p className='app__nav__right__item__user__name'>{this.props.auth.name}</p>
                            <img className='app__nav__right__item__user__photo' src={this.props.auth.photo} alt='user photo' />
                        </div>
                    </li>

                    <li className='app__nav__right__item'>
                        <a className='app__nav__right__item__logout' href="http://localhost:3001/api/logout"> 
                            <img className='app__nav__right__item__logout__icon' src={logout} alt='Log out' />
                        </a>
                    </li>
                </React.Fragment>
                //I am not proud of linking full path to server and back - Problems with redirecting, proxy?
            );
        }
    }
    render(){
        console.log(this.props.auth);
        return(
        <nav className='app__nav'>
            <Link to='/' className='app__nav__logo' >Maily</Link>
            <ul className='app__nav__right'>
                <li className='app__nav__right__item'>
                    {/* <Link to='/surveys/new' className='app__nav__right__item__link app__nav__right__item__link--new'>+ New Survey</Link> */}
                </li>
                
                {this.renderContent()}
                
            </ul>
        </nav>
    )} 
}

function mapStateToProps({ auth }) {
    return { auth };
  }
  
export default connect(mapStateToProps, fetchUser)(Nav);