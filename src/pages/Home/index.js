import React from "react";
import { MainHeader, Works, Faq, Features, MainSection } from "./components";

function Home() {
  React.useEffect(() => window.scroll(0, 0), []);
  return (
    <div>
      <MainHeader />
      <Works />
      <MainSection />
      <Features />
      <Faq />
    </div>
  );
}

export default Home;
