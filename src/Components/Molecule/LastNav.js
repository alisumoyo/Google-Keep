
import React from "react";
import Icon from "../Atom/Icon";
import styles from "./Molecule.css";
import GoogleApps from "../../../Assets/apps.svg";
import UserIcon from "../../../Assets/account.svg";
import Link from "next/link";

const LastNav = () => {
  return (
    <div className="Last-nav">
      <div className="icone-container">
        <Icon svgs={GoogleApps} className="icone" />
        <div className="tooltip">Hello, World!</div>
      </div>
      <Link href={'/login'}>
        <div className="icone-container">
          <Icon svgs={UserIcon} />
          <div className="tooltip">Hello, World!</div>
        </div>
      </Link>
    </div>
  );
};

export default LastNav;



// import Image from "next/image";
// import React from "react";
// import Icon from "../Atom/Icon";
// import styles from "./Molecule.css";
// import GoogleApps from "../../../Assets/apps.svg";
// import UserIcon from "../../../Assets/account.svg";
// import Link from "next/link";
// const LastNav = () => {
//   return (
//     <div className="Last-nav">
//       <Icon svgs={GoogleApps}  className="icone"/>
//      <Link href={'/login'}> <Icon svgs={UserIcon} /> </Link>
//     </div>
//   );
// };

// export default LastNav;
