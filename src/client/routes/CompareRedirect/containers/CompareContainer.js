import React from 'react'
import CompareViewRedirect from '../components/CompareViewRedirect'

import { Redirect } from 'react-router-dom'

class CompareContainerRedirect extends React.Component{
    constructor(props) {
        super(props);
    } 
 redir = () =>{
    <Redirect to="/compare"/>
}

    render() {
        return <CompareViewRedirect
                    {...this.state}
                 redirect={ this.redir }
                />
    }

}

export default CompareContainerRedirect
