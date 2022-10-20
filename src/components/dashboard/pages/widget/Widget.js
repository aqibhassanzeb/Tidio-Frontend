import React from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Accordion } from "react-bootstrap";
import { AiFillHome, AiFillEye } from 'react-icons/ai';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import EmojiPicker from 'emoji-picker-react';
import "../widget/Widget.css"
export default function Widget() {
    return (
        <div className='container-fluid'>
            <div className='col-sm-6'>
                <div className="accordion mt-5">
                    <Accordion style={{ border: "none" }}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='text-dark border_acc'>
                                <AiFillEye className='text-dark' /> &nbsp;  &nbsp; <h5 className='widget_header'>Widget Visibility</h5>
                            </Accordion.Header>
                            <hr className='margin_hr' />
                            <Accordion.Body>
                                <div className='row'>
                                    <div className='col-sm-12 d-flex p-3'>
                                        <label className='display_widget'>Display Widget</label>
                                        <div class="form-check form-switch check_custom">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                        </div>
                                    </div>
                                    <div className='col-sm-12 d-flex p-3 pb-0'>
                                        <label className='display_widget'>Devices</label>
                                        <Form.Select aria-label="Default select example" className="select_device px-2 py-1">
                                            <option>Both on desktop and mobile devices</option>
                                            <option value="1">Only on desktop devices</option>
                                            <option value="2">Only on mobile devices</option>
                                        </Form.Select>
                                    </div>
                                    <div className='col-sm-12'>
                                        <label className='hide_screen'>Hide on specific</label>
                                    </div>
                                    <div className='col-sm-12 d-flex p-3'>
                                        <label className='display_chat'>Display the Chat<br /> When You're Offline</label>
                                        <div class="form-check form-switch check_chat">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                        </div>
                                    </div>
                                    <div className='col-sm-12 d-flex p-3'>
                                        <label className='display_chat'>Display the Chat<br /><small className='color_small'>(adjust online hour)</small></label>
                                        <div class="form-check form-switch ">
                                            <input class="form-control" />
                                        </div>
                                    </div>
                                    <div className='col-sm-12 d-flex p-3'>
                                        <label className='display_chat'>Offline message</label>
                                        <div class="form-check form-switch ">
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <AiFillHome className='text-dark' /> &nbsp;  &nbsp; <h5 className='widget_header'>Get Started</h5>
                            </Accordion.Header>
                            <hr className='margin_hr' />
                            <Accordion.Body>
                                <div className='row'>
                                    <div className='col-sm-2'>
                                        <label className='status_p'>Status:</label> <br/>
                                        <label className='status_p mt-5'>message:</label><br />
                                        <label className='status_p_label'>Background:</label> <br/>
                                    </div>
                                    <div className='col-sm-10'>
                                        <div className="form-check ">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder='Enter your status here'></textarea> <br/>
                                        <textarea className="form-control custom_form_control" id="exampleFormControlTextarea1" rows="2" placeholder='enter Your message here'></textarea> <br/>
                                        <div class="form-check form-switch check_background">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                            <AiFillHome className='text-dark' /> &nbsp;  &nbsp; <h5 className='widget_header'>Mobile Widget</h5>
                            </Accordion.Header>
                            <hr className='margin_hr' />
                            <Accordion.Body>
                                You and your operators can send unlimited live chat messages,
                                but the number of people you can contact depends on your plan.
                                You can talk to 50 unique visitors on the free plan and an
                                unlimited number of visitors on the Communicator plan.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                            <AiFillHome className='text-dark' /> &nbsp;  &nbsp; <h5 className='widget_header'>Free-chat Survey</h5>
                            </Accordion.Header>
                            <hr className='margin_hr' />
                            <Accordion.Body>
                                Yes. As a free plan subscriber, you can add chatbot templates to
                                your account and use our chatbot builder to build as many
                                chatbots as you want. Although your chatbots can have an
                                unlimited number of chats, they are limited to talking only to
                                100 unique visitors per month.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div className='col-sm-4'>

            </div>
        </div>
    )
}
