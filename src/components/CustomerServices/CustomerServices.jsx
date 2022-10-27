import React from 'react';
import "./Customerservices.css"
import backgroundview from "../../images/background-view.png"
import bag from "../../images/bags.png"
import horseimg from "../../images/horse.jpg"
import { Carousel } from 'react-bootstrap';

import melissa from "../../images/melissa-j.webp"
import chat from "../../images/chat.gif"
import livChat from "../../images/livechat.webp"
import Cimage from "../../images/cardcarol.webp"
import Ai from "../../images/Ai.webp"
import sales from "../../images/sales.webp"
import messenger from "../../images/messenger.webp"
import closed from "../../images/closed.webp"
import DiscoverSlides from '../discoverSlides/DiscoverSlides';
import PricingModel from '../pricingmodel/PricingModel';
import Footer from './../footer/Footer';
import { useNavigate } from 'react-router-dom';

function CustomerServices() {

    const navigate = useNavigate()
    return (
        <>
            <div className='container-fluid'>
                <div className='row mt-4 pb-4'>
                    <div className='col-sm-12 text-center mt-4'>
                        <h1 className='customer_service'>Customer service is great, but it's even better when  it's combined with higher sales</h1>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-sm-12 mt-3 text-center'>
                        <button className='btn btn-primary btn-lg get_started' onClick={() => navigate("/register")} >Sign Up</button>
                    </div>
                </div>
                <div className='row tidio_section_margin  bg_tidio py-4'>
                    <div className=' col-md-6'>
                        <div className=''>
                            <p className='tidio_combines text-center'>Tidio combines live chat and chatbot tools to help you provide superb customer service and generate more sales.</p>
                        </div>
                    </div>
                    <div className=' col-md-6 chatimage'>
                        <img className='chat_pic' src={chat} />
                    </div>
                </div>
                <div className='row my-4'>

                    <div className='bg-transparent carouseldiv mt-4 '>

                        <Carousel>
                            <Carousel.Item>
                                <div className='carouselinformationduv d-flex '>
                                    <div className='carousellineimagediv'>
                                        <img src={Cimage} className='img-fluid carolimagemain' />
                                    </div>
                                    <div className='informationofcard'>
                                        <div className="whiskerbagdiv">
                                            <div className=' '>
                                                <p className='whiskerName'>Whisker Bag </p>
                                                <h3 className='textparagraph'>Whisker Bag installed Tidio chat to get closer to their website visitors and collect data about their needs and expectations.</h3>

                                            </div>
                                            <div className='d-flex cardlinetextdiv'>
                                                <div className='line'></div>
                                                <div className='customerinfo p-2 ml-2 mt-2 '>
                                                    <div className='d-flex ' >
                                                        <img src={horseimg} className=' horseimgage img-fluid' />
                                                        <div className='p-2  h-50'>
                                                            <h6 className='m-0'>jano le Rpoux</h6>
                                                            <a href=''>whiskerbag.com</a></div>
                                                    </div>
                                                    <p className='fs-5 m-2 w-75'>“Tidio changed everything changed everything about the way we  about the way we collect leads”</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='carouselinformationduv d-flex'>
                                    <div className='carousellineimagediv'>
                                        <img src={Cimage} className='img-fluid carolimagemain' />
                                    </div>
                                    <div className='informationofcard'>
                                        <div className="whiskerbagdiv">
                                            <div className=' '>
                                                <p className='whiskerName'>Whisker Bag </p>
                                                <h3 className='textparagraph'>Whisker Bag installed Tidio chat to get closer to their website visitors and collect data about their needs and expectations.</h3>

                                            </div>
                                            <div className='d-flex cardlinetextdiv'>
                                                <div className='line'></div>
                                                <div className='customerinfo p-2 ml-2 mt-2 '>
                                                    <div className='d-flex ' >
                                                        <img src={horseimg} className=' horseimgage img-fluid' />
                                                        <div className='p-2  h-50'>
                                                            <h6 className='m-0'>jano le Rpoux</h6>
                                                            <a href=''>whiskerbag.com</a></div>
                                                    </div>
                                                    <p className='fs-5 m-2 w-75'>“Tidio changed everything changed everything about the way we  about the way we collect leads”</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='carouselinformationduv d-flex'>
                                    <div className='carousellineimagediv'>
                                        <img src={Cimage} className='img-fluid carolimagemain' />
                                    </div>
                                    <div className='informationofcard'>
                                        <div className="whiskerbagdiv">
                                            <div className=' '>
                                                <p className='whiskerName'>Whisker Bag </p>
                                                <h3 className='textparagraph'>Whisker Bag installed Tidio chat to get closer to their website visitors and collect data about their needs and expectations.</h3>

                                            </div>
                                            <div className='d-flex cardlinetextdiv'>
                                                <div className='line'></div>
                                                <div className='customerinfo p-2 ml-2 mt-2 '>
                                                    <div className='d-flex ' >
                                                        <img src={horseimg} className=' horseimgage img-fluid' />
                                                        <div className='p-2  h-50'>
                                                            <h6 className='m-0'>jano le Rpoux</h6>
                                                            <a href=''>whiskerbag.com</a></div>
                                                    </div>
                                                    <p className='fs-5 m-2 w-75'>“Tidio changed everything about the changed everything about the way we  way we collect leads”</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Carousel.Item>
                        </Carousel>

                    </div>
                    <div className='col-sm-4  mt-4 imgsldie'>
                        <img className='imgview img-fluid' src={backgroundview} />

                    </div>
                </div>
                {/* card section */}
                <div className='row px-4 cards_row'>
                    <div className='col-md-6 col-sm-12 col-lg-4 cardmaindivmarque'>
                        <div className='card_shadow'>
                            <div className='display_img'>
                                <img className='card_img' src={melissa} />
                                <p className='name_card '>Shervin K <br /> CEO</p>
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
                    <div className='col-md-6 col-sm-12 col-lg-4 cardmaindivmarque'>
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
                                    I've not   I've not used it yet with shopping carts but I can really imagineused it yet with shopping carts but I can really imagine it being awesome - will definately test it</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 col-lg-4 cardmaindivmarque'>
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
                    <div className='col-md-6 col-sm-12 col-lg-4 cardmaindivmarque'>
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
                    <div className='col-md-6 col-sm-12 col-lg-4 cardmaindivmarque'>
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
                    <div className='col-md-6 col-sm-12 col-lg-4 cardmaindivmarque'>
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
                    <div className='col-md-6 col-sm-12 col-lg-4 cardmaindivmarque'>
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
                                    I've not used it yet with shopping carts but I can really imagine it being a
                                    t used it yet with shopping carts but I can really imagine it being awesome - will definately test it</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 col-lg-4 cardmaindivmarque'>
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
                   
                  
                       
                </div>

                <DiscoverSlides />

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
                            <p className='half_of'>Half of all online customers prefer live  chat over any other communicationchannel.</p>
                            <ul className='ul_padding'>
                                <li className='connect_li'>Connect Tidio to ALL websites and platforms via dedicated plugins, withoutcoding</li>
                                <li className='connect_li'>The Tidio live chat widget adjusts to yourcustomers’ screens, so they can write toyou on mobile and tablet</li>
                                <li className='connect_li'>Our live chat widget is customizable: you can change its placement and color, so it fits with your website aesthetics</li>
                                <li className='connect_li'>You can adjust the positioning of the live chat button in a mobile version of the widget</li>
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
                            <h3 className='live_chat virtual_padd'>Your virtual AI  supporter</h3>
                            <p className='half_of'>Use one of our 20+ templates or easily  build your own chatbot flow to  automate 40% of your customer  service conversations.</p>
                            <ul className='ul_padding'>
                                <li className='connect_li'>Connect Tidio to ALL websites and  platforms via dedicated plugins, without coding</li>
                                <li className='connect_li'>The Tidio live chat widget adjusts to your customers’ screens, so they can write to you on mobile and tablet</li>
                                <li className='connect_li'>Our live chat widget is customizable: you  can change its placement and color, so it  fits with your website aesthetics</li>
                            </ul>
                            <a className='discover_live'>Discover Tidio Chatbots</a><i className="bi bi-arrow-right-short"></i>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row live_chat_padding'>
                        <div className='col-sm-12 col-md-6 liv_col'>
                            <h3 className='live_chat more_sales'>Generate more sales</h3>
                            <p className='half_of'>Did you know that 3M businesses  generated 20M leads and $400M in sales after they started using our  chatbots?</p>
                            <ul className='ul_padding'>
                                <li className='connect_li'>Stop 60% of your clients from abandoning  their carts by offering a discount</li>
                                <li className='connect_li'>Automatically qualify leads and reach out to them at the right time</li>
                                <li className='connect_li'>Easily gather your visitors’ emails and  phone numbers</li>
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
                            <h3 className='live_chat virtual_padd'>Answer any channel  from one place</h3>
                            <p className='half_of'>As many as 75% of online customers said they expect help within five minutes. Connect all your channels to Tidio and answer your customers in an instant!</p>
                            <ul className='ul_padding'>
                                <li className='connect_li'>Integrate your live chat, email inbox,  Messenger, and Instagram into one  multichannel communicator</li>
                                <li className='connect_li'>Talk to your customers on all devices:  desktop, mobile, and tablet</li>
                                <li className='connect_li'>Never lose a potential customer because  they contacted you on a channel you  rarely use</li>
                            </ul>
                            <a className='discover_live'>Discover Tidio Chatbots</a><i className="bi bi-arrow-right-short"></i>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row live_chat_padding'>
                        <div className='col-sm-12 col-md-6 liv_col'>
                            <h3 className='live_chat more_sales'>Generate more sales</h3>
                            <p className='half_of'>Did you know that 3M businesses  generated 20M leads and $400M in sales after they started using our  chatbots?</p>
                            <ul className='ul_padding'>
                                <li className='connect_li'>Stop 60% of your clients from abandoning  their carts by offering a discount</li>
                                <li className='connect_li'>Automatically qualify leads and reach out to them at the right time</li>
                                <li className='connect_li'>Easily gather your visitors’ emails and  phone numbers</li>
                            </ul>
                            <a className='discover_live'>try for free now!</a><i className="bi bi-arrow-right-short"></i>
                        </div>
                        <div className='col-sm-12 col-md-6 img_live_chat_padd'>
                            <img className='img img-fluid' src={closed} />
                        </div>
                    </div>
                </div>


                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 live_chat_padding'>
                            <img className='img img-fluid' src={messenger} />
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <h3 className='live_chat virtual_padd'>Answer any channel  from one place</h3>
                            <p className='half_of'>As many as 75% of online customers said they expect help within five minutes. Connect all your channels to Tidio and answer your customers in an instant!</p>
                            <ul className='ul_padding'>
                                <li className='connect_li'>Integrate your live chat, email inbox,  Messenger, and Instagram into one  multichannel communicator</li>
                                <li className='connect_li'>Talk to your customers on all devices:  desktop, mobile, and tablet</li>
                                <li className='connect_li'>Never lose a potential customer because  they contacted you on a channel you  rarely use</li>
                            </ul>
                            <a className='discover_live'>Discover Tidio Chatbots</a><i className="bi bi-arrow-right-short"></i>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row live_chat_padding'>
                        <div className='col-sm-12 col-md-6 liv_col'>
                            <h3 className='live_chat more_sales'>Empower your  customer support  team</h3>
                            <p className='half_of'>Did you know that 3M businesses  generated 20M leads and $400M in sales after they started using our  chatbots?</p>
                            <ul className='ul_padding'>
                                <li className='connect_li'>Stop 60% of your clients from abandoning  their carts by offering a discount</li>
                                <li className='connect_li'>Automatically qualify leads and reach out to them at the right time</li>
                                <li className='connect_li'>Easily gather your visitors’ emails and  phone numbers</li>
                            </ul>
                            <a className='discover_live'>try for free now!</a><i className="bi bi-arrow-right-short"></i>
                        </div>
                        <div className='col-sm-12 col-md-6 img_live_chat_padd'>
                            <img className='img img-fluid' src={closed} />
                        </div>
                    </div>
                </div>
                <PricingModel />
            </div>

        </>
    )
}

export default CustomerServices

