import React from 'react'
import { Carousel } from 'react-bootstrap'
import hor from '../../images/horse.jpg'
import saleimg from '../../images/sale.webp'
import cardimgweb from '../../images/card.webp'
import '../discoverSlides/DiscoverSlides.css'
const DiscoverSlides = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col '>
                        <div className='carouselBackgroundcolor'>
                            <div className='headingcarol '>
                                <h1 className='text-white text-center'>Discover 10 ways Tidio can boost your sales</h1>
                            </div>
                            <Carousel >
                                <Carousel.Item>
                                    <div className='textcarol d-flex '>
                                        <div className=' textcaroli d-flex'>
                                            <div className='textcarolinfo'>
                                                <h1 className='text-white'>1. Cart Saver</h1>
                                                <p className='text-white '>Stop 60% of customers from abandoning
                                                    their carts by offering a
                                                    discount or free shipping</p>
                                            </div>
                                            <div className='imagecarolinnderdiv'>
                                                <img src={saleimg} className='img-fluid saleimgcarol' />
                                            </div>
                                        </div>


                                    </div>

                                </Carousel.Item>
                                <Carousel.Item>
                                <div className='textcarol d-flex '>
                                <div className=' textcaroli d-flex'>
                                    <div className='textcarolinfo'>
                                        <h1 className='text-white'>2. Cart Saver</h1>
                                        <p className='text-white '>Stop 60% of customers from abandoning
                                            their carts by offering a
                                            discount or free shipping</p>
                                    </div>
                                    <div className='imagecarolinnderdiv'>
                                        <img src={cardimgweb} className='img-fluid saleimgcarol' />
                                    </div>
                                </div>


                            </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                <div className='textcarol d-flex '>
                                <div className=' textcaroli d-flex'>
                                    <div className='textcarolinfo'>
                                        <h1 className='text-white'>3. Cart Saver</h1>
                                        <p className='text-white '>Stop 60% of customers from abandoning
                                            their carts by offering a
                                            discount or free shipping</p>
                                    </div>
                                    <div className='imagecarolinnderdiv'>
                                        <img src={saleimg} className='img-fluid saleimgcarol' />
                                    </div>
                                </div>


                            </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscoverSlides
