import React, { use, useRef, useState } from "react";
import FilterButtonBox from "./FilterButtonBox";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const clientButtons = [
  { name: "American Eagle", quantity: 2 },
  { name: "Apparatus", quantity: 2 },
  { name: "Beck", quantity: 2 },
  { name: "Beyonce", quantity: 2 },
  { name: "Call of Duty", quantity: 10 },
  { name: "Calvin Klein", quantity: 2 },
  { name: "Cash by Cash App", quantity: 2 },
  { name: "Converse", quantity: 24 },
  { name: "Destroy Lonely", quantity: 2 },
  { name: "Directors Library", quantity: 2 },
  { name: "erthos", quantity: 2 },
  { name: "Fear of God", quantity: 6 },
  { name: "Ferrari", quantity: 2 },
  { name: "FUTUREVVORLD", quantity: 2 },
  { name: "Guns N' Roses", quantity: 2 },
  { name: "Heron Preston", quantity: 4 },
  { name: "Infusd", quantity: 2 },
  { name: "Jackson Wang", quantity: 2 },
  { name: "Janelle Monáe", quantity: 2 },
  { name: "John Elliott", quantity: 4 },
  { name: "Jordan Brand", quantity: 2 },
  { name: "Kith", quantity: 2 },
  { name: "Mineral Health", quantity: 4 },
  { name: "Nars", quantity: 2 },
  { name: "Netflix", quantity: 2 },
  { name: "Nicki Minaj", quantity: 2 },
  { name: "Nike", quantity: 12 },
  { name: "Public.com", quantity: 2 },
  { name: "Pusha T", quantity: 2 },
  { name: "PVH", quantity: 2 },
  { name: "Reebok", quantity: 2 },
  { name: "SKIMS", quantity: 4 },
  { name: "SKKY Partners", quantity: 2 },
  { name: "The Frost House", quantity: 2 },
  { name: "The North Face", quantity: 2 },
  { name: "U.S. Soccer", quantity: 2 },
  { name: "Versace", quantity: 2 },
  { name: "Virgin Music", quantity: 2 },
];

const sectorButtons = [
  { name: "Art", quantity: 16 },
  { name: "Beauty", quantity: 6 },
  { name: "Entertainment", quantity: 38 },
  { name: "Fashion", quantity: 36 },
  { name: "Finance", quantity: 6 },
  { name: "Food & Beverage", quantity: 6 },
  { name: "Hospitality", quantity: 4 },
  { name: "Lifestyle", quantity: 72 },
  { name: "Sports", quantity: 36 },
  { name: "Sustainability", quantity: 4 },
  { name: "Technology", quantity: 6 },
];

const serviceButtons = [
  { name: "Art Direction", quantity: 30 },
  { name: "Branding & Identity", quantity: 64 },
  { name: "Campaign", quantity: 14 },
  { name: "Creative Direction", quantity: 98 },
  { name: "Digital", quantity: 24 },
  { name: "Experiential Design", quantity: 16 },
  { name: "Motion & Animation", quantity: 14 },
  { name: "Packaging & Seeding", quantity: 34 },
  { name: "Print & Editorial Design", quantity: 10 },
  { name: "Strategy", quantity: 36 },
  { name: "Type Design", quantity: 13 },
];

function FilterRow() {
  const [buttons, setButtons] = useState([]);
  const containerRef = useRef();
  const filterButtonsBoxRef = useRef();
  const mobileFilterButtonsBoxRef = useRef();
  const { context } = useGSAP(
    () => {
      gsap.set(containerRef.current, { height: 0, opacity: 0 });
    },
    { scope: containerRef.current }
  );

  const hideFilterButtons = (e) => {
    const buttons = filterButtonsBoxRef.current.querySelectorAll("button");
    buttons.forEach((button) => button.classList.remove("bg-gray-200"));
    e.target.classList.add("bg-gray-200");
    context.add(() => {
      gsap.to(containerRef.current, { height: 0, opacity: 0, duration: 0.5 });
    });
  };

  const showFilterButtons = (array, e) => {
    setButtons([...array]);
    if (window.innerWidth < 480) {
      gsap.to(mobileFilterButtonsBoxRef.current, {
        height: window.innerHeight,
        opacity: 1,
        duration: 0.5,
      });
      mobileFilterButtonsBoxRef.current.classList.add("max-xs:flex");
      mobileFilterButtonsBoxRef.current.classList.remove("max-xs:hidden");
      return;
    }

    const buttons = filterButtonsBoxRef.current.querySelectorAll("button");
    buttons.forEach((button) => button.classList.remove("bg-gray-200"));

    e.target.classList.add("bg-gray-200");
    context.add(() => {
      gsap.to(containerRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
      });
    });
  };

  const hideMobileFilterBox = (e) => {
    const buttons = filterButtonsBoxRef.current.querySelectorAll("button");
    buttons.forEach((button) => button.classList.remove("bg-gray-200"));
    buttons[0].classList.add("bg-gray-200");
    gsap.to(mobileFilterButtonsBoxRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.5,
    });
    mobileFilterButtonsBoxRef.current.classList.remove("max-xs:hidden");
    mobileFilterButtonsBoxRef.current.classList.add("max-xs:flex");
  };

  return (
    <>
      <div
        ref={filterButtonsBoxRef}
        className="w-full flex justify-start gap-3 px-4 py-4"
      >
        <button
          onClick={(e) => hideFilterButtons(e)}
          className="px-3 py-1 text-base transition-colors duration-300 rounded-xs outline-none border-none  hover:bg-gray-200 cursor-pointer bg-gray-200"
        >
          Feature
        </button>
        <button
          onClick={(e) => showFilterButtons(sectorButtons, e)}
          className="px-3 py-1 text-base transition-colors duration-300 rounded-xs outline-none border-none  hover:bg-gray-200 cursor-pointer "
        >
          Sectors
        </button>
        <button
          onClick={(e) => showFilterButtons(clientButtons, e)}
          className="px-3 py-1 text-base transition-colors duration-300 rounded-xs outline-none border-none  hover:bg-gray-200 cursor-pointer "
        >
          Clients
        </button>
        <button
          onClick={(e) => showFilterButtons(serviceButtons, e)}
          className="px-3 py-1 text-base transition-colors duration-300 rounded-xs  hover:bg-gray-200 cursor-pointer "
        >
          Services
        </button>
      </div>

      {/* mobile filter button box */}
      <div
        ref={mobileFilterButtonsBoxRef}
        className="hidden max-xs:hidden flex-col justify-start fixed top-0 left-0 h-0 w-full bg-white z-50"
      >
        <div className="flex justify-end px-4 py-2">
          <button
            onClick={(e) => hideMobileFilterBox(e)}
            className="text-base outline-none bg-transparent cursor-pointer border-none"
          >
            Close
          </button>
        </div>
        <div className="w-full h-fit flex justify-start overflow-scroll">
          <FilterButtonBox buttons={buttons} />
        </div>
      </div>
      {/* mobile filter button box */}

      {/* desktop filter button box */}
      <div
        ref={containerRef}
        className="overflow-hidden h-auto px-4 max-xs:hidden"
      >
        <FilterButtonBox buttons={buttons} />
      </div>
      {/* desktop filter button box */}
    </>
  );
}

export default FilterRow;
