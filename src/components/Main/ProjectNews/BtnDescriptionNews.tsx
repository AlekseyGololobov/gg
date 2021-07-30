import React from "react";

import {IBtnDescriptionNews} from "../../../types/data";
import "./assets/BtnDescriptionNews.scss";

export const BtnDescriptionNews: React.FC<IBtnDescriptionNews> = (props) => (
  <div className="wr-description">
    <div className="number_optimization">
      <span> {props.numberDescriptionNews}</span>
      <p className="description">{props.titleDescriptionNews}</p>
    </div>
    <div>
      <p className="text_description">{props.textDescriptionNews}</p>
    </div>
  </div>
);
