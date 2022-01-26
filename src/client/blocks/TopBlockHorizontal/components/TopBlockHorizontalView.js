import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Slider from "react-slick";

import { 
    Card,
    Placeholder,
    Image,
    Grid,
    Button
} from 'semantic-ui-react'

const loaderItems = [
    1,2,3,4,5,6,7,8,9,0
]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    customPaging: function(i) {
        return (
          <div className='slider-paging'>
            
          </div>
        );
    },
};

export const TopBlockHorizontalView = (props) => (
    <Slider {...settings} className='top-horizontal-block'>
        { 
            props.data ? (

                Object.keys(props.data).map((rowKey) => (
                    <Card style={{ width: 230 }}>
                        <Card.Header>
                            <Image
                                src={ props.data[rowKey]['image'] }
                            />
                        </Card.Header>
                        <Card.Content>
                            <div className='title'>
                                { props.data[rowKey]['name'] }
                            </div>
                            
                        </Card.Content>
                        <Card.Content extra>
                            <Grid verticalAlign='middle'>
                                <Grid.Column width={6}>
                                    <div className='price'>
                                        ${ props.data[rowKey]['price'] }
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={10} textAlign='right'>
                                    <Button
                                        as={ Link }
                                        to={ props.data[rowKey]['url'] }
                                        primary
                                        content='Buy now'
                                    />
                                </Grid.Column>
                            </Grid>
                        </Card.Content>
                    </Card>
                ))

            ) : (
                Object.keys(loaderItems).map((k) => (
                    <Placeholder style={{ width: 230 }}>
                        <Placeholder.Image />
                        <Placeholder.Header>
                            <Placeholder.Line length='full' />
                            <Placeholder.Line length='full' />
                            <Placeholder.Line length='full' />
                            <Placeholder.Line length='full' />
                            <Placeholder.Line length='full' />
                        </Placeholder.Header>
                    </Placeholder>
                ))
            )
        }
    </Slider>
)

export default TopBlockHorizontalView
