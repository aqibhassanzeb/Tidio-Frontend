import React from "react";
import "./ChatbotTest.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsArrowDownRight, FaUserTie } from "react-icons/bs";
import { ImUser } from "react-icons/im";

const ChatbotTest = () => {
  return (
    <div>
      <div className="testchat">
        <div className="chattesthead p-2">
          <p className="p-0 m-0">ChatBot</p>
          <RiArrowDropDownLine />
        </div>
        <div className="inputcahttest p-2">
          <div className="introdiv">
            <ImUser className="suericon" />
            <h5 className="text-center">Please Introduce yourself</h5>
            <div className="mt-4">
              <div className="datain2">
                <BsArrowDownRight className="righticonin" />
                <input type="text" placeholder="Name" className="indataput" />
              </div>
              <div className="datain2">
                <BsArrowDownRight className="righticonin" />

                <input
                  type="Number"
                  placeholder="Phone"
                  className="indataput"
                />
              </div>
              <div className="datain2">
                <BsArrowDownRight className="righticonin" />

                <input type="email" placeholder="email" className="indataput" />
              </div>
              
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary">Submit</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotTest;
