import React from "react";
import { MainHeader, Works, Faq, Features, MainSection } from "./components";

function Home() {
  React.useEffect(() => window.scroll(0, 0), []);
  return (
    <div
      className="container-fluid p-0 mt-5"
      style={{ backgroundColor: "#F5F6F9" }}
    >
      <MainHeader />
      <Works />
      <MainSection />
      <Features />
      <Faq />
    </div>
  );
}

export default Home;
