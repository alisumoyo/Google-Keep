import React from "react";
import Image from "next/image";
import SideIcons from "../Atom/SideIcons";
import BulbIcon from "../../../Assets/lightbulb.svg";
import BellIcon from "../../../Assets/notifications.svg";
import EditIcon from "../../../Assets/edit.svg";
import ArchiveIcon from "../../../Assets/archive.svg";
import BinIcon from "../../../Assets/delete.svg";

const SidePart = () => {
  return (
    <>
      <div className="sider-icons">
        <div>
        <SideIcons siders={BulbIcon} />
        </div>
        <div>
        <SideIcons siders={BellIcon} />
        </div>
        <div>
        <SideIcons siders={EditIcon} />
        </div>
        <div>
        <SideIcons siders={ArchiveIcon} />
        </div>
        <div>
        <SideIcons siders={BinIcon} />
        </div>
      </div>
      
    </>
  );
};

export default SidePart;
