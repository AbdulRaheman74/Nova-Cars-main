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

const Truck = ({ clickState }) => {
  const [trucks, setTrucks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrucks = async () => {
      try {
        const response = await axios.get("http://localhost:6060/api/tracks/getall");
        console.log("Fetched Trucks:", response.data.cars);
        setTrucks(response.data.cars);
        console.log(setTrucks)
      } catch (error) {
        console.error("Failed to fetch truck data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrucks();
  }, []);

  return (
    <div
      className="type-truck type"
      style={{
        opacity: clickState ? "1" : "0",
        zIndex: clickState ? "10" : "",
        transition: "opacity 0.3s ease",
      }}
    >
      <div className="cars-main">
        {/* Loading State */}
        {loading && <p>Loading trucks...</p>}

        {/* Render Trucks Dynamically */}
        {!loading &&
          trucks.map((truck) => (
            <div key={truck._id} className="cars-cont">
              <div className="car-info-cont1">
                <h1>{truck.name}</h1>
                <div>
                  <img src="charge.png" alt="Charge" />
                  <p>{truck.description || "Free Supercharging"}</p>
                </div>
              </div>

              <img
                className={`prod ${truck.imageUrl.split(".")[0]}`}
                src={truck.imageUrl}
                alt={truck.name}
              />

              <div className="car-info-cont2">
                <div className="car-info">
                  <i className="fa-solid fa-gas-pump"></i>
                  <p>{truck.fuelType}</p>

                  <img
                    src={truck.transmission === "Auto" ? "auto.png" : "manual2.png"}
                    alt={truck.transmission}
                  />
                  <p>{truck.transmission}</p>

                  <img src="speed.png" alt="Mileage" />
                  <p>{truck.mileage}</p>
                </div>

                <div className="buy">
                  <a href="#booking"></a>
                  <p>${Number(truck.price).toLocaleString()}</p>
                  <p>Reserve</p>
                </div>
              </div>
            </div>
          ))}

        {/* Fallback if no trucks */}
        {!loading && trucks.length === 0 && <p>No trucks found.</p>}
      </div>

      {/* Other Components */}
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