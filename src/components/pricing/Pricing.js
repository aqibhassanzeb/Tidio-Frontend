import React, { Fragment } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./pricing.css";
function Pricing() {
  return (
    <Fragment>
      <div className="container">
        <div className="firstText">
          <p>Reach your customers now, pick a plan later</p>
        </div>
        <div className="nextText">
          <p>Try Tidio for free. No credit card required.</p>
        </div>
        <div className="pricing-button">
          <button className="btn-primary">Start your free trial</button>
        </div>
        <div className="pricing-tabs">
          <Tabs
            defaultActiveKey=""
            id="fill-tab-example"
            className="mb-3 Tab"
            fill
          >
            <Tab eventKey="monthly" title="Monthly"></Tab>
            <Tab eventKey="annually" title="Annually"></Tab>
          </Tabs>
        </div>
        <div className="pricing-annuallyFree">
          Annually you have 2 months free😍
        </div>
      </div>
      <div className="container-fluid pricing-cards">
        <div className="row">
          <div className="col-4">
            <div class="card card-1" style={{height: "130vh"}}>
              <p className="first-cardText">Free</p>
              <div className="cardText2">
                <p>
                  An excellent choice to get your small website started, no
                  commitment required.
                </p>
              </div>
              <div></div>
              <div className="card-price">
                <span className="price">0</span>
                <span className="currency">USD</span>
                <span className="perMonth">/mo.</span>
              </div>
              <div className="trialButton">
                <button className="card-trial-button">
                  Use Tidio for free
                </button>
              </div>
              <div className="buttonBottom-text">
                <p>(no credit card required)</p>
              </div>
              <div className="secondLast-text">
                <ul>
                  <li>Live Chat -conversations with 50 users</li>
                  <li>Chatbots -conversations with 100 users</li>
                  <li>Email Support</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card card-1" style={{height: "130vh"}}>
              <p className="first-cardText">Communicator</p>
              <div className="cardText2">
                <p>
                The best option for mid-sized teams that base customer support on live conversations.
                </p>
              </div>
              <div></div>
              <div className="card-price">
                <span className="price">15<sup>.83</sup></span>
                <span className="currency">USD</span>
                <span className="perMonth">/mo.</span>
              </div>
              <div className="trialButton">
                <button className="card-trial-button2">
                  Start my free trial
                </button>
              </div>
              <div className="buttonBottom-text">
                <p>(no credit card required)</p>
              </div>
              <div className="secondLast-text">
                <ul>
                  <li>Live Chat -conversations with 50 users</li>
                  <li>Chatbots -conversations with 100 users</li>
                  <li>Email Support</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card card-1" style={{height: "130vh"}}>
              <p className="first-cardText">Tidio+</p>
              <div className="cardText2">
                <p>
                A solution for growing businesses looking for advanced features and dedicated support.
                </p>
              </div>
              <div>
              </div>
              {/* <div className="priceAbove-text">
              <p>Billed per operator</p>

              </div> */}
              <div className="card-price">
                <span className="price">240<sup>.84</sup></span>
                <span className="currency">USD</span>
                <span className="perMonth">/mo.</span>
              </div>
              <div className="trialButton">
                <button className="card-trial-button2">
                Contact Sales
                </button>
              </div>
              <div className="buttonBottom-text">
                <p>(no credit card required)</p>
              </div>
              <div className="secondLast-text">
                <ul>
                  <li>Live Chat -conversations with 50 users</li>
                  <li>Chatbots -conversations with 100 users</li>
                  <li>Email Support</li>
                </ul>
              </div>
              <div className="features">
                <p>Features:</p>

                <div className="secondLast-text">
                  <ul>
                    <li id="highlightText">All features from Chatbots and Communicator plans</li>
                    <li>AI Response Bots</li>
                    <li>Multisite suppor</li>
                    <li>Custom integrations</li>
                    <li>Email marketing</li>
                  </ul>
                </div>
              </div>
              <div className="features">
                <p>Services:</p>

                <div className="secondLast-text">
                  <ul>
                    <li>Dedicated Customer Success Manager</li>
                    <li>Dedicated Implementation Specialist</li>
                    <li>Chatbot building assistance</li>
                    <li>Account Reviews</li>
                    <li>Training Sessions</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">

      </div>
    </Fragment>
  );
}

export default Pricing;
