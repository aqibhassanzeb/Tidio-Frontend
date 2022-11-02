import React from 'react'
import trans from "../../images/custo.png"
import transs from "../../images/trans2.webp"
import  {BsArrowRight} from 'react-icons/bs'
import "../pricingmodel/PricingModel.css"
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export default function PricingModel() {
    const navigate = useNavigate();
    return (
        <>
            <div className='container my-4'>
                <div className='row'>
                    <div className='col-sm-12 text-center'>
                        <p className='trans_head'>A transparent pricing model</p>
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
                                <div className='text-center my-2'>
                                    <p className='anchorfullpri' onClick={() => navigate("/pricing")}> View full pricing <span> <BsArrowRight className='aroico'/> </span>  </p>
                                </div>
                                <div className='text-center my-2'>
                                <p className='seventrail' o>A 7-day trial to test features from our free and paid plan. After the trial <br/> ends, free features are available forever. No credit card required. </p>
                            </div>

                            <div className='dicoverbackdown my-2'>
                                <div >
                                    <p className='dicovertiodio'>Discover what Tidio can do for you</p>
                                   <div className='discovermaindic'> <button className='startdebtn ' onClick={()=> navigate("/login")} >Get Started</button></div>
                                </div>
                                </div>
                        </div>
                    </div>
                

            </div>
        </>
    )
}
