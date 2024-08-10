import React, { Suspense, lazy } from "react";

// Critical components (loaded immediately)
const Header = lazy(() => import("../components/Header"));

// Non-critical components (loaded when needed)
const Hero = lazy(() => import("../components/Hero"));
const USAMap = lazy(() => import("../components/usaMap"));
const Footer = lazy(() => import("../components/Footer"));

function Main() {
  return (
    <>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>Loading Hero...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading Map...</div>}>
        <USAMap />
      </Suspense>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default Main;
