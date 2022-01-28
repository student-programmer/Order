import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../assets/CartButtonView.scss'
import { Image, Label } from 'semantic-ui-react'


export const CartButtonView = (props) => (
    <Link to="/checkout" id="cartButton">
        <Image
            alt="cart"
            src='/images/icon-cart.svg'
            size='mini'
        />
            { 
                props.cartOffers && (
                    <Label circular floating>
                        { Object.keys(props.cartOffers).length }
                    </Label>
                )
            }
    </Link>
)

export default CartButtonView
