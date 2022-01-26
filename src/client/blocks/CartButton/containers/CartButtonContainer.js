import React from 'react';
import { connect } from 'react-redux'
import {
    withRouter
} from 'react-router-dom'

import CartButtonView from '../components/CartButtonView'

import { getCartOffersButton } from '../../../api/cart'

import { fetchCartOffers }  from '../../../actions/getCartOffers'

const mapDispatchToProps = {
    fetchCartOffers
}

const mapStateToProps = (store) => ({
    getCartOffers  : store.getCartOffers,
})

class CartButtonContainer extends React.Component{
    constructor(props, context) {
        super(props, context)

        this.state = {
            loading       : 0,
            cartOffers    : false,
        }

        this.getCartOffersButton()
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            cartOffers  : nextProps.getCartOffers,
        });
    }

    getCartOffersButton = () => {

        let result = getCartOffersButton();

        result.then(
            result => {
                let {
                    status,
                    rows
                } = result
                if (status) {
                    this.setState({
                        loading: true,
                        cartOffers : rows
                    })

                    this.props.fetchCartOffers(rows);
                }
            },
            error => {
              alert("Rejected: " + error); // error - аргумент reject
            }
        );
    }


    render = () => {
        return <CartButtonView
                    { ...this.state }
                />
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartButtonContainer))
