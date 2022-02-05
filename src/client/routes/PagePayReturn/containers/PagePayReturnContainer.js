import React from 'react'
import { connect } from 'react-redux'

import PagePayReturnView from '../components/PagePayReturnView'
import {savePayerEmail} from "../../../api_test/offer";

class PagePayReturnContainer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            orderEmail: '',
        }
    }

    handleChangeOrderEmail = (e, {value}) => {
        this.setState({
            orderEmail: value
        })
    }

    handleSavePayerEmail = () => {
        let {
            orderEmail
        } = this.state

        let result = savePayerEmail({
            order_email: orderEmail
        });

        result.then(
            result => {
                let {
                    status,
                } = result

                if (status) {
                    this.props.history.push('/')
                }
            },
            error => {
                alert("Rejected: " + error);
            }
        );
    }

    render() {
        return <PagePayReturnView
                    {...this.state}
                    url={ this.props.match.url }
                    handleSavePayerEmail={this.handleSavePayerEmail}
                    handleChangeOrderEmail={this.handleChangeOrderEmail}

        />
    }
}

export default PagePayReturnContainer
