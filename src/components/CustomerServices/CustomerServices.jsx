import React from 'react';
import "./Customerservices.css"
import backgroundview from "../../images/background-view.jpg"
import bag from "../../images/bag.png"
function CustomerServices() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row mt-4 pb-4'>
                   <div className='col-sm-12 text-center mt-4'>
                    <h1 className='customer_service'>Customer service is great, but it's even better when <br/> it's combined with higher sales</h1>
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
                <div className='row mt-4'>
                        <div className='col-sm-4 offset-2 mt-4 border border-dark'>
                            <img className='img img-fluid' src={backgroundview} />
                            {/* <div className='bag'>
                                <span className='bag_span'>
                                <img className='bag_img' src={bag} />
                                </span>
                           
                            </div> */}
                           
                        </div>
                        <div className='col-sm-4 text-left mt-4'>
                            <p className='wisker'>Wisiker bag</p>
                            <p className='by_using'>By using the combination of Tidio live chat and chatbots, Whisker Bag managed to reduce response time, improve customer experience, and collect 4x more leads within two months of Tidio installation.</p>
                        </div>
                </div>
            </div>

        </>
    )
}

export default CustomerServices

