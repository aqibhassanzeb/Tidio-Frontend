// import React, { useState } from 'react'
// import ReactFacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';
// import { useNavigate } from 'react-router-dom';
// import { socailLogin } from '../../apis/Auth-api';
// import { FACEBOOK_APP_ID, GOOGLE_OAUTH } from '../../config';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SocailLogin = () => {
//     const navigate =useNavigate()
//     const [googleLoading, setGoogleLoading] = useState(false);
//     const [facebookLoading, setFacebookLoading] = useState(false);
    

//     // Socail Login 

//     const onSuccessGoogle = async (response) => {
//         console.log(response)
//         const { email, googleId:socailLoginUserId, imageUrl, name } = response.profileObj;
//             console.log("responce :",response)
//         try {
//             const res = await socailLogin({loginStatus:"google", socailLoginUserId, imageUrl, email, name});
//             localStorage.setItem("token",res.data.token)
//             localStorage.setItem("user",JSON.stringify(res.data.user))
//             navigate('/')
//         } catch (err) {
//             console.log(err)
//         } finally {
//           setGoogleLoading(false);
//         }
//       };
      
//       const onFailureGoogle = (res) => {
//         console.log("responce of google fa",res)
//         toast.error("something went wrong!");
//         setGoogleLoading(false);
//       };

//     //   Facebook Login 

//       const responseFacebook = async (response) => {
//         const { email,userID:socailLoginUserId, picture, name } = response;
//         console.log(response);
//         try {
//           const imageUrl = picture?.data?.url;
//           const res = await socailLogin({loginStatus:"facebook", socailLoginUserId, imageUrl, email, name});
//           localStorage.setItem("token",res.data.token)
//           localStorage.setItem("user",JSON.stringify(res.data.user))
//           navigate('/')
//         } catch (err) {
//             console.log(err)
//         } finally {
//           setFacebookLoading(false);
//         }
//       };

//   return (
//     <div>
//         <ToastContainer/>
//         <div>

//        <GoogleLogin
//                       clientId={GOOGLE_OAUTH}
//                       buttonText="Login"
//                       onSuccess={onSuccessGoogle}
//                       onFailure={onFailureGoogle}
//                       render={(renderProps) => (
//                         <>
//                           {googleLoading ? (
//                             <div className="auth_social social_loader">
//                               <h1>Loading...</h1>
//                             </div>
//                           ) : (
//                             <h1
//                               onClick={() => {
//                                 setGoogleLoading(true);
//                                 renderProps.onClick();
//                               }}
//                               src="/assets/bg/google.png"
//                               className="auth_social"
//                               >Google</h1>
//                               )}
//                         </>
//                       )}
//                       /> 
//         </div>
//                               {/* FaceBook Botton Portion */}

//         <div>
//         <ReactFacebookLogin
//                       appId={FACEBOOK_APP_ID}
//                       autoLoad={false}
//                       callback={responseFacebook}
//                       fields="name,email,picture"
//                       render={(renderProps) => (
//                         <>
//                           {facebookLoading ? (
//                             <div className="auth_social social_loader">
//                               <h1>Loading...</h1>
//                             </div>
//                           ) : (
//                             <h1
//                               src="/assets/bg/facebook.jpeg"
//                               className="auth_social"
//                               onClick={() => {
//                                 setFacebookLoading(true);
//                                 renderProps.onClick();
//                               }}
//                             >Facebook Login</h1>
//                           )}
//                         </>
//                       )}
//                     />

//         </div>
//     </div>
//   )
// }

// export default SocailLogin

import React, { useState } from 'react'
import { useEarthoOne } from '@eartho/one-client-react';
import { socailLogin } from '../../apis/Auth-api';
import { useNavigate } from 'react-router-dom';

const SocailLogin = () => {
  const [loader, setLoader] = useState(false)
  const [controlFuc, setControlFuc] = useState(false)
  const {
    isLoading,
    isConnected,
    error,
    user,
    connectWithPopup,
    logout,
  } = useEarthoOne();
  const navigate =useNavigate()
      
  
  const onSuccessGoogle = async () => {
        setLoader(true)
        const { email, photoURL:imageUrl, firstName:name } = user.user;
        // user.firstName
            console.log("responce ", imageUrl, email, name)
           
        // try {
        //     const res = await socailLogin({ imageUrl, email, name});
        //     localStorage.setItem("token",res.data.token)
        //     localStorage.setItem("user",JSON.stringify(res.data.user))
        //     navigate('/')
        // } catch (err) {
        //     console.log(err)
        // } finally {
        //   setLoader(false);
        // }
      };

      console.log("user detail :",user)
  //  !isLoading && user && onSuccessGoogle() 
      // controlFuc && onSuccessGoogle()
      // logout({ returnTo: window.location.origin })
      logout()
      if (isConnected) {
        
        console.log("user :",user )
        
  //  navigate('/')
  }
   
    return(
      <>
      {isLoading ?<p>Loading...</p>
      :
      error?  <p>something went wrong</p> :
      <button
          className="btn btn-outline-success"
          id="login"
          onClick={() => connectWithPopup({ access_id: "ar8qYbHPuQgW7BtKz4FQ" })}
          >
        Log in
      </button>}
          </>
      )
 
}

export default SocailLogin
