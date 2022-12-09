import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { verifyEmail } from "../../apis/Auth-api";
import {GoMailRead} from 'react-icons/go'
import "./VerifyEmail.css";
const VerifyEmail = () => {
  let { token } = useParams();
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    verifyEmail(token)
      .then((res) => {
        setLoading(false);
        toast(res.data?.message);
      })
      .catch((err) => {
        toast.error(err.response?.data.message);
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="row">
        <div className="col">
          <h5 className="text-primary">Antartical Corps</h5>
          <div className="maindivemailverify">
          <div className="verifyheadandicon">
          
          <GoMailRead className="iconverifymail" />
            <h5 className="text-center">Verify Your Email</h5>
            </div>
            <div className="mt-2">
            <p className="text-center p-0 m-0">
              Hi Dear! Use the Link below to verify your email
            </p>
            <p className="text-center">and start enjoying AntarticalCorps</p>
            </div>
            <div className="d-flex justify-content-center ">
            <button
              disabled={loading}
              className="VerifyMailbtn w-50"
              onClick={handleSubmit}
            >
              Verify Email
            </button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
