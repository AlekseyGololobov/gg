import React from "react";
import { IContactComponent } from "../../../../types/data";

export const Contact: React.FC<IContactComponent> = (props) => (
  <div className="user-wr">
    <div className="user-in">
      <div className="imgUser">
        <div
          className={`${
            props.online ? "top__circle_online" : "top_circle_off"
          }`}
        />
        <img src={props.imgUser} alt="ava" />
      </div>
      <p className="nameUser">{props.nameUser}</p>
      <p className={`${props.online ? "actionUser_online" : "actionUser_off"}`}>
        {props.actionUser}
      </p>
      <div
        className={`${props.online ? "bot__bord_online" : "bot__bord_off"}`}
      />
    </div>
  </div>
);
