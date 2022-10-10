import React from 'react';
import "./Customerservices.css"
import serviceimg from '../../images/imgcustomer.jpg'
function CustomerServices() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='maindivservices '>
                        <p className='mainheadCustomerServices'>Customer service is great, but it's even better<br />
                            when it's combined with higher sales</p>

                        <div className='btnget'><button className='getbtn  px-5 py-3'>Get Started</button></div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='row'>
                <div className='col my-5 p-0 serviceimg'>
                    <div className='sometext'>
                    <p className='texth3'>Tidio combines live chat</p>
                     <p className='texth3'>and chatbot tools to help</p>
                     <p className='texth3'>you provide superb</p>
                     <p className='texth3'> customer service and</p>
                     <p className='texth3'> generate more sales.</p>
                    </div>
                </div>
                
                </div>
            </div>

        </>
    )
}

export default CustomerServices

