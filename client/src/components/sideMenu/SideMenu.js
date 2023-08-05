import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

const SideMenu = () => {
  return (
    <div className="bg-dark side-bar text-white">
      <Row>
        <div>
          <div className="user-info">
            {/* <p>User Information</p> */}
            <img
              className="user_image"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
              alt="user-profile"
            ></img>
            <p>User Name</p>
          </div>
        </div>
      </Row>
      <Row>
        <div className="text-center p-5 mt-5">
          <div>
            <p>Books</p>
          </div>
          <div>
            <p>My Books</p>
          </div>
          <div>
            <p>Transaction</p>
          </div>
          <div>
            <p>Add a Book</p>
          </div>
          <div>
            <p>Update Profile</p>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default SideMenu;
