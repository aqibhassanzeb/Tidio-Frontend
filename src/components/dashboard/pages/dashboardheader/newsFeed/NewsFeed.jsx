import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import '../newsFeed/NewsFeed.css'
import imageofCard from '../../../../../images/horse.jpg'
const NewsFeed = () => {
    var settings = {

        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,


                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='container'>
                <div >
                    <h2>News Feed</h2>
                    <Slider {...settings}>
                        <div className='mainCardOpendiv'>
                            <div className='imageouter'>
                                <img src={imageofCard} className='cardimage' alt="cardImage" />
                                <p>We are still gathering conversion data for you. Come back in a few days to start tracking conversions on your website.</p>
                                <p className='ticketing text-center'>Sign up for Ticketing</p>
                            </div>
                        </div>
                        <div className='mainCardOpendiv'>
                            <div className='imageouter'>
                                <img src={imageofCard} className='cardimage' alt="card" />
                                <p>We are still gathering conversion data for you. Come back in a few days to start tracking conversions on your website.</p>
                                <p className='ticketing text-center'>Sign up for Ticketing</p>
                            </div>
                        </div>
                        <div className='mainCardOpendiv'>
                            <div className='imageouter'>
                                <img src={imageofCard} className='cardimage'  alt="image_card"/>
                                <p>We are still gathering conversion data for you. Come back in a few days to start tracking conversions on your website.</p>
                                <p className='ticketing text-center'>Sign up for Ticketing</p>
                            </div>
                        </div>
                        <div className='mainCardOpendiv'>
                            <div className='imageouter'>
                                <img src={imageofCard} className='cardimage' alt="image_card" />
                                <p>We are still gathering conversion data for you. Come back in a few days to start tracking conversions on your website.</p>
                                <p className='ticketing text-center'>Sign up for Ticketing</p>
                            </div>
                        </div>
                        <div className='mainCardOpendiv'>
                            <div className='imageouter'>
                                <img src={imageofCard} className='cardimage' alt="image_card" />
                                <p>We are still gathering conversion data for you. Come back in a few days to start tracking conversions on your website.</p>
                                <p className='ticketing text-center'>Sign up for Ticketing</p>
                            </div>
                        </div>
                        <div className='mainCardOpendiv'>
                            <div className='imageouter'>
                                <img src={imageofCard} className='cardimage' alt="image_card" />
                                <p>We are still gathering conversion data for you. Come back in a few days to start tracking conversions on your website.</p>
                                <p className='ticketing text-center'>Sign up for Ticketing</p>
                            </div>
                        </div>
                        <div className='mainCardOpendiv'>
                            <div className='imageouter'>
                                <img src={imageofCard} className='cardimage' alt="image_card" />
                                <p>We are still gathering conversion data for you. Come back in a few days to start tracking conversions on your website.</p>
                                <p className='ticketing text-center'>Sign up for Ticketing</p>
                            </div>
                        </div>
                        <div className='mainCardOpendiv'>
                            <div className='imageouter'>
                                <img src={imageofCard} className='cardimage' alt="image_card" />
                                <p>We are still gathering conversion data for you. Come back in a few days to start tracking conversions on your website.</p>
                                <p className='ticketing text-center'>Sign up for Ticketing</p>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </>
    )
}

export default NewsFeed
