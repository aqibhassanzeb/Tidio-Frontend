import React from 'react'
import trans from "../../images/trans.webp"
import transs from "../../images/trans2.webp"
import "../pricingmodel/PricingModel.css"
export default function PricingModel() {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 text-center'>
                    <h2 className='trans_head'>A transparent pricing model</h2>
                </div>
            </div>
            <div className='container mt-3'>
                <div className='row mt-4 justify_btween'> 
                <div className='col-sm-5 col-md-5 shadow_trans display_trans'>
                   <div className='col-sm-6 col-md-6 custom_free '>
                        <h1>Free</h1>
                        <h3>Forever-free</h3>
                        <p>The best option for companies who just started and want to elevate their customer support.</p>
                    </div>
                    <div className='col-sm-6 col-md-6 image-end '>
                        <img className='trans_img' src={trans} />
                    </div>
                </div>
                <div className='col-sm-5 col-md-5 left_img shadow_trans display_trans'>
                   <div className='col-sm-6 custom_free'>
                        <h1>Free</h1>
                        <h3>Forever-free</h3>
                        <p>The best option for companies who just started and want to elevate their customer support.</p>
                    </div>
                    <div className='col-sm-6 col-md-6 image-end '>
                        <img className='trans_img' src={transs} />
                    </div>
                </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-sm-12 mt-3 text-center'>
                        <a className='view_pricing'>View full pricing</a>
                    </div>
                    <div className='col-sm-12 text-center mt-4'>
                        <p className='A_day'>A 7-day trial to test features from our free and paid plan. After the trial <br/> ends, free features are available forever. No credit card required.</p>
                    </div>
                </div>
                <div className='container Discover_bg text-center mt-4'>
                    <div className='col-sm-12 padding_dis'>
                        <h1 className='Discover_heading'>Discover what Tidio can do for you</h1>
                        <button className='btn btn-primary btn-lg Get_btn mt-3'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
