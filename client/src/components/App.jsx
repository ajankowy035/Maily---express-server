import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import store from '../store';


const App = () => {
    return(
        <Provider store = {store} >
            <BrowserRouter>
            <Route  exact path='/'>
            <div>
                <a href = '/auth/google'> 
                    <button>
                        Log in with Google
                    </button>
                </a>
            </div>
            </Route>
            </BrowserRouter>
        </Provider>
    )
}


export default App;