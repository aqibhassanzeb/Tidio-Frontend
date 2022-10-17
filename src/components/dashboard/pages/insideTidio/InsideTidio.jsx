import React from 'react'
import '../insideTidio/InsideTidio.css'
import employeeima from '../../../../images/employeepanel.jpg'
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
                <div className='col-3 border'>
                
                </div>
                <div className='col-3 border'>
                
                </div>
                <div className='col-3 border'>
                
                </div>
                <div className='col-3 border'>
                
                </div>
                </div>
            </div>
        </>
    )
}

export default InsideTidio
