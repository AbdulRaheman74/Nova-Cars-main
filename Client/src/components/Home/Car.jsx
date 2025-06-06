  import React, { useEffect, useState } from "react";
  import axios from "axios";

  import Book from "./Book";
  import Client from "./Clients";
  import Step from "./Step";
  import ChooseUs from "./ChooseUs";
  import Testimonial from "./Testimonial";
  import BasicAccordion from "./Faq";
  import MobileApp from "./MobileApp";
  import Footer from "../Footer";

  const Car = ({ clickState }) => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchCars = async () => {
        try {
          const response = await axios.get("http://localhost:6060/api/cars/getall");
          console.log("Fetched Cars:", response.data.cars);
          setCars(response.data.cars);
        } catch (error) {
          console.error("Failed to fetch car data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchCars();
    }, []);

    return (
      <div
        className="type-car type"
        style={{
          opacity: clickState ? "1" : "0",
          zIndex: clickState ? "10" : "",
          transition: "opacity 0.3s ease",
        }}
      >
        <div className="cars-main">
          {/* Show loading message */}
          {loading && <p>Loading cars...</p>}

          {/* Render cars dynamically */}
          {!loading &&
            cars.map((car) => (
              <div key={car._id} className="cars-cont">
                <div className="car-info-cont1">
                  <h1>{car.name}</h1>
                  <div>
                    <img src="charge.png" alt="Charge" />
                    <p>{car.description || "Free Supercharging"}</p>
                  </div>
                </div>

                <img
                  className={`prod ${car.imageUrl.split(".")[0]}`}
                  src={car.imageUrl}
                  alt={car.name}
                />

                <div className="car-info-cont2">
                  <div className="car-info">
                    <i className="fa-solid fa-gas-pump"></i>
                    <p>{car.fuelType}</p>

                    <img
                      src={car.transmission === "Auto" ? "auto.png" : "manual2.png"}
                      alt={car.transmission}
                    />
                    <p>{car.transmission}</p>

                    <img src="speed.png" alt="Mileage" />
                    <p>{car.mileage}</p>
                  </div>

                  <div className="buy">
                    <a href="#booking"></a>
                    <p>${Number(car.price).toLocaleString()}</p>
                    <p>Reserve</p>
                  </div>
                </div>
              </div>
            ))}

          {/* Fallback if no cars */}
          {!loading && cars.length === 0 && <p>No cars found.</p>}
        </div>

        {/* Other components */}
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

  export default Car;