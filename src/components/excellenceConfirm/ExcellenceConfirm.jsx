import React from 'react'
import '../excellenceConfirm/ExcellenceConfirm.css'
import word from '../../images/wordpress.png'
import shop from '../../images/shopify.png'
import getap from '../../images/getapp.jpg'
import merimg from '../../images/horse.jpg'

const ExcellenceConfirm = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='text-center fw-bold'>Excellence confirmed by 1961+ reviews</h1>
                        <div className=' d-flex justify-content-center'>
                            <img src={word} className='img-fluid  webimglogo' />
                            <img src={shop} className='img-fluid  webimglogo' />
                            <img src={getap} className='img-fluid  webimglogo' />
                            <img src={word} className='img-fluid  webimglogo' />

                        </div>
                    </div>
                </div>
               
            </div>
        </>
    )
}

export default ExcellenceConfirm
