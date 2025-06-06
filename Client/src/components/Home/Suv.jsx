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

const Suv = (props) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get("http://localhost:6060/api/suvs/getall");
        if (res.data.success) {
          setCars(res.data.cars);
        } else {
          setError("Failed to load cars.");
        }
      } catch (err) {
        setError("Error fetching cars. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <div
      style={{
        opacity: props.clickState ? "1" : "0",
        zIndex: props.clickState ? "10" : "",
      }}
      className="type-suv type"
    >
      <div className="cars-main">
        {loading && <p>Loading cars...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading &&
          !error &&
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
                  <p>{Number(car.price).toLocaleString()}$</p>
                  <p>Reserve</p>
                </div>
              </div>
            </div>
          ))}

        {/* Fallback if no cars */}
        {!loading && !error && cars.length === 0 && <p>No cars found.</p>}
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

export default Suv;