import React from "react";

import { IDescriptionRulesProject } from "../../../types/data";

import './assets/Rul.scss';


export const Rules: React.FC<IDescriptionRulesProject> = (props) => (
  <details>
    <summary> {props.headingDescriptionRulesProject} </summary>
    <div>
      {props.point.map((data, index) => (
        <div className="wr-descriptionn" key={index}>
          <div className="number_optimizationn">
            <span> {index + 1}</span>
            <p className="descriptionn">{data.titleDescriptionRulesProject}</p>
          </div>
          <div>
            <p className="text_descriptionn">
              {data.textDescriptionRulesProject}
            </p>
          </div>
        </div>
      ))}
    </div>
  </details>
);
