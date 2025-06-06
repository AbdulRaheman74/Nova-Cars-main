// MyProvider.js
import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isReserveClicked, setIsReserveClicked] = useState(false);

  const handleButtonClick = () => {
    setTimeout(() => {
      setIsButtonClicked(!isButtonClicked);
    }, 1000);
  };

  const handleLoading = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  const handleReserve = () => {
    setIsButtonClicked(!isButtonClicked);
    setIsReserveClicked(true);

    setTimeout(() => {
      setIsReserveClicked(false);
    }, 10000);
  };

  return (
    <MyContext.Provider
      value={{
        isButtonClicked,
        handleButtonClick,
        loading,
        handleLoading,
        handleCancel,
        isReserveClicked,
        handleReserve,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
