import React from "react";
import NavBar from "../components/Navbar";
import JoinedChats from "../components/JoinedChats";
import AvailableChats from "../components/AvailableChats";
import ViewTitle from "../components/shared/ViewTitle";

const HomeView = () => {
  return (
    <div className="content-wrapper">
      <NavBar />
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          <JoinedChats />
        </div>
        <div className="col-9 fh">
          <ViewTitle />
          <div className="container-fluid">
            <AvailableChats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
