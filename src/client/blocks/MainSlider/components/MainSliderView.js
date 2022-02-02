import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Slider from "react-slick";

//import '../assets/MainSliderView.scss'

import {
    Image,
    Placeholder
} from 'semantic-ui-react'


export function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <Image
            alt="One slide"
            src="/images/arrow-left.svg"
            onClick={ onClick }
            className="custom-slick prev mobile hidden"
            width={20}
            height={20}
        />
    )
}

export function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <Image
        alt="Two slide"
            src="/images/arrow-right.svg"
            onClick={ onClick }
            className="custom-slick next mobile hidden"
            width={20}
            height={20}
        />
    )
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    customPaging: function(i) {
        return (
          <div className='slider-paging'>

          </div>
        );
    },
};

export const MainSliderView = (props) => (
    <Slider {...settings}>
        {
            !props.slides ? (
                <div>
                    <Placeholder id='previewSlide'>
                        <Placeholder.Image />
                    </Placeholder>
                </div>
            ) : (
                Object.keys(props.slides).map((rowKey) => (
                    <div key={ 'slide-' + props.slides['id'] }>
                        <Image
                            alt="slider-image"
                            src={ props.slides[rowKey]['image'] }
                        />
                    </div>
                ))
            )
        }
    </Slider>
)

export default MainSliderView
