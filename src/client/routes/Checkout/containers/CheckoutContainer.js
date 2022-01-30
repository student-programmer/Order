import React from 'react'
import {connect} from 'react-redux'
import {
    withRouter
} from 'react-router-dom'

import CheckoutView from '../components/CheckoutView'

import {getPaymentMethods} from '../../../api_test/paymentMethod'

import {
    getCartOffers,
    getPayLink
} from '../../../api_test/cart'

import {
    cloneObject
} from '../../../inc/inc'

import {fetchCartOffers} from '../../../actions/getCartOffers'
import $ from 'jquery'

const mapDispatchToProps = {
    fetchCartOffers
}

const mapStateToProps = (store) => ({
    getCartOffers: store.getCartOffers,
    getUser: store.getUser,
})

class CheckoutContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: 0,
            paymentMethods: false,
            checkPayment: false,
            offers: false,
            total: false,
            loadingPayButton: false,
            payerEmail: '',
            openSendEmailModal: false
        }

        this.getPaymentMethods()
        this.getCartOffers()
    }

    getPaymentMethods = () => {
        let result = getPaymentMethods();

        result.then(
            result => {
                let {
                    status,
                    rows,
                } = result
                if (status) {
                    this.setState({
                        paymentMethods: rows,
                    })
                }
            },
            error => {
                alert("Rejected: " + error); // error - аргумент reject
            }
        );
    }

    getCartOffers = () => {
        let result = getCartOffers();

        result.then(
            result => {
                let {
                    status,
                    rows,
                    total
                } = result
                if (status) {
                    this.setState({
                        offers: rows
                    })

                    this.calculateTotal(rows);
                }
            },
            error => {
                alert("Rejected: " + error); // error - аргумент reject
            }
        );
    }

    calculateTotal = (offersList = {}) => {
        let {
            offers
        } = this.state

        if (offersList) {
            offers = offersList
        }

        let total = {
            'subtotal': 0,
            'tax': 0,
            'total': 0,
            'items': 0
        }

        for (let k in offers) {
            let {
                price,
                quantity,
                tax
            } = offers[k]

            total['subtotal'] += Math.round(price * quantity * 100) / 100
            total['tax'] += Math.round(tax * 100) / 100
            total['items']++;
        }

        total['total'] = Math.round((total['subtotal'] + total['tax']) * 100) / 100
        this.setState({
            total
        })
    }

    handleInputChangeQuantity = (e, {name, value}) => {
        e.preventDefault()

        let {offers} = this.state
        let {
            getCartOffers
        } = this.props

        let offersClone = cloneObject(offers)

        for (let k in offersClone) {
            let {
                id
            } = offersClone[k]

            if (id != name) continue

            offersClone[k]['quantity'] = parseInt(value)

            for (let i in getCartOffers) {
                if (getCartOffers[i]['id'] == id) {
                    getCartOffers[i]['quantity'] = parseInt(value)
                }
            }

            if (value == 0) {
                delete offersClone[k]
            }

            break

        }

        this.props.fetchCartOffers(getCartOffers)

        this.setState({
            offers: offersClone
        });

        this.calculateTotal(offersClone);
    }

    handleChangePaymentMethod = (e, {value}) => {
        this.setState({
            checkPayment: value
        })
    }

    handleClickToPay = () => {
        let {
            checkPayment,
            payerEmail
        } = this.state

        // if (!this.props.getUser && !payerEmail) {
        //     this.setState({
        //         openSendEmailModal: true
        //     })
        //
        //     return
        // }

        let result = getPayLink({
            payment_method_id: checkPayment,
            payer_email: payerEmail
        });

        this.setState({
            loadingPayButton: true
        })

        result.then(
            result => {
                let {
                    status,
                    paylink,
                } = result

                if (status) {
                    if (checkPayment == 4) {
                        this.sendPmPayForm(paylink)
                    } else {
                        location.href = paylink
                    }
                }
            },
            error => {
                alert("Rejected: " + error); // error - аргумент reject
            }
        );
    }

    sendPmPayForm(fields) {
        const url = 'https://perfectmoney.com/api/step1.asp';
        const formData = JSON.parse(fields)
        var payFormData = ''
        payFormData += '<form action="' + url + '" method="post">';
        Object.keys(formData).map(name => (
            payFormData += '<input type="hidden" name="' + name + '" value="' + formData[name] + '">'
        ))
        payFormData += '</form>'
        var payForm = $(payFormData)
        $('body').append(payForm);
        payForm.submit();
    }

    handleChangePayerEmail = (e, {value}) => {
        this.setState({
            payerEmail: value
        })
    }

    render() {
        return <CheckoutView
            {...this.state}

            handleInputChangeQuantity={this.handleInputChangeQuantity}
            handleClickToPay={this.handleClickToPay}

            handleChangePaymentMethod={this.handleChangePaymentMethod}
            handleChangePayerEmail={this.handleChangePayerEmail}
        />


    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer))
