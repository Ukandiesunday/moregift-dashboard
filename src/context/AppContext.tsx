import React, { useContext, useState } from "react";
import { createContext } from "react";

const AppContext = createContext({});

export const useGlobalContext: any = () => useContext(AppContext);
const AppProvider = ({ children }: any) => {
  const [qrCode, setQrCode] = useState(false);
  const [theme, setTheme]: any = useState("light");
  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <AppContext.Provider value={{ setQrCode, qrCode, themeToggle, theme }}>
      <div className={theme === "light" ? "light " : "dark"}>{children}</div>
    </AppContext.Provider>
  );
};

export default AppProvider;
