import React from "react";
import { Carousel } from "react-bootstrap";
import hor from "../../images/horse.jpg";
import saleimg from "../../images/cart3.webp";
import saleimg4 from "../../images/4vis.webp";
import saleimg5 from "../../images/5vis.webp";
import saleimg6 from "../../images/6vis.webp";
import saleimg7 from "../../images/7vis.webp";
import saleimg8 from "../../images/8vis.webp";
import saleimg9 from "../../images/9vis.webp";
import saleimg10 from "../../images/10vis.webp";
import cardimgweb from "../../images/cart1.webp";
import "../discoverSlides/DiscoverSlides.css";
const DiscoverSlides = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col ">
            <div className="carouselBackgroundcolor">
              <div className="headingcarol ">
                <h1 className="text-white text-center">
                  Discover 10 ways Tidio can boost your sales
                </h1>
              </div>
              <Carousel>
                <Carousel.Item>
                  <div className="textcarol d-flex ">
                    <div className=" textcaroli">
                      <div className="textcarolinfo">
                        <h1 className="text-white">1. Cart Saver</h1>
                        <p className="text-white ">
                          Stop 60% of customers from abandoning their carts by
                          offering a discount or free shipping
                        </p>
                      </div>
                      <div className="imagecarolinnderdiv">
                        <img
                          src={saleimg}
                          className="img-fluid saleimgcarol"
                          alt="sales"
                        />
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="textcarol d-flex ">
                    <div className=" textcaroli d-flex">
                      <div className="textcarolinfo">
                        <h1 className="text-white">
                          2. Welcome message + discount
                        </h1>
                        <p className="text-white ">
                          Welcome every website visitor and incentivize them to
                          make purchases by giving personalized discounts
                        </p>
                      </div>
                      <div className="imagecarolinnderdiv">
                        <img
                          src={cardimgweb}
                          className="img-fluid saleimgcarol"
                          alt="card"
                        />
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="textcarol d-flex ">
                    <div className=" textcaroli d-flex">
                      <div className="textcarolinfo">
                        <h1 className="text-white">3. Visitor leaves page</h1>
                        <p className="text-white ">
                          Send a personalized message to those who want to leave
                          your website
                        </p>
                      </div>
                      <div className="imagecarolinnderdiv">
                        <img
                          src={saleimg}
                          className="img-fluid saleimgcarol"
                          alt="sales"
                        />
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="textcarol d-flex ">
                    <div className=" textcaroli d-flex">
                      <div className="textcarolinfo">
                        <h1 className="text-white">4. Visitor returns</h1>
                        <p className="text-white ">
                          Welcome returning visitors and customers with a
                          personalized message
                        </p>
                      </div>
                      <div className="imagecarolinnderdiv">
                        <img
                          src={saleimg4}
                          className="img-fluid saleimgcarol"
                          alt="sales"
                        />
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="textcarol d-flex ">
                    <div className=" textcaroli d-flex">
                      <div className="textcarolinfo">
                        <h1 className="text-white">5. Measure time on page</h1>
                        <p className="text-white ">
                          Send a proactive chat message or a product proposal
                          based on the time they spent on your page
                        </p>
                      </div>
                      <div className="imagecarolinnderdiv">
                        <img
                          src={saleimg5}
                          className="img-fluid saleimgcarol"
                          alt="sales"
                        />
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="textcarol d-flex ">
                    <div className=" textcaroli d-flex">
                      <div className="textcarolinfo">
                        <h1 className="text-white">6. Live Visitors list</h1>
                        <p className="text-white ">
                          See who is visiting your website in real time and
                          monitor which part of your website they are browsing
                        </p>
                      </div>
                      <div className="imagecarolinnderdiv">
                        <img
                          src={saleimg6}
                          className="img-fluid saleimgcarol"
                          alt="sales"
                        />
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="textcarol d-flex ">
                    <div className=" textcaroli d-flex">
                      <div className="textcarolinfo">
                        <h1 className="text-white">7. Visitor leaves form</h1>
                        <p className="text-white ">
                          Prevent website visitors from abandoning the form by
                          sending them a message when they stop filling it
                        </p>
                      </div>
                      <div className="imagecarolinnderdiv">
                        <img
                          src={saleimg7}
                          className="img-fluid saleimgcarol"
                          alt="sales"
                        />
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="textcarol d-flex ">
                    <div className=" textcaroli d-flex">
                      <div className="textcarolinfo">
                        <h1 className="text-white">
                          8. Sales monitoring dashboard
                        </h1>
                        <p className="text-white ">
                          See how your sales grow after the website visitors
                          interact with Tidio
                        </p>
                      </div>
                      <div className="imagecarolinnderdiv">
                        <img
                          src={saleimg8}
                          className="img-fluid saleimgcarol"
                          alt="sales"
                        />
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="textcarol d-flex ">
                    <div className=" textcaroli d-flex">
                      <div className="textcarolinfo">
                        <h1 className="text-white">9. See all visitor info</h1>
                        <p className="text-white ">
                          View your customers’ carts
                          <br />
                          Track what they are browsing on your website
                          <br />
                          Send them offers and links to products based on their
                          website behavior
                          <br />
                          Collect their phone numbers and emails
                        </p>
                      </div>
                      <div className="imagecarolinnderdiv">
                        <img
                          src={saleimg9}
                          className="img-fluid saleimgcarol"
                          alt="sales"
                        />
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="textcarol d-flex ">
                    <div className=" textcaroli d-flex">
                      <div className="textcarolinfo">
                        <h1 className="text-white">
                          10. Export visitors’ data
                        </h1>
                        <p className="text-white ">
                          Export the visitors’ data to a .csv file
                          <br />
                          Easily filter and segment your visitors
                        </p>
                      </div>
                      <div className="imagecarolinnderdiv">
                        <img
                          src={saleimg10}
                          className="img-fluid saleimgcarol"
                          alt="sales"
                        />
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverSlides;
