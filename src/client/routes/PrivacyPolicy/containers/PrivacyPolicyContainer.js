import React from 'react'
import { connect } from 'react-redux'

import PrivacyPolicyView from '../components/PrivacyPolicyView'

class PrivacyPolicyContainer extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <PrivacyPolicyView
                    {...this.state}
                    url={ this.props.match.url }
                />
    }
}

export default PrivacyPolicyContainer