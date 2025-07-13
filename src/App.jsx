import React, { useEffect, useRef } from "react";
import Page1 from "./components/Page1";
import FilterRow from "./components/FilterRow";
import FeaturePage from "./components/FeaturePage";
import Footer from "./components/Footer";
import Scroll from "./locomotive/Scroll";

function App() {
  const container = useRef(null);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    let scrollCouter = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 2600);

    return () => {
      clearTimeout(scrollCouter);
    };
  }, []);

  return (
    <Scroll>
      <div
        ref={container}
        className="w-full h-full overflow-hidden selection:bg-[#F5E31A]"
      >
        <Page1 />
        <FilterRow />
        <FeaturePage />
        <Footer />
      </div>
    </Scroll>
  );
}

export default App;
