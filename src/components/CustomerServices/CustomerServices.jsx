import React from 'react';
import "./Customerservices.css"
import backgroundview from "../../images/background-view.jpg"
import bag from "../../images/bags.png"
import horseimg from "../../images/horse.jpg"
import { Carousel } from 'react-bootstrap';
function CustomerServices() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row mt-4 pb-4'>
                    <div className='col-sm-12 text-center mt-4'>
                        <h1 className='customer_service'>Customer service is great, but it's even better when <br /> it's combined with higher sales</h1>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-sm-12 mt-3 text-center'>
                        <button className='btn btn-primary btn-lg get_started'>Get Started</button>
                    </div>
                </div>
                <div className='row tidio_section_margin'>
                    <div className='col-sm-12  bg_tidio py-4 '>
                        <div className='col-sm-4 offset-2 '>
                            <div className='container'>
                                <p className='tidio_combines'>Tidio combines live chat and chatbot tools to help you provide superb customer service and generate more sales.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row my-4'>
                    <div className='col-sm-4 offset-2 mt-4 imgsldie'>
                        <img className='imgview img-fluid' src={backgroundview} />
                        <img className='bag_img' src={bag} />
                    </div>
                    <div className='bg-transparent carouseldiv mt-4 '>
                    
                        <Carousel>
                          <Carousel.Item>
                          <div className='carouselinformationduv'>
                          <div className='w-75 '>
                          <p>Whisker Bag </p>
                          <h3 className='w-50'>Whisker Bag installed Tidio chat to get closer to their website visitors and collect data about their needs and expectations.</h3>
                            
                          </div>
                          <div className='d-flex'>
                          <div className='line'></div>
                          <div className='customerinfo p-2 ml-2 mt-2 '>
                          <div className='d-flex ' >
                              <img src={horseimg} className=' horseimgage img-fluid'  />
                             <div className='p-2  h-50'>
                             <h6 className='m-0'>jano le Rpoux</h6>
                             <a href=''>whiskerbag.com</a></div>
                             </div>
                             <p className='fs-5 m-2 w-50'>“Tidio changed everything about the way we collect leads”</p>
                          </div>
                          
                          </div>
                          </div>
                         
                          </Carousel.Item>
                          <Carousel.Item>
                          <div className='carouselinformationduv'>
                          <div className='w-75 '>
                          <p>Whisker Bag </p>
                          <h3 className='w-50'>Whisker Bag installed Tidio chat to get closer to their website visitors and collect data about their needs and expectations.</h3>
                            
                          </div>
                          <div className='d-flex'>
                          <div className='line'></div>
                          <div className='customerinfo p-2 ml-2 mt-2 '>
                          <div className='d-flex ' >
                              <img src={horseimg} className=' horseimgage img-fluid'  />
                             <div className='p-2  h-50'>
                             <h6 className='m-0'>jano le Rpoux</h6>
                             <a href=''>whiskerbag.com</a></div>
                             </div>
                             <p className='fs-5 m-2 w-50'>“Tidio changed everything about the way we collect leads”</p>
                          </div>
                          
                          </div>
                          </div>
                           
                          </Carousel.Item>
                          <Carousel.Item>
                          <div className='carouselinformationduv'>
                          <div className='w-75 '>
                          <p>Whisker Bag </p>
                          <h3 className='w-50'>Whisker Bag installed Tidio chat to get closer to their website visitors and collect data about their needs and expectations.</h3>
                            
                          </div>
                          <div className='d-flex'>
                          <div className='line'></div>
                          <div className='customerinfo p-2 ml-2 mt-2 '>
                          <div className='d-flex ' >
                              <img src={horseimg} className=' horseimgage img-fluid'  />
                             <div className='p-2  h-50'>
                             <h6 className='m-0'>jano le Rpoux</h6>
                             <a href=''>whiskerbag.com</a></div>
                             </div>
                             <p className='fs-5 m-2 w-50'>“Tidio changed everything about the way we collect leads”</p>
                          </div>
                          
                          </div>
                          </div>
                            
                          </Carousel.Item>
                        </Carousel>
                     
                    </div>
                </div>
            </div>

        </>
    )
}

export default CustomerServices

