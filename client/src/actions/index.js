import axios from 'axios';
import { FETCH_USER } from './types';

// export const fetchUser = () => async dispatch => {
//     const res = await axios.get('/api/current_user');
  
//     dispatch({ type: FETCH_USER, payload: res.data });
//   };

export const fetchUser = () =>  async dispatch => {
    // console.log('dipatching');
    try{
        const res = await axios.get('/api/current_user')
        
        
        dispatch({ 
            type: FETCH_USER, 
            payload: res.data
        })
        console.log(res);
    }catch(err){
        dispatch({
            type: FETCH_USER,
            payload: []
          });
    }


    

}
