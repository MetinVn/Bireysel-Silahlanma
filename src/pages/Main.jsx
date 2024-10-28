import React, { Suspense, lazy } from "react";

const Header = lazy(() => import("../components/Header"));
const Hero = lazy(() => import("../components/Hero"));
const Map = lazy(() => import("../components/Map"));
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
        <Map />
      </Suspense>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default Main;
