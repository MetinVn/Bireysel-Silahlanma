import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ErrorBoundary from "./GlobalError.jsx";
import "./styles.css";

const Details = lazy(() => import("./pages/Details.jsx"));
const Main = lazy(() => import("./pages/Main"));
const Error = lazy(() => import("./pages/Error.jsx"));

function App() {
  const location = useLocation();
  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes location={location} key={location.pathname}>
            <Route exact index path="/Bireysel-Silahlanma" element={<Main />} />
            <Route
              exact
              path="/Bireysel-Silahlanma/details"
              element={<Details />}
            />
            <Route exact path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </ErrorBoundary>
  );
}

export default App;
