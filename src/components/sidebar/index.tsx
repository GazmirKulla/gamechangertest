import React from "react";
import SideBarTitle from "./style";
import { useSelector, RootStateOrAny } from "react-redux";

const SideBar = () => {
  const { selectedCountry } = useSelector(
    (state: RootStateOrAny) => state.weather
  );

  return (
    <SideBarTitle>
      <div className="nav">
        <div className="logo">
          <img
            src="https://img.icons8.com/small/96/ffffff/cloud.png"
            alt="logo"
            width={70}
          />
        </div>
        <h1>GC Weather</h1>

        {selectedCountry && (
          <div className="links">
            <img
              src="https://img.icons8.com/glyph-neue/64/ffffff/marker.png"
              alt="location"
              width={20}
            />
            <div>{selectedCountry}</div>
          </div>
        )}
      </div>
    </SideBarTitle>
  );
};

export default SideBar;
