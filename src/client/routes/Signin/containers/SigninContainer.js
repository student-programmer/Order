import React from 'react'
import { connect } from 'react-redux'

import SigninView from '../components/SigninView'

import {
    withRouter
} from 'react-router-dom'

import { validateEmail } from '../../../inc/inc'

import { sendSignIn } from '../../../api_test/user'

import { fetchUser }  from '../../../actions/getUser'

const mapDispatchToProps = {
    fetchUser
}

const mapStateToProps = (store) => ({
    getUser  : store.getUser,
})

class SigninContainer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            loading   : 1,
            error: false,
        }
    }

    validateFormValues = () => {
        let {
            email,
            password
        } = this.state;

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

    handleSubmit = (event) => {
        event.preventDefault();

        if (!this.validateFormValues()) {
            return false;
        }

        this.setState({
            loading: 0,
        });

        let data = {...this.state}

        let result = sendSignIn(data);

        result.then(
            result => {
                let {
                    status,
                    user,
                    error
                } = result
                if (parseInt(status)) {
                    this.props.fetchUser(user)
                    this.props.history.push('/account')

                } else {
                    this.setState({
                        loading: 1,
                        error: error
                    })
                }
            },
            error => {
              alert("Rejected: " + error); // error - аргумент reject
            }
        );

    }

    handleInputChange = (e, { name, value }) => {
        if (name == 'email' && this.state['email_error']) {
            if (validateEmail(value)) {
                this.setState({
                    [name]          : value,
                    ['email_error'] : false
                });
                return;
            }
        }

        this.setState({
            [name]: value
        });
    }

    render() {
        return <SigninView
                    {...this.state}
                    handleSubmit={ this.handleSubmit }
                    handleInputChange={ this.handleInputChange }
                />
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SigninContainer))
