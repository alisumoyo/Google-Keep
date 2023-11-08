import Image from "next/image";
import styles from "./Icons.css";
import React, { useEffect } from "react";

function BodyIcons(Bodyicon) {

useEffect(() => {
  console.log('asdasdasdasd')
},[])

  return (

    

    <div className="body-part-icons">
       <Image src={Bodyicon}/>
    </div>
  );
}

export default BodyIcons;
