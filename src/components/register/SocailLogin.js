import React, { useState } from 'react'
import ReactFacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { socailLogin } from '../../apis/Auth-api';
import { FACEBOOK_APP_ID, GOOGLE_OAUTH } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaGoogle, FaFacebookF} from 'react-icons/fa'

const SocailLogin = () => {
    const navigate =useNavigate()
    const [googleLoading, setGoogleLoading] = useState(false);
    const [facebookLoading, setFacebookLoading] = useState(false);
    

    // Socail Login 

    const onSuccessGoogle = async (response) => {
        console.log(response)
        const { email, googleId:socailLoginUserId, imageUrl, name } = response.profileObj;
            console.log("responce :",response)
        try {
            const res = await socailLogin({loginStatus:"google", socailLoginUserId, imageUrl, email, name});
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("user",JSON.stringify(res.data.user))
            navigate('/')
        } catch (err) {
            console.log(err)
        } finally {
          setGoogleLoading(false);
        }
      };
      
      const onFailureGoogle = () => {
        toast.error("something went wrong!");
        setGoogleLoading(false);
      };

    //   Facebook Login 

      const responseFacebook = async (response) => {
        const { email,userID:socailLoginUserId, picture, name } = response;
        console.log(response);
        try {
          const imageUrl = picture?.data?.url;
          const res = await socailLogin({loginStatus:"facebook", socailLoginUserId, imageUrl, email, name});
          localStorage.setItem("token",res.data.token)
          localStorage.setItem("user",JSON.stringify(res.data.user))
          navigate('/')
        } catch (err) {
            console.log(err)
        } finally {
          setFacebookLoading(false);
        }
      };

  return (
    <div>
        <ToastContainer/>
        <div className=' fbgobtn'>
        <div>

       <GoogleLogin
                      clientId={GOOGLE_OAUTH}
                      buttonText="Login"
                      onSuccess={onSuccessGoogle}
                      onFailure={onFailureGoogle}
                      render={(renderProps) => (
                        <>
                          {googleLoading ? (
                            <div className="auth_social social_loader">
                              <h1>Loading...</h1>
                            </div>
                          ) : (
                            <button
                              onClick={() => {
                                setGoogleLoading(true);
                                renderProps.onClick();
                              }}
                             
                              className="auth_social"
                              >  Login Google</button>
                              )}
                        </>
                      )}
                      /> 
        </div>
     
                              {/* FaceBook Botton Portion */}

        <div>
        <ReactFacebookLogin
        style={{width: "40px", height: "40px"}}
                      appId={FACEBOOK_APP_ID}
                      autoLoad={false}
                      callback={responseFacebook}
                      fields="name,email,picture"
                      render={(renderProps) => (
                        <>
                          {facebookLoading ? (
                            <div className="auth_social social_loader">
                              <h1>Loading...</h1>
                            </div>
                          ) : (
                            <button
                              className="auth_social "
                              onClick={() => {
                                setFacebookLoading(true);
                                renderProps.onClick();
                              }}
                            >  Facebook Login</button>
                          )}
                        </>
                      )}
                    />

        </div>
        </div>
    </div>
  )
}

export default SocailLogin