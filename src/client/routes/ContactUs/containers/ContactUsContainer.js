import React from 'react'


import ContactUsView from '../components/ContactUsView'

import { validateEmail } from '../../../inc/inc'
import { sendSupportForm } from '../../../api/support'

class ContactUsContainer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            loading  : 0,
        }
    }

    componentWillReceiveProps(nextProps) {
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (!this.validateFormValues()) {
            return false;
        }

        this.setState({
            loading: 1
        });
        let data = {...this.state}

        let result = sendSupportForm(data);

        result.then(
            result => {
                let {
                    status,
                } = result
                if (status) {
                }
            },
            error => {
              alert("Rejected: " + error); // error - аргумент reject
            }
        );

    }

    validateFormValues = () => {
        let {
            email
        } = this.state.support;
        let {
            email_error,
        } = false;
        if (!validateEmail(email)) {
            email_error = true;
        }
        if (email_error) {
            this.setState({
                email_error        : email_error,
            });
            return false;
        }

        return true;
    }

    render() {
        return <ContactUsView
                    {...this.state}

                    handleSubmit={ this.handleSubmit }
                    handleInputChange={ this.handleInputChange }
                    handleChangeType={ this.handleChangeType }
                />
    }
}

export default ContactUsContainer
