import { createContext, useContext, useState } from "react";
import trackingData from "./data.json";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState(trackingData);
  const [currentIndex, setCurrentIndex] = useState(0);

  //   const openSidebar = () => {
  //     setIsSidebarOpen(true);
  //   };

  return (
    <AppContext.Provider value={{ data, currentIndex }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
