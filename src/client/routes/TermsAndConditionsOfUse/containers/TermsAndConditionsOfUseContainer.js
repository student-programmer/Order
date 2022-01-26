import React from 'react'
import { connect } from 'react-redux'

import TermsAndConditionsOfUseView from '../components/TermsAndConditionsOfUseView'

class TermsAndConditionsOfUseContainer extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <TermsAndConditionsOfUseView
                    {...this.state}
                    url={ this.props.match.url }
                />
    }
}

export default TermsAndConditionsOfUseContainer