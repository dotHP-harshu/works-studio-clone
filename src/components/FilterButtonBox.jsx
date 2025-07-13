import React from "react";

function FilterButtonBox({ buttons }) {
  return (
    <div className="w-full grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 max-xs:grid-cols-1 place-items-start p-4  border-t-[1px] border-t-gray-500">
      {buttons.map((button, index) => (
        <button
          key={index}
          className="text-2xl font-freight tracking-tighter capitalize hover:italic cursor-pointer outline-none border-none"
        >
          {button.name}{" "}
          <sup className="text-lg font-sans text-gray-500">
            ({button.quantity})
          </sup>
        </button>
      ))}
    </div>
  );
}

export default FilterButtonBox;
