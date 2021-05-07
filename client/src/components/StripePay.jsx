import React from 'react';
import StripeCheckput from 'react-stripe-checkout';

import { STRIPE_PUBLICHABLE_KEY } from '../config';

class StripePay extends React.Component{
    render(){
        // debugger; 
        return (
            <StripeCheckput
            amont={500}
            token={(token) => console.log(token)}
            key={STRIPE_PUBLICHABLE_KEY}
            />
        )
    }
}

export default StripePay;