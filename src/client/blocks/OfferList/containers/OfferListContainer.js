import React from 'react';
import {connect} from 'react-redux'
import {
    withRouter
} from 'react-router-dom'

import {Link} from 'react-router-dom'

import {
    Grid,
    Button,
    Label,
    Image,
    Placeholder,
    Dimmer
} from 'semantic-ui-react'

import OfferListView from '../components/OfferListView'

import {
    getOfferList
} from '../../../api/offer'

import {fetchCartOffers} from '../../../actions/getCartOffers'

const mapDispatchToProps = {
    fetchCartOffers
}

const mapStateToProps = (store) => ({
    getCartOffers: store.getCartOffers,
})

class OfferListContainer extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            loading: 1,
            sortData: props.sortData ? props.sortData : {'sort': 'recommended'},
            searchData: props.searchData ? props.searchData : {},
            offers: false,
            loaderItems: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 0
            ]
        }

        this.getOfferList()
    }

    componentWillReceiveProps(nextProps) {
        if (
            JSON.stringify(nextProps.sortData) !== JSON.stringify(this.props.sortData)
        ) {
            this.setState({
                sortData: nextProps.sortData
            })
            this.getOfferList()
            return;
        }

        if (
            JSON.stringify(nextProps.searchData) !== JSON.stringify(this.props.searchData)
        ) {
            this.setState({
                searchData: nextProps.searchData
            })
            console.log(this.state)
            this.getOfferList(nextProps.searchData)
            return;
        }
    }

    getOfferList = (list = {}) => {
        let {
            sortData,
            searchData
        } = this.state
        if (list) {
            searchData = list
        }

        this.setState({
            loading: 1
        })

        let data = {
            searchData: searchData,
            sortData: sortData
        }

        let result = getOfferList(data);

        result.then(
            result => {
                let {
                    status,
                    rows,
                } = result
                if (status) {
                    this.setState({
                        loading: 0,
                        offers: rows,
                    })
                }
            },
            error => {
                alert("Rejected: " + error); // error - аргумент reject
            }
        );
    }

    handleClickBuyItNow = (id) => {
        let {
            getCartOffers
        } = this.props

        if (!getCartOffers) {
            getCartOffers = []
        }

        let a = getCartOffers.concat([{
            id: id,
            quantity: 1
        }])

        this.props.fetchCartOffers(a)
    }

    checkOfferInCart = (id) => {
        let {
            getCartOffers
        } = this.props

        for (let k in getCartOffers) {
            let cid = getCartOffers[k]['id']

            if (cid == id) return true
        }

        return false
    }

    getOfferLoadingRow = () => {

        return (
            <Grid.Row className='bundle-item'>
                <Grid.Column
                    verticalAlign='middle'
                    textAlign='center'
                    className='first-block'
                >
                    <Placeholder>
                        <Placeholder.Image/>
                    </Placeholder>
                </Grid.Column>
                <Grid.Column
                    className='second-block'
                >
                    <Placeholder>
                        <Placeholder.Header>
                            <Placeholder.Line length='medium'/>
                            <Placeholder.Line length='medium'/>
                            <Placeholder.Line length='medium'/>
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                            <Placeholder.Line length='full'/>
                            <Placeholder.Line length='full'/>
                            <Placeholder.Line length='full'/>
                        </Placeholder.Paragraph>
                    </Placeholder>
                </Grid.Column>
                <Grid.Column
                    verticalAlign='middle'
                    textAlign='center'
                    className='third-block'
                >
                    <Button
                        content='Buy it now'
                        color='red'
                        basic
                        disabled
                    />
                </Grid.Column>
            </Grid.Row>
        )
    }

    getOfferVpnRow = (offer) => {

        return (
            <Grid.Row className='coupon-item'>
                {!parseInt(offer['availability']) && (
                    <Dimmer active className='out-of-stock'>
                        <div className='title'>
                            Out of stock
                        </div>
                    </Dimmer>
                )}
                <Grid.Column
                    verticalAlign='middle'
                    textAlign='center'
                    className='first-block'
                >
                    {
                        (offer['ribbon']) && (
                            <div className='ribbon'>{offer['ribbon']}</div>
                        )
                    }
                    <Image
                        alt="vpn logo"
                        as={Link}
                        to={offer['url']}
                        className='logo'
                        src={offer['image']}
                    />
                    <div className='verified-block'>
                        <span className='color-green'>Verified</span> {offer['user_used']} users used this coupon
                    </div>
                    <Link className='review' to={offer['vendor_url']}>
                        {offer['name']} Review
                    </Link>
                </Grid.Column>
                <Grid.Column
                    className='second-block'
                >
                    <div className='title'>
                        {offer['title']}
                    </div>
                    <div className='price-block'>
                        {
                            (offer['old_price']) && (
                                <span className='old-price'>
                                    ${offer['old_price']}
                                </span>
                            )
                        }
                        <span className='price'>
                            ${offer['price']}
                        </span>
                        {
                            (offer['discount']) && (
                                <Label color='red' horizontal>
                                    {offer['discount']}
                                </Label>
                            )
                        }
                        {
                            (offer['discount_title']) && (
                                <span className='discount-title color-green'>
                                    {offer['discount_title']}
                                </span>
                            )
                        }
                    </div>
                    <div className='description'>
                        {offer['description']}
                    </div>
                </Grid.Column>
                <Grid.Column
                    verticalAlign='middle'
                    textAlign='center'
                    className='third-block'
                >
                    {
                        (this.checkOfferInCart(offer['id'])) ?
                            (
                                <Button
                                    as={Link}
                                    to='/checkout'
                                    className='to-cart-button'
                                    content='Go to cart'
                                    color='red'
                                    icon='cart'
                                    basic
                                    onClick={this.handleClickBuyItNow.bind(this, offer['id'])}
                                />
                            ) :
                            (
                                <Button
                                    content='Buy it now'
                                    color='red'
                                    basic
                                    onClick={this.handleClickBuyItNow.bind(this, offer['id'])}
                                />
                            )
                    }
                </Grid.Column>
            </Grid.Row>
        )
    }

    getOfferBundleRow = (offer) => {

        return (
            <Grid.Row className='bundle-item'>
                {!parseInt(offer['availability']) && (
                    <Dimmer active className='out-of-stock'>
                        <div className='title'>
                            Out of stock
                        </div>
                    </Dimmer>
                )}
                <Grid.Column
                    verticalAlign='middle'
                    textAlign='center'
                    className='first-block'
                >
                    <Image
                        as={Link}
                        to={offer['url']}
                        className='logo'
                        src={offer['image']}
                    />
                </Grid.Column>
                <Grid.Column
                    className='second-block'
                >
                    <div className='title'>
                        {offer['title']}
                    </div>
                    <div className='brands-block'>
                        {Object.keys(offer['brands']).map((rowBrandKey) => (
                            <Link
                                to={offer['brands'][rowBrandKey]['url']}
                            >
                                {offer['brands'][rowBrandKey]['name']}
                            </Link>
                        ))}
                    </div>
                    <div className='price-block'>
                        {
                            (offer['old_price']) && (
                                <span className='old-price'>
                                    ${offer['old_price']}
                                </span>
                            )
                        }
                        <span className='price'>
                            ${offer['price']}
                        </span>
                        {
                            (offer['discount']) && (
                                <Label color='red' horizontal>
                                    {offer['discount']}
                                </Label>
                            )
                        }
                        {
                            (offer['discount_title']) && (
                                <span className='discount-title color-green'>
                                    {offer['discount_title']}
                                </span>
                            )
                        }
                    </div>
                    <div className='description'>
                        {offer['description']}
                    </div>
                    <div className='sub-description'>
                        {offer['subdescription']}
                    </div>
                </Grid.Column>
                <Grid.Column
                    verticalAlign='middle'
                    textAlign='center'
                    className='third-block'
                >
                    {
                        (this.checkOfferInCart(offer['id'])) ?
                            (
                                <Button
                                    as={Link}
                                    to='/checkout'
                                    content='Go to cart'
                                    color='red'
                                    basic
                                    onClick={this.handleClickBuyItNow.bind(this, offer['id'])}
                                />
                            ) :
                            (
                                <Button
                                    content='Buy it now'
                                    color='red'
                                    basic
                                    onClick={this.handleClickBuyItNow.bind(this, offer['id'])}
                                />
                            )
                    }
                </Grid.Column>
            </Grid.Row>
        )
    }

    handleInputChangeSort = (e, {name, value}) => {
        e.preventDefault()
        let {
            sortData
        } = this.state

        sortData[name] = value
        this.setState({
            sortData: sortData
        });

        this.getOfferList()
    }

    render() {
        return <OfferListView
            {...this.state}

            handleInputChangeSort={this.handleInputChangeSort}

            getOfferLoadingRow={this.getOfferLoadingRow}
            getOfferVpnRow={this.getOfferVpnRow}
            getOfferBundleRow={this.getOfferBundleRow}
        />
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OfferListContainer))
