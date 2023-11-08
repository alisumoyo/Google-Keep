import React from "react";
import Image from "next/image";
import styles from "./Icons.css";

const SideIcons = ({ siders, text }) => {
  return (
    <div className="siders-icons">
      <div className="icons-sider">
        <Image src={siders} />
      </div>
      <div>
      <p>Notes</p>
      </div>
    </div>
  );
};

export default SideIcons;
