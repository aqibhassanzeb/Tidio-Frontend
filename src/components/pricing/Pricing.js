import React, { Fragment, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Accordion } from "react-bootstrap";
import "./pricing.css";
function Pricing() {
  return (
    <Fragment>
      <div className="container" id="firstContainer">
        <div className="firstText mt-4">
          <p>Reach your customers now, pick a plan later</p>
        </div>
        <div className="nextText">
          <p>Try Tidio for free. No credit card required.</p>
        </div>
        <div className="pricing-button mt-4">
          <button className="btn-primary">Start your free trial</button>
        </div>
        <div className="both">

        <div className="pricing-tabs mt-4 d-flex flex-direction-row">
          <Tabs
            defaultActiveKey=""
            id="fill-tab-example"
            className="mb-3 Tab"
            fill
          >
            <Tab id="tabs" eventKey="monthly" title="Monthly"></Tab>
            <Tab id="tabs" eventKey="annually" title="Annually"></Tab>
          </Tabs>
        </div>
        <div className="pricing-annuallyFree">
          Annually you have 2 months free😍
          </div>
          </div>

      </div>
      <div className="container-fluid pricing-cards">
        <div className="row mt-5" id="cardsRow">
          <div className="col-md-4">
            <div class="card card-1" style={{ height: "130vh" }}>
              <p className="first-cardText">Free</p>
              <div className="cardText2">
                <p>
                  An excellent choice to get your small website started, no
                  commitment required.
                </p>
              </div>
              <div></div>
              <div className="card-price mt-4">
                <span className="price">0</span>
                <span className="currency">USD</span>
                <span className="perMonth">/mo.</span>
              </div>
              <div className="trialButton mt-2">
                <button className="card-trial-button">
                  Use Tidio for free
                </button>
              </div>
              <div className="buttonBottom-text mt-2">
                <p>(no credit card required)</p>
              </div>
              <div className="secondLast-text mt-5">
                <ul>
                  <li>Live Chat -conversations with 50 users</li>
                  <li>Chatbots -conversations with 100 users</li>
                  <li>Email Support</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card card-1" style={{ height: "130vh" }}>
              <p className="first-cardText">Communicator</p>
              <div className="cardText2">
                <p>
                  The best option for mid-sized teams that base customer support
                  on live conversations.
                </p>
              </div>
              <div></div>
              <div className="card-price mt-4">
                <span className="price">
                  15<sup>.83</sup>
                </span>
                <span className="currency">USD</span>
                <span className="perMonth">/mo.</span>
              </div>
              <div className="trialButton mt-2">
                <button className="card-trial-button2">
                  Start my free trial
                </button>
              </div>
              <div className="buttonBottom-text mt-2">
                <p>(no credit card required)</p>
              </div>
              <div className="secondLast-text mt-5">
                <ul>
                  <li>Live Chat -conversations with 50 users</li>
                  <li>Chatbots -conversations with 100 users</li>
                  <li>Email Support</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card card-1" style={{ height: "130vh" }}>
              <p className="first-cardText">Tidio+</p>
              <div className="cardText2">
                <p>
                  A solution for growing businesses looking for advanced
                  features and dedicated support.
                </p>
              </div>
              <div></div>
              {/* <div className="priceAbove-text">
              <p>Billed per operator</p>

              </div> */}
              <div className="card-price mt-4">
                <span className="price">
                  240<sup>.84</sup>
                </span>
                <span className="currency">USD</span>
                <span className="perMonth">/mo.</span>
              </div>
              <div className="trialButton mt-2">
                <button className="card-trial-button2">Contact Sales</button>
              </div>
              <div className="buttonBottom-text mt-2">
                <p>(no credit card required)</p>
              </div>
              <div className="secondLast-text mt-5">
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
                    <li id="highlightText">
                      All features from Chatbots and Communicator plans
                    </li>
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
      <div className="container mt-4" style={{ height: "100vh", width: "50%" }}>
        <div className="questions-first">Frequently Asked Questions</div>
        <div className="accordion mt-5">
          <Accordion style={{ border: "none" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Can I change my subscription anytime I want?
              </Accordion.Header>
              <Accordion.Body>
                Yes. You can upgrade or downgrade your plan anytime you want,
                regardless of whether you have an active paid subscription or
                you are on the free plan.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Can I subscribe to more than one plan?
              </Accordion.Header>
              <Accordion.Body>
                Yes. Our plans are very flexible. Think of them as options you
                can freely turn on and off whenever you want. If you’re looking
                for advanced live chat features, pick the Communicator plan
                priced per operator seat. But, if automations are something else
                you need, you can add the Chatbots plan as well. Remember, you
                can downgrade your subscription at any time!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                How many live chat messages can I send?
              </Accordion.Header>
              <Accordion.Body>
                You and your operators can send unlimited live chat messages,
                but the number of people you can contact depends on your plan.
                You can talk to 50 unique visitors on the free plan and an
                unlimited number of visitors on the Communicator plan.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Does the free plan allow using chatbots?
              </Accordion.Header>
              <Accordion.Body>
                Yes. As a free plan subscriber, you can add chatbot templates to
                your account and use our chatbot builder to build as many
                chatbots as you want. Although your chatbots can have an
                unlimited number of chats, they are limited to talking only to
                100 unique visitors per month.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                When will my chatbot limit refresh?
              </Accordion.Header>
              <Accordion.Body>
                The limit refreshes every 30 days. If you are on the paid plan,
                the limit will refresh after 30 days, starting from the moment
                you have made your payment. If you are on the Free plan, the
                limit will refresh after 30 days, starting from the moment you
                have created your account.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Can I add Tidio live chat to more than one website/store?
              </Accordion.Header>
              <Accordion.Body>
                Yes, you can add Tidio to multiple sites and/or stores. Please
                note, however, that the live chat widget will share all the
                appearance and behavior settings across all your
                websites/stores. It means it will have the same color scheme, it
                will go online/offline according to the same DND hours, it will
                display the same offline messages, etc. See what Tid
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </Fragment>
  );
}

export default Pricing;
