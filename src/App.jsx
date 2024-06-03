import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Details from "./components/Details";
import Main from "./pages/Main";
import Error from "./pages/Error.jsx";
import "./styles.css";
function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact index path="/Bireysel-Silahlanma" element={<Main />} />
          <Route exact path="/details" element={<Details />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
