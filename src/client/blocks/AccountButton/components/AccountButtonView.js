import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../assets/AccountButtonView.scss'
import { Image } from 'semantic-ui-react'


export const AccountButtonView = (props) => (
    <Image
        as={ Link }
        to={ props.user ? '/account' : '/register' }
        src='/images/icon-man.svg'
        size='mini'
    />
)

export default AccountButtonView
