import React, { useState, useEffect } from "react";

import classes from "./Header.module.scss";

import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Size switch demo" } };

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import Content from "../content/Content";
import Counter from "../counter/Counter";
import Media from "../media/Media";
import Location from "../location/Location";

const Header = () => {

  // const Ctx = useContext(darkModeContextApi);
  const [darkMode, setDarkMode] = useState(true);

  const darkLightHandler = () => {
    setDarkMode((prev) => !prev);

    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
  };


  useEffect(() => {

    // const myElement = document.querySelector('.myElement')
    // init(myElement, { showCursor: false, strings: ['Use with React.js!', 'Yeah!'] })

    const localStorageItem = localStorage.getItem('theme');

    if (localStorageItem === "dark") {
      setDarkMode(true);
    } else if (localStorageItem === "light") {
      setDarkMode(false);
    }

  }, [])

  // console.log(Ctx)

  console.log(darkMode);

  return (
    <section className={darkMode ? classes.dark : classes.light}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 pt-4 ps-4">
            <BsFillMoonStarsFill
              className={
                darkMode ? classes["dark-icon"] : classes["light-icon"]
              }
            />
            <Switch {...label}
              defaultChecked={darkMode}
              onClick={darkLightHandler} />
            <BsFillSunFill
              className={
                darkMode ? classes["dark-icon"] : classes["light-icon"]
              }
            />
          </div>
        </div>

        <Content darkMode={darkMode} />

        <Counter darkMode={darkMode} />

        <Media darkMode={darkMode} />

        <Location darkMode={darkMode} />

      </div>
    </section>
  );

};

export default Header;
