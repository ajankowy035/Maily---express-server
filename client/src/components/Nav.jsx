import React from 'react';
import { Link } from 'react-router-dom';
import google from './icons/google.svg';

import './css/Nav.css';

const Nav = () => {
    return (
        <nav className='app__nav'>
            <Link to='/' className='app__nav__logo' >Maily</Link>
            <ul className='app__nav__right'>
                <li className='app__nav__right__item'>
                    {/* <Link to='/surveys/new' className='app__nav__right__item__link app__nav__right__item__link--new'>+ New Survey</Link> */}
                </li>
                <li className='app__nav__right__item'>
                    <a href='/auth/google' className='app__nav__right__item__link app__nav__right__item__link--google'>
                        <img className='app__nav__right__item__link app__nav__right__item__link--google__icon' src={google} alt='google Icon' />
                        <span className='app__nav__right__item__link app__nav__right__item__link--google__text'>Sign in</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;