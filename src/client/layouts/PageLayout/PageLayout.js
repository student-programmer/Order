import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types'
import './PageLayout.scss'

import ErrorBoundary from '../../components/ErrorBoundry';
import CartButton from '../../blocks/CartButton';
import AccountButton from '../../blocks/AccountButton';

import {
    Container,
    Menu,
    Dropdown,
    Grid,
    Icon,
    Image
} from 'semantic-ui-react'

import {
    ShareButtons,
    ShareCounts,
    generateShareIcon
} from 'react-share';

const {
    FacebookShareButton
} = ShareButtons;

const {
    FacebookShareCount
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');

const shareUrl = 'https://savingsdealz.com/';
const shareTitle = 'Savingsdealz.com - is a truly unique electronic currency online exchange platform. It instantly shows the current rates for a bunch of the most common conversion pairs. Bitcoin, Ethereum, Ripple, Monero, Bitcoin Gold and other. You can basically make your desired conversion right away and not have to worry about anything else. Your transaction will happen fast and wasting no time.';
const shareTitleTwitter = 'Savingsdealz - is a cryptocurrency online exchange platform. It shows current rates for Bitcoin, Ethereum, Ripple, Monero, Bitcoin Gold other.';

class PageLayout extends  React.Component{
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }

    render() {
        let route   = this.props.route

        return (
            <React.Fragment>
                <div id="headerBlock">
                    <Container>
                        <Menu inverted borderless>
                            <Menu.Item>
                                <Image
                                    alt="logo"
                                    as={ Link }
                                    to='/'
                                    src='/images/logo.png'
                                />
                            </Menu.Item>

                            <Dropdown item text='Category'>
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        as={Link}
                                        to='/vpn'
                                    >
                                        VPN
                                    </Dropdown.Item>
                                    {/*<Dropdown.Item*/}
                                    {/*    as={Link}*/}
                                    {/*    to='/bundle'*/}
                                    {/*>*/}
                                    {/*    Bundle*/}
                                    {/*</Dropdown.Item>*/}
                                </Dropdown.Menu>
                            </Dropdown>

                            <Menu.Item
                              name='testimonials'
                              as={Link}
                              to='/compare'
                            >
                                Compare
                            </Menu.Item>

                            <Menu.Menu position='right'>
                                <Menu.Item>
                                    <AccountButton />
                                </Menu.Item>
                                <Menu.Item>
                                    <CartButton />
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                    </Container>
                </div>
                <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
                <div id="footerBlock">
                    <div className="ui container">
                        <div width="12" className="ui centered middle aligned grid">
                            <Grid.Column width={5} textAlign='center'>
                                Our mission: Give you best price to keep your money
                            </Grid.Column>

                            <Grid.Column width={7} textAlign='center'>
                                <Menu borderless compact vertical>
                                    <Menu.Item
                                        as={Link}
                                        to='/privacy-policy'
                                    >
                                        Privacy policy
                                    </Menu.Item>
                                    <Menu.Item
                                        as={Link}
                                        to='/terms-and-conditions-of-use'
                                    >
                                        Terms and conditions of use
                                    </Menu.Item>
                                    <Menu.Item
                                        as={Link}
                                        to='/contact-us'
                                    >
                                        Contact us
                                    </Menu.Item>
                                </Menu>
                            </Grid.Column>

                            {/*<Grid.Column*/}
                            {/*    width={3}*/}
                            {/*    textAlign='right'*/}
                            {/*    className='right-block'*/}
                            {/*>*/}
                            {/*    Stay connected*/}
                            {/*    <Icon*/}
                            {/*        circular*/}
                            {/*        color='red'*/}
                            {/*        name='facebook f'*/}
                            {/*    />*/}
                            {/*    <Icon*/}
                            {/*        circular*/}
                            {/*        color='red'*/}
                            {/*        name='twitter'*/}
                            {/*    />*/}
                            {/*</Grid.Column>*/}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

PageLayout.propTypes = {
    route: PropTypes.objectOf(PropTypes.any)
};

PageLayout.defaultProps = {
    route: null
};

export default {
    component: PageLayout
};

