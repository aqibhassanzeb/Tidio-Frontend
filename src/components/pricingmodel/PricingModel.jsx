import React from 'react'
import trans from "../../images/custo.png"
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
                    <div className='row mainrowtranparantdiv d-flex justify-content-center'>
                        
                            <div className='cardcustomertext m-2 p-0 d-flex col-md-6 col-sm-12'>
                                <span className='spantexttrans'>
                                    <h1>Free</h1>
                                    <h3>Forever-free</h3>
                                    <p>The best option for companies who just started and want to elevate their customer support.</p>
                                </span>
                                <div>
                                    <img src={trans} className='imgtransparent ' />
                                </div>
                            </div>
                            <div className='cardcustomertext m-2 p-0 d-flex col-md-6 col-sm-12'>
                                <span className='spantexttrans'>
                                    <h1>Free</h1>
                                    <h3>Forever-free</h3>
                                    <p>The best option for companies who just started and want to elevate their customer support.</p>
                                </span>
                                <div>
                                    <img src={transs} className='imgtransparent ' />
                                </div>
                            </div>
                        </div>
                    </div>
                

            </div>
        </>
    )
}
