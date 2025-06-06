import Book from "./Book";
import Client from "./Clients";
import Step from "./Step";
import ChooseUs from "./ChooseUs";
import Testimonial from "./Testimonial";
import BasicAccordion from "./Faq";
import MobileApp from "./MobileApp";
import Footer from "../Footer";

const Truck = (props) => {
  return (
    <div
      style={{
        opacity: props.clickState ? "1" : "0",
        zIndex: props.clickState ? "10" : "",
      }}
      className="type-truck type"
    >
      <div className="cars-main">
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Toyota Tacoma</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod truck1" src="truck1.png" alt="" />
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
              <p>75,500$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Ford Maverick XLT</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod truck7" src="truck7.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Diesel</p>
              <img src="auto.png" alt="" />
              <p>Auto</p>
              <img src="speed.png" alt="" />
              <p>9.5ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#booking"></a>
              <p>25,500$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>RAM 1500 Rebel</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod truck2" src="truck2.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>7.5ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#booking"></a>
              <p>65,500$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Ford F-150 XLT</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod truck4" src="truck4.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>3.5ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#booking"></a>
              <p>46,500$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Nissan Frontier SV</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod  truck5" src="truck5.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Diesel</p>
              <img src="auto.png" alt="" />
              <p>Auto</p>
              <img src="speed.png" alt="" />
              <p>8.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#booking"></a>
              <p>30,150$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Toyota Tundra Hybrid</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod truck6" src="truck6.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="auto.png" alt="" />
              <p>Auto</p>
              <img src="speed.png" alt="" />
              <p>4ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#booking"></a>
              <p>23,700$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>RAM 1500 Rebel</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod truck3" src="truck3.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>2ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#booking"></a>
              <p>59,300$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Hyundai Santa Cruz</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod truck8" src="truck8.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Diesel</p>
              <img src="auto.png" alt="" />
              <p>Auto</p>
              <img src="speed.png" alt="" />
              <p>7ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#booking"></a>
              <p>$28,150</p>
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

export default Truck;
