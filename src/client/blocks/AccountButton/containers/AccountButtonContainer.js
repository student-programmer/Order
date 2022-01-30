import React from 'react';
import { connect } from 'react-redux'
import {
    withRouter
} from 'react-router-dom'

import AccountButtonView from '../components/AccountButtonView'

import { checkSession } from '../../../api_test/user'

import { fetchUser }  from '../../../actions/getUser'

const mapDispatchToProps = {
    fetchUser
}

const mapStateToProps = (store) => ({
    getUser  : store.getUser,
})

class AccountButtonContainer extends React.Component{
    constructor(props, context) {
        super(props, context)

        this.state = {
            loading       : 0,
            user    : false,
        }

        this.getUser()
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            cartOffers  : nextProps.getCartOffers,
        });
    }

    getUser = () => {
        let result = checkSession();

        result.then(
            result => {
                let {
                    status,
                    row
                } = result

                if (status) {
                    this.setState({
                        loading: true,
                        user : row
                    })

                    this.props.fetchUser(row);
                }
            },
            error => {
              alert("Rejected: " + error); // error - аргумент reject
            }
        );

    }


    render = () => {
        return <AccountButtonView
                    { ...this.state }
                />
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountButtonContainer))
