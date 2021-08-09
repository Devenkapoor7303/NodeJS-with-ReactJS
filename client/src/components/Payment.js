import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions/index";
import StripeCheckout from "react-stripe-checkout";

class Payments extends React.Component{
    render(){
        return(
            <StripeCheckout 
                name="Emaily"
                description="Pay $5 for 5 credits"
                amount={500}
                token={token=>this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                shippingAddress
                billingAddress
                zipCode
            >
                <button className="btn">Add Credits</button>
            </StripeCheckout>
        );
    }
}

export default connect(null,actions)(Payments);