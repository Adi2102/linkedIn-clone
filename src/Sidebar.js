import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash"> # </span>
      <p> {topic} </p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1642706879731-c671fb881d04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt=""
        />
        <Avatar className="sidebar_avatar" src={user.photoUrl}>
          {user.displayName[0]}
        </Avatar>
        <h2> {user.displayName} </h2>
        <h4> {user.email} </h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed your profile</p>
          <p className="sidebar_statNumber"> 12 </p>
        </div>
        <div className="sidebar_stat">
          <p>Connections</p>
          <p className="sidebar_statNumber"> 876 </p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("javascript")}
        {recentItem("programming")}
        {recentItem("webdeveloper")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("frontend")}
      </div>
    </div>
  );
}

export default Sidebar;
