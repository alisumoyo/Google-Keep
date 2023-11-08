import React from "react";
import Image from "next/image";
import styles from "./Icons.css";

const Icon = ({svgs}) => {
  return (
    <div className="Icons">
      <Image src={svgs} />
    </div>
  );
};

export default Icon;