import React from 'react'
import '../configureChat/ConfigureChat.css'
const ConfigureChat = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='head'>
                            <h3>Configure your live chat</h3>
                            <div className='livechatInnerdiv'>
                                <input type="text" placeholder='Enter your username' />
                                <p>Color scheme & avatar</p>
                                <span>color</span>
                                <span>color</span>
                                <span>color</span>
                                <span>color</span>
                                <span>color</span>
                                <div>
                                <select id="cars" className='slectbox' name="carlist" form="carform">
                                    <option value="volvo">Select chat Language</option>
                                    <option value="saab">English</option>
                                    <option value="opel">Urdu</option>
                                    <option value="audi">Arabi</option>
                                </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-6'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfigureChat
