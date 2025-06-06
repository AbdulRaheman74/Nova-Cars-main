import { Link } from "react-router-dom";

const ChooseUs = () => {
  return (
    <div className="choose-us-cont">
      <img src="others.png" alt="" />
      <div className="choose-main-cont">
        <div className="choose-cont1">
          <p>Why Choose Us</p>
          <h1>Unmatched Value with Budget Friendly Deals</h1>
          <p>
            Discover the best deals in affordability and value at our
            dealership. We redefine your car-buying experience by ensuring that
            every transaction offers unmatched value. With transparent pricing
            and additional benefits, our commitment to providing exceptional
            value sets us apart in the world of online car sales.
          </p>
          <Link to="/about">Learn More</Link>
        </div>
        <div className="choose-cont2">
          <div className="choose-list-cont1">
            <img src="choose1.svg" alt="" />
            <div>
              <h1>Fair Pricing</h1>
              <p>
                We prioritize transparent and fair car pricing, aiming to offer
                customers competitive deals based on the true value of each
                vehicle.
              </p>
            </div>
          </div>
          <div className="choose-list-cont2">
            <img src="choose3.png" alt="" />
            <div>
              <h1>Customer-Centric Approach</h1>
              <p>
                We provide personalized, customer-centric service, understanding
                your preferences and guiding you through the car-buying process
                for complete satisfaction.
              </p>
            </div>
          </div>
          <div className="choose-list-cont3">
            <img src="choose2.svg" alt="" />
            <div>
              <h1>Quality Assurance</h1>
              <p>
                Our commitment to value permeates every aspect of our service,
                ensuring quality vehicles and transparent processes for an
                exceptional car-buying experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
