import React from 'react'
import { connect } from 'react-redux'

import Sitemap from '../components/Sitemap'

class SitemapContainer extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return <Sitemap
                    {...this.state}
                />
    }
}

export default SitemapContainer
