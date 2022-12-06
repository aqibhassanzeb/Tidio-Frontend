import React, { useState } from "react";
import "./Home.css";
import { BiCode, BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
// import { BiDownArrowAlt } from "react-icons/fi";
import { FaWordpress, FaShopify } from "react-icons/fa";
import { SiBigcommerce } from "react-icons/si";
import PrestaShop from "../../images/PrestaShop.png";
import chatimages from "../../images/chatss.png";
import chatsvg from "../../images/chatbot.svg";
import facebook from "../../images/Facebook.png";

function Home() {
  const [activeTab, setActiveTab] = useState(1);

  const handleActive = (ind) => {
    setActiveTab(ind);
  };

  return (
    <div className="container-home">
      <div className="row-hometop">{/* <h5>Hi Ihtesham2773</h5> */}</div>
      <div className="row-home">
        <div>
          <div className="sidearrow-btntop">
            <BiUpArrowAlt className="downarrow-icon" />
          </div>
          <div className="sidearrow-btnbottom">
            <BiDownArrowAlt className="toparrow-icon" />
          </div>
        </div>
        <div className="bgrow "></div>
        <div className="bgrow1 "></div>
        <div className="line1-home "></div>
        <div className="line2-home "></div>
        <div className="line3-home "></div>
        <div className="line4-home "></div>
        <div className="homedivmain ">
          <div className="colleft-home">
            <h3>Feel the value Tidio brings to your business</h3>

            <div className="first-line" onClick={() => handleActive(1)}>
              <div className="circle"></div>
              <div>
                <h2>1. Add widget to your website</h2>
                <p>That’s how the customers will see your messages.</p>
              </div>
            </div>

            <div className="second-line" onClick={() => handleActive(2)}>
              <div className="circle"></div>
              <div>
                <h2>2. Start your first conversation</h2>
                <p>See how it looks like to talk with your customer.</p>
              </div>
            </div>

            <div className="third-line" onClick={() => handleActive(3)}>
              <div className="circle"></div>
              <div>
                <h2>3. Add more chatbots to your website</h2>
                <p>Automate conversations with your visitors</p>
              </div>
            </div>

            <div className="fourth-line" onClick={() => handleActive(4)}>
              <div className="circle"></div>
              <div>
                <h2>4. Connect Facebook Messenger and Instagram</h2>
                <p>Handle your conversations across channels in one panel</p>
              </div>
            </div>

            <div className="line5-home"></div>
            <div className="fivth-line">
              <div className="circle"></div>
              <div>
                <h2>5. Don’t miss any conversations</h2>
                <p>Have all the chats in your pocket and try the mobile app.</p>
              </div>
            </div>
          </div>
          <div className="rescard">
            {activeTab == 1 && (
              <>
                <div className="colright-home">
                  <h3>Choose on which platform you need instructions:</h3>
                  <a className="btn-js">
                    <BiCode className="icon-js" />
                    JavaScript
                  </a>

                  <a className="btn-js">
                    <FaShopify className="icon-Shopify" />
                    Shopify
                  </a>
                  <a className="btn-js">
                    <FaWordpress className="icon-WordPress" />
                    WordPress
                  </a>

                  <a className="btn-js">
                    <img className="icon-PrestaShop" src={PrestaShop} />
                    PrestaShop
                  </a>

                  <a className="btn-js">
                    <SiBigcommerce className="icon-BigCommerce" />
                    BigCommerce
                  </a>
                </div>
              </>
            )}

            {activeTab == 2 && (
              <>
                <div className="colright-second">
                  <div className="right-second1">
                    <h3>
                      Currently you have no visitor. But you can simulate one!
                    </h3>
                    <p>
                      Talk with yourself and see how your visitor’s experience
                      will look like.
                    </p>
                    <button type="button" className="simulate-btnss">
                      Simulate conversation
                    </button>
                  </div>
                  <img className="img-fluid build_img2" src={chatimages} />
                </div>
              </>
            )}

            {activeTab == 3 && (
              <>
                <div className="colright-third">
                  <div className="right-third1">
                    <h3>Build a relationship with your customers</h3>
                    <h3>even when you are not around</h3>

                    <button type="button" className="chatbots-btnss">
                      {" "}
                      Go to chatbots
                    </button>
                    <img className="img-fluid build_img" src={chatsvg} />
                  </div>
                </div>
              </>
            )}

            {activeTab == 4 && (
              <>
                <div className="colright-fourth">
                  <div className="right-fourth1">
                    <h3>Stay in touch with your customers and followers</h3>
                    <p>
                      Connect your Messenger and Instagram to communicate via
                      direct messages and Stories.
                    </p>
                    <button type="button" className="messager-btnss">
                      <img className="facebook-icon" src={facebook} />
                      Messenger
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="rowsecond-home">
        <p>
          These steps are foundation that will help you get on track with the
          product. After completing all of them you will gain access to all
          necessary metrics & information on how Tidio helps your bussiness
          grow.
        </p>
        <button type="button" className="skip-btns">
          Skip now & go to main dashboard
        </button>
      </div>
    </div>
  );
}

export default Home;
