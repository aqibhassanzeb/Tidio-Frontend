import React from 'react'
import '../insideTidio/InsideTidio.css'
import employeeima from '../../../../images/employeepanel.jpg'
import laodim from '../../../../images/laoding.png'
import { IoReorderTwoOutline } from 'react-icons/io'
const InsideTidio = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row border'>
                    <div className='col-3 '>
                        <div className='feeltext'>
                            <p className='mt-3' >Feel the value Tidio brings to your bussiness</p>
                        </div>
                    </div>
                    <div className='col-6  '>
                        <p className='mt-3 unfinishedtext'>You still have 5 unfinished tasks on our check-list that we highly recommend
                            going over before you start having conversations. <a href='' className='text-decoration-none'>Show me list.</a> </p>

                    </div>
                    <div className='col-3 '>
                        <img src={employeeima} className='img-fluid tidiopanel' />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-2  mt-3 chatbotmaindiv'>
                        <div className=' mt-4'>
                            <h5>Current Tidio</h5>
                            <h4 className='text-center insognt'>Insights</h4>
                        </div>
                    </div>
                    <div className='col-2  mt-3 chatbotmaindiv'>
                        <div className='totolLead mt-3'>
                            <h1 className='text-center'>0</h1>
                            <p className='text-center'>Total leads acquired</p>
                        </div>
                    </div>
                    <div className='col-4  mt-3 chatbotmaindiv'>
                    <div>
                        <div className=' chatbot'>
                            <span>Chatbots</span>
                            <span>monthly limit</span>
                        </div>
                        <span className='m-0 visitortext'>(visitor reached)</span>
                    </div>
                    <img src={laodim} className='img-fluid loadingimg' />
                    </div>
                    
                    <div className='col-4  chatbotmaindiv mt-3'>
                    <div>
                    <div className='d-flex justify-content-center'>
                    <span>
                            <div className='oneline'></div>
                            <div className='oneline2'></div>
                            </span>
                            </div>
                            <p className='mt-3'>Visitors on your page right now</p>
                            <a href='' className='text-center text-decoration-none'>Install Tidio widget to see this</a>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InsideTidio
