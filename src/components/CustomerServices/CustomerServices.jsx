import React from 'react';
import "./Customerservices.css"
import backgroundview from "../../images/background-view.png"
import melissa from "../../images/melissa-j.webp"
import chat from "../../images/chat.gif"
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
                <div className='row tidio_section_margin  bg_tidio py-4'>
                    <div className='col-sm-4 offset-2 '>
                        <div className='container'>
                            <p className='tidio_combines'>Tidio combines live chat and chatbot tools to help you provide superb customer service and generate more sales.</p>
                        </div>
                    </div>
                    <div className='col-sm-5 offset-1'>
                        <img className='chat_pic' src={chat} />
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-sm-4 offset-2 mt-4'>
                        <img className='img img-fluid' src={backgroundview} />
                        {/* <div className='bag'>
                                <span className='bag_span'>
                                <img className='bag_img' src={bag} />
                                </span>
                           
                            </div> */}

                    </div>
                    <div className='col-sm-4 text-left mt-4'>
                        <p className='wisker'>Wisiker bag</p>
                        <p className='by_using'>By using the combination of Tidio live chat and chatbots, Whisker Bag managed to reduce response time,
                            improve customer experience, and collect 4x more leads within two months of Tidio installation.</p>
                    </div>
                </div>
                {/* card section */}
                <div className='row px-4 cards_row'>
                    <div className='co-sm-12 col-md-3 col-xs-4'>
                        <div className='card_shadow'>
                            <div className='display_img'>
                                <img className='card_img' src={melissa} />
                                <p className='name_card '>Shervin K <br />CEO</p>
                            </div>
                            <div className='text-left mt-2'>
                                <p className='service'> Excellent service and product</p>
                            </div>
                            <div>
                                <p>The automation - hands down. I use Tidio all the time and suggest it to my clients for its ease of use and excellent support.
                                    I've not used it yet with shopping carts but I can really imagine it being awesome - will definately test it</p>
                            </div>
                        </div>
                    </div>
                    <div className='co-sm-12 col-md-3 col-xs-4'>
                        <div className='card_shadow'>
                            <div className='display_img'>
                                <img className='card_img' src={melissa} />
                                <p className='name_card '>Shervin K <br />CEO</p>
                            </div>
                            <div className='text-left mt-2'>
                                <p className='service'> Excellent service and product</p>
                            </div>
                            <div>
                                <p>Tidio always notifies me when a new customer enters my online store, that way, when a customer has any questions im already there and ready to answer. I also find really useful that they also have an app, so i can answer both from my phone and laptop. I could continue explaining the benefits for a long time, but to sum it all app, 
                                    i just think that Tidio is the best software for you to generate more sales on your store, and have a great customer service</p>
                            </div>
                        </div>
                    </div>
                    <div className='co-sm-12 col-md-3 col-xs-4'>
                        <div className='card_shadow'>
                            <div className='display_img'>
                                <img className='card_img' src={melissa} />
                                <p className='name_card '>Shervin K <br />CEO</p>
                            </div>
                            <div className='text-left mt-2'>
                                <p className='service'> Excellent service and product</p>
                            </div>
                            <div>
                                <p>The automation - hands down. I use Tidio all the time and suggest it to my clients for its ease of use and excellent support.
                                    I've not used it yet with shopping carts but I can really imagine it being awesome - will definately test it</p>
                            </div>
                        </div>
                    </div>
                    <div className='co-sm-12 col-md-3 col-xs-4'>
                        <div className='card_shadow'>
                            <div className='display_img'>
                                <img className='card_img' src={melissa} />
                                <p className='name_card '>Shervin K <br />CEO</p>
                            </div>
                            <div className='text-left mt-2'>
                                <p className='service'> Excellent service and product</p>
                            </div>
                            <div>
                                <p>Tidio always notifies me when a new customer enters my online store, that way, when a customer has any questions im already there and ready to answer. I also find really useful that they also have an app, so i can answer both from my phone and laptop. I could continue explaining the benefits for a long time, but to sum it all app,
                                     i just think that Tidio is the best software for you to generate more sales on your store, and have a great customer service</p>
                            </div>
                        </div>
                    </div>
               
                    <div className='co-sm-12 col-md-3 col-xs-4'>
                        <div className='card_shadow second_row'>
                            <div className='display_img'>
                                <img className='card_img' src={melissa} />
                                <p className='name_card '>Shervin K <br />CEO</p>
                            </div>
                            <div className='text-left mt-2'>
                                <p className='service'> Excellent service and product</p>
                            </div>
                            <div>
                                <p>Tidio always notifies me when a new customer enters my online store, that way, when a customer has any questions im already there and ready to answer. I also find really useful that they also have an app, so i can answer both from my phone and laptop. I could continue explaining the benefits for a long time
                                    , but to sum it all app, i just think that Tidio is the best software for you to generate more sales on your store, and have a great customer service</p>
                            </div>
                        </div>
                    </div>
                    <div className='co-sm-12 col-md-3 col-xs-4'>
                        <div className='card_shadow second_card'>
                            <div className='display_img'>
                                <img className='card_img' src={melissa} />
                                <p className='name_card '>Shervin K <br />CEO</p>
                            </div>
                            <div className='text-left mt-2'>
                                <p className='service'> Excellent service and product</p>
                            </div>
                            <div>
                                <p>The automation - hands down. I use Tidio all the time and suggest it to my clients for its ease of use and excellent support.
                                    I've not used it yet with shopping carts but I can really imagine it being awesome - will definately test it</p>
                            </div>
                        </div>
                    </div>
                    <div className='co-sm-12 col-md-3 col-xs-4'>
                        <div className='card_shadow second_row'>
                            <div className='display_img'>
                                <img className='card_img' src={melissa} />
                                <p className='name_card '>Shervin K <br />CEO</p>
                            </div>
                            <div className='text-left mt-2'>
                                <p className='service'> Excellent service and product</p>
                            </div>
                            <div>
                                <p>Tidio always notifies me when a new customer enters my online store, that way, when a customer has any questions im already there and ready to answer. I also find really useful that they also have an app, so i can answer both from my phone and laptop. I could continue explaining the benefits for a long time, but to sum it all app,
                                     i just think that Tidio is the best software for you to generate more sales on your store, and have a great customer service</p>
                            </div>
                        </div>
                    </div>
                    <div className='co-sm-12 col-md-3 col-xs-4'>
                        <div className='card_shadow second_card'>
                            <div className='display_img'>
                                <img className='card_img' src={melissa} />
                                <p className='name_card '>Shervin K <br />CEO</p>
                            </div>
                            <div className='text-left mt-2'>
                                <p className='service'> Excellent service and product</p>
                            </div>
                            <div>
                                <p>The automation - hands down. I use Tidio all the time and suggest it to my clients for its ease of use and excellent support.
                                    I've not used it yet with shopping carts but I can really imagine it being awesome - will definately test it</p>
                            </div>
                        </div>
                    </div>
                    </div>


                    {/* customer service section */}
                    <div className='row cards_row'>
                        <div className='col-sm-12 text-center'>
                            <h2 className='A_power'>A powerful, all-in-one customer service tool</h2>
                            <p className='one_p'>One compact solution can delight your customers and fuel your sales.</p>
                        </div>
                    </div>
            </div>

        </>
    )
}

export default CustomerServices

