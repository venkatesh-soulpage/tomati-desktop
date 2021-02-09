import React from "react";
import { MainHeader, Works, Faq, Features, MainSection } from "./components";

function Home() {
  return (
    <div className="container-fluid bg-light p-0 bg-white">
      <MainHeader />
      <Works />
      <MainSection />
      <Features />
      <Faq />
    </div>
  );
}

export default Home;
