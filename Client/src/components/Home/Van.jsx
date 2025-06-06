import Book from "./Book";
import Client from "./Clients";
import Step from "./Step";
import ChooseUs from "./ChooseUs";
import Testimonial from "./Testimonial";
import BasicAccordion from "./Faq";
import MobileApp from "./MobileApp";
import Footer from "../Footer";

const Van = (props) => {
  return (
    <div
      style={{
        opacity: props.clickState ? "1" : "0",
        zIndex: props.clickState ? "10" : "",
      }}
      className="type-van type"
    >
      <div className="cars-main">
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Mercedes-Benz</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod van1" src="van1.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>4.5ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#booking"></a>
              <p>$43,200$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Toyota Sienna</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod van7" src="van7.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Diesel</p>
              <img src="auto.png" alt="" />
              <p>Auto</p>
              <img src="speed.png" alt="" />
              <p>5ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#booking"></a>
              <p>46, 959$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Honda Odyssey</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod  van6" src="van6.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>7.8ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#booking"></a>
              <p>35,500$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Honda Odyssey</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod  van4" src="van4.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="auto.png" alt="" />
              <p>Auto</p>
              <img src="speed.png" alt="" />
              <p>3.5ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#booking"></a>
              <p>40,901$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Kia Carnival</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod  van5" src="van5.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Diesel</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>4.5ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#booking"></a>
              <p>$33,200</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Mercedes-Benz</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod van2" src="van2.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>4.5ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#booking"></a>
              <p>45,500$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Chrysler Pacifica</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod van3" src="van3.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="auto.png" alt="" />
              <p>Auto</p>
              <img src="speed.png" alt="" />
              <p>4.5ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#booking"></a>
              <p>55,660$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Ford Transit</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod van8" src="van8.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Diesel</p>
              <img src="auto.png" alt="" />
              <p>Auto</p>
              <img src="speed.png" alt="" />
              <p>4.5ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#booking"></a>
              <p>$46,415</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
      </div>
      <Book />
      <Client />
      <Step />
      <ChooseUs />
      <Testimonial />
      <BasicAccordion />
      <MobileApp />
      <Footer />
    </div>
  );
};

export default Van;
