import React from 'react'
import { connect } from 'react-redux'
import {
    withRouter
} from 'react-router-dom'

import OfferView from '../components/OfferView'

import { getOfferInfo } from '../../../api_test/offer'

import {
    cloneObject
} from '../../../inc/inc'

import { fetchCartOffers }  from '../../../actions/getCartOffers'

const mapDispatchToProps = {
    fetchCartOffers
}

const mapStateToProps = (store) => ({
    getCartOffers  : store.getCartOffers,
})

class OfferContainer extends React.Component{
    constructor(props) {
        super(props);

        let offer = props.match.params.offer;
        let offerId = this.parseType(offer);

        this.state = {
            loading   : 0,
            offerId: offerId,
            offer: {
                'id': offerId,
                'quantity': 1,
            },
            info: false
        }

        this.getOfferInfo()
    }

    parseType = (offer) => {
        let arr = offer.split('-');

        return arr[arr.length-1]
    }

    getOfferInfo = () => {

        let {
            offerId
        } = this.state

        let result = getOfferInfo({ offerId: offerId });
        result.then(
            result => {
                let {
                    status,
                    row
                } = result

                if (status) {
                    this.setState({
                        info : row,
                    })
                }
            },
            error => {
              alert("Rejected: " + error); // error - аргумент reject
            }
        );
    }

    handleInputChangeQuantity = (e, { name, value }) => {
        e.preventDefault()

        this.setState({
            offer: {
                'id' : name,
                'quantity' : value
            }
        });
    }

    handleClicAddToCart = () => {
        let {
            offer
        } = this.state

        let {
            getCartOffers
        } = this.props

        console.log('offer---->', offer)

        let a = getCartOffers.concat([offer])
        console.log('a---->', a)
        this.props.fetchCartOffers(a)
    }

    render() {
        return <OfferView
                    {...this.state}

                    handleInputChangeQuantity={ this.handleInputChangeQuantity }
                    handleClicAddToCart={ this.handleClicAddToCart }
                />
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OfferContainer))
