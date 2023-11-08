import Image from "next/image";
import React from "react";
import styles from './Molecule.css'
import Icon from "../Atom/Icon";
import hamIcon from "../../../Assets/menu.svg";
import images from "../../..//Assets/keep.png";

const NavStart = () => {
  return (
    <div className="Left-nav">
      <Icon svgs={hamIcon} />
      <Image className="keep-logo" src={images}/>
      <p>Keep</p>
    </div>
  );
};

export default NavStart;
