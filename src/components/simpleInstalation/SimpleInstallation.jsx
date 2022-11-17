import React from 'react'
import '../simpleInstalation/SimpleInstallation.css'
import loginimg from '../../../src/images/loginlink.webp'
import loginimg2 from '../../../src/images/pluginsec.webp'
import loginimg3 from '../../../src/images/instactive.webp'
import loginimg4 from '../../../src/images/createacc.webp'
import loginimg5 from '../../../src/images/enjoyshort.webp'
import { useState } from 'react';
import { FaFacebookF, FaShopify, FaTwitter, FaTwitterSquare, FaWix, FaWordpressSimple } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
const SimpleInstallation = () => {

    const [show, setShow] = useState(1);
    const [active, setActive] = useState(1);
    const [changeimg, setChangeimg] = useState(1);

    const handleimgChange = (ind) =>{
        setChangeimg(ind)
    }
    return (
        <>
            <div className='container-fluid my-4'>
                <div className='row'>
                    <div>
                        <h1 className='text-center'>Simple installation within 5 minutes</h1>
                    </div>
                    <div className='my-2 plugtext'>
                        <span className={active === 2 ? 'plugintext' : 'plugintextactive'} onClick={() => { setShow(1); setActive(1) }}>Plugin</span>
                        <span className={active === 1 ? 'plugintext' : 'plugintextactive'} onClick={() => { setShow(2); setActive(2) }}>JS code</span>
                    </div>
                    {
                        show === 1 ? (
                            <div className='maindvloginimg'>
                                <div className='anchortextul'>
                                    <ul >
                                        <li onClick={() => handleimgChange(1)}><a>Log in to your website or platform</a></li>
                                        <li onClick={() => handleimgChange(2)}><a>Find the “Tidio” app in the plugins section</a></li>
                                        <li onClick={() => handleimgChange(3)}><a>Install and activate the plugin</a></li>
                                        <li onClick={() => handleimgChange(4)}><a>Create your free Tidio account</a></li>
                                        <li onClick={() => handleimgChange(5)}><a>Enjoy a short product tour and start using Tidio!</a></li>
                                    </ul>
                                </div>
                                {changeimg === 1 &&
                                    <div className='imageofanchortext'>
                                        <img src={loginimg} className='img-fluid loginimage' />
                                    </div>
                               }
                               {changeimg === 2 &&
                                <div className='imageofanchortext'>
                                    <img src={loginimg2} className='img-fluid loginimage' />
                                </div>
                           }
                           {changeimg === 3 &&
                            <div className='imageofanchortext'>
                                <img src={loginimg3} className='img-fluid loginimage' />
                            </div>
                       }
                       {changeimg === 4 &&
                        <div className='imageofanchortext'>
                            <img src={loginimg4} className='img-fluid loginimage' />
                        </div>
                   }
                   {changeimg === 5 &&
                    <div className='imageofanchortext'>
                        <img src={loginimg5} className='img-fluid loginimage' />
                    </div>
               }
                            </div>
                        )
                            :
                            null
                    }
                    {
                        show === 2 ? (
                            <div className='maindvloginimg'>
                                <div className='anchortextul'>
                                    <ul >
                                        <li><a>Create a free Tidio account</a></li>
                                        <li><a>Go to the “Installation” tab and find the installation code</a></li>
                                        <li><a>Copy the installation code and open your website's admin panel</a></li>
                                        <li><a>Place the code in your website or ask the developer to do that for you</a></li>
                                        <li><a>Save changes and start using Tidio right away!</a></li>
                                    </ul>
                                </div>
                                <div className='imageofanchortext'>
                                    <img src={loginimg} className='img-fluid loginimage' />
                                </div>
                            </div>
                        ) : null
                    }


                </div>
            </div>
            <div className='container-fluid my-4'>
                <div className='row iconrowdiv'>
                    <div className='tiodiointhead'>
                        <h1 className='text-center'>Tidio's Integration</h1>
                        <p className='connectpara'>Connect Tidio to ALL industry-leading websites and platforms via dedicated integrations</p>
                    </div>
                    <div className='d-flex'>
                        <div className='iconmaindiv'>
                            <div className='integrationIcon'><FaWix className='besticonshp' /></div>
                            <div className='integrationIcon'><FaShopify className='besticonshp' /></div>
                            <div className='integrationIcon'><FaFacebookF className='besticonshp' /></div>
                            <div className='integrationIcon'><BsInstagram className='besticonshp' /></div>
                            <div className='integrationIcon'><FaWordpressSimple className='besticonshp' /></div>
                            <div className='integrationIcon'><FaFacebookF className='besticonshp' /></div>
                            <div className='integrationIcon'><FaWix className='besticonshp' /></div>
                        </div>
                        <div className='iconmaindiv2 d-flex'>
                            <div className='integrationIcon'><FaTwitterSquare className='besticonshp' /></div>
                            <div className='integrationIcon'><FaShopify className='besticonshp' /></div>
                            <div className='integrationIcon'><FaFacebookF className='besticonshp' /></div>
                            <div className='integrationIcon'><BsInstagram className='besticonshp' /></div>
                            <div className='integrationIcon'><FaWordpressSimple className='besticonshp' /></div>
                            <div className='integrationIcon'><FaFacebookF className='besticonshp' /></div>
                            <div className='integrationIcon'><FaWix className='besticonshp' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SimpleInstallation
