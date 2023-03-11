import "../styles/globals.css";

import { darkModeContextProvider } from "../components/context/darkModeContext";

const MyApp = ({ Component, pageProps }) => {
  return (

    <darkModeContextProvider>
      <Component {...pageProps} />
    </darkModeContextProvider>

  );
};

export default MyApp;
