import React, { useState } from "react";
import SideMenu from "../components/sideMenu/SideMenu";

const Dashboard = () => {
  const [menu, setMenu] = useState(true);
  const menuToggle = () => {
    if (menu !== true) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  console.log(menu);
  return (
    <div>
      <div className="toggle-menu-btn">
        <i class="bi bi-arrow-left-square-fill" onClick={menuToggle}></i>
      </div>
      {menu === true && <SideMenu />}
    </div>
  );
};

export default Dashboard;
