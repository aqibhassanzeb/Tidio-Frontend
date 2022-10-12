import React from 'react';
import "./Customerservices.css"
import backgroundview from "../../images/background-view.png"
import bag from "../../images/bags.png"
import horseimg from "../../images/horse.jpg"
import { Carousel } from 'react-bootstrap';

import melissa from "../../images/melissa-j.webp"
import chat from "../../images/chat.gif"
import livChat from "../../images/livechat.webp"
import Ai from "../../images/Ai.webp"
import sales from "../../images/sales.webp"
import messenger from "../../images/messenger.webp"
import closed from "../../images/closed.webp"
import DiscoverSlides from '../discoverSlides/DiscoverSlides';
import Footer from './../footer/Footer';
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
                <div className='row my-4'>
                    <div className='col-sm-4 offset-2 mt-4 imgsldie'>
                        <img className='imgview img-fluid' src={backgroundview} />
                        
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

                     <DiscoverSlides/>

                    {/* customer service section */}
                    <div className='row cards_row'>
                        <div className='col-sm-12 text-center'>
                            <h2 className='A_power'>A powerful, all-in-one customer service tool</h2>
                            <p className='one_p'>One compact solution can delight your customers and fuel your sales.</p>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row live_chat_padding'>
                            <div className='col-sm-12 col-md-6 liv_col'>
                                <h3 className='live_chat'>Live Chat</h3>
                                <p className='half_of'>Half of all online customers prefer live <br/> chat over any other communication<br/> channel.</p>
                                <ul className='ul_padding'>
                                    <li className='connect_li'>Connect Tidio to ALL websites and <br/> platforms via dedicated plugins, without<br/> coding</li>
                                    <li className='connect_li'>The Tidio live chat widget adjusts to your<br/> customers’ screens, so they can write to<br/> you on mobile and tablet</li>
                                    <li className='connect_li'>Our live chat widget is customizable: you <br/> can change its placement and color, so it <br/> fits with your website aesthetics</li>
                                    <li className='connect_li'>You can adjust the positioning of the live <br/> chat button in a mobile version of the <br/> widget</li>
                                </ul>
                                <a className='discover_live'>Discover Tidio live chat</a><i className="bi bi-arrow-right-short"></i>
                            </div>
                            <div className='col-sm-12 col-md-6 img_live_chat_padd'>
                                <img className='img img-fluid' src={livChat} />
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-6 live_chat_padding'>
                                <img className='img img-fluid' src={Ai} />
                            </div>
                            <div className='col-sm-12 col-md-6'>
                                <h3 className='live_chat virtual_padd'>Your virtual AI <br/> supporter</h3>
                                <p className='half_of'>Use one of our 20+ templates or easily <br/> build your own chatbot flow to  <br/>automate 40% of your customer  <br/>service conversations.</p>
                                <ul className='ul_padding'>
                                    <li className='connect_li'>Connect Tidio to ALL websites and <br/> platforms via dedicated plugins, without<br/> coding</li>
                                    <li className='connect_li'>The Tidio live chat widget adjusts to your<br/> customers’ screens, so they can write to<br/> you on mobile and tablet</li>
                                    <li className='connect_li'>Our live chat widget is customizable: you <br/> can change its placement and color, so it <br/> fits with your website aesthetics</li>
                                </ul>
                                <a className='discover_live'>Discover Tidio Chatbots</a><i className="bi bi-arrow-right-short"></i>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row live_chat_padding'>
                            <div className='col-sm-12 col-md-6 liv_col'>
                                <h3 className='live_chat more_sales'>Generate more sales</h3>
                                <p className='half_of'>Did you know that 3M businesses <br/> generated 20M leads and $400M in<br/> sales after they started using our <br/> chatbots?</p>
                                <ul className='ul_padding'>
                                    <li className='connect_li'>Stop 60% of your clients from abandoning <br/> their carts by offering a discount</li>
                                    <li className='connect_li'>Automatically qualify leads and reach out<br/> to them at the right time</li>
                                    <li className='connect_li'>Easily gather your visitors’ emails and <br/> phone numbers</li>
                                </ul>
                                <a className='discover_live'>Discover Tidio live chat</a><i className="bi bi-arrow-right-short"></i>
                            </div>
                            <div className='col-sm-12 col-md-6 img_live_chat_padd'>
                                <img className='img img-fluid' src={sales} />
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-6 live_chat_padding'>
                                <img className='img img-fluid' src={messenger} />
                            </div>
                            <div className='col-sm-12 col-md-6'>
                                <h3 className='live_chat virtual_padd'>Answer any channel <br/> from one place</h3>
                                <p className='half_of'>As many as 75% of online customers<br/> said they expect help within five<br/> minutes. Connect all your channels to <br/>Tidio and answer your customers in an<br/> instant!</p>
                                <ul className='ul_padding'>
                                    <li className='connect_li'>Integrate your live chat, email inbox, <br/> Messenger, and Instagram into one <br/> multichannel communicator</li>
                                    <li className='connect_li'>Talk to your customers on all devices: <br/> desktop, mobile, and tablet</li>
                                    <li className='connect_li'>Never lose a potential customer because <br/> they contacted you on a channel you <br/> rarely use</li>
                                </ul>
                                <a className='discover_live'>Discover Tidio Chatbots</a><i className="bi bi-arrow-right-short"></i>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row live_chat_padding'>
                            <div className='col-sm-12 col-md-6 liv_col'>
                                <h3 className='live_chat more_sales'>Generate more sales</h3>
                                <p className='half_of'>Did you know that 3M businesses <br/> generated 20M leads and $400M in<br/> sales after they started using our <br/> chatbots?</p>
                                <ul className='ul_padding'>
                                    <li className='connect_li'>Stop 60% of your clients from abandoning <br/> their carts by offering a discount</li>
                                    <li className='connect_li'>Automatically qualify leads and reach out<br/> to them at the right time</li>
                                    <li className='connect_li'>Easily gather your visitors’ emails and <br/> phone numbers</li>
                                </ul>
                                <a className='discover_live'>try for free now!</a><i className="bi bi-arrow-right-short"></i>
                            </div>
                            <div className='col-sm-12 col-md-6 img_live_chat_padd'>
                                <img className='img img-fluid' src={closed} />
                            </div>
                        </div>
                    </div>

                    <Footer/>
            </div>

        </>
    )
}

export default CustomerServices

