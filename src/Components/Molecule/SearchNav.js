import Image from "next/image";
import React from "react";
import Icon from "../Atom/Icon";
import styles from './Molecule.css'
import searchIcon from "../../../Assets/search.svg";
import RefreshIcon from "../../../Assets/refresh.svg";
import GridIcon from "../../../Assets/view.svg";
import SettingIcon from "../../../Assets/settings.svg";

const SearchNav = () => {
  return (
    <div className="search-nav">
      <div className="search-part">
        <Icon svgs={searchIcon} />
        <input className="search-input" type="search" placeholder="Search" />
      </div>
      <div className="icon-part">
        <Icon svgs={RefreshIcon} />
        <Icon svgs={GridIcon} />
        <Icon svgs={SettingIcon} />
      </div>
    </div>
  );
};

export default SearchNav;
