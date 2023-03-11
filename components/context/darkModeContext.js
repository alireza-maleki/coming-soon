import React, { createContext, useState, useEffect } from "react";

const darkModeContextApi = createContext({
  darkMode: true,
  setDarkMode: () => { },
  darkLightHandler: () => { },
});


export function darkModeContextProvider(props) {


  const [darkMode, setDarkMode] = useState();


  const darkLightHandler = () => {
    setDarkMode((prev) => !prev);

    console.log('into handler');
  };


  useEffect(() => {

    console.log('into useffect');

    const localItem = localStorage.getItem("theme");

    if (localItem && localItem == "dark") {
      setDarkMode(true);
    } else if (localItem == "light") {
      setDarkMode(false);
    }
  }, []);

  return (
    <darkModeContextApi.Provider
      value={{
        darkMode: darkMode,
        setDarkMode: setDarkMode,
        darkLightHandler: darkLightHandler,
      }}
    >
      {props.children}
    </darkModeContextApi.Provider>
  );
}

export default darkModeContextApi;
