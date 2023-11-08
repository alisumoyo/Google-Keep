import React from "react";
import styles from './Organism.css'
import NavStart from "../Molecule/NavStart";
import SearchNav from "../Molecule/SearchNav";
import LastNav from "../Molecule/LastNav";
import SidePart from "../Molecule/SidePart";
import BodySec from "../Molecule/BodySec";
import { UserProvider } from "../Context/ContextProvider";


const GoogleKeep = () => {
  return (
    <>
    <div className="navbar">
      <UserProvider >
      <NavStart />
      <SearchNav />
      <LastNav />
      </UserProvider>
      
    </div>
    <div className="section">
    <SidePart />
    <BodySec/>
    </div>
    </>
  );
};

export default GoogleKeep;
