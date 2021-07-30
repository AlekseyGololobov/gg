import React from "react";

import { IDescriptionRulesProject } from "../../../types/data";
import { Rules } from "./Rulse";

import "./assets/ProjectRules.scss";

export const ProjectRules: React.FC<IDescriptionRulesProject> = () => {
  const [titleDescriptionNews, setTitleDescriptionNews] = React.useState([
    {
      headingDescriptionRulesProject: "headingDescriptionRulesProject",
      point: [
        {
          titleDescriptionRulesProject: "ПОЛОЖЕНИЕ ОБ ИГРОКАХ",
          textDescriptionRulesProject: "Прежде всего, перспективное планирование однозначно определяет каждого участника как способного принимать собственные решения касаемо вывода текущих активов. Значимость этих проблем настолько очевидна."
        }
      ]
    },
    {
      headingDescriptionRulesProject: "headingDescriptionRulesProject",
      point: [
        {
          titleDescriptionRulesProject: "titleDescriptionRulesProject",
          textDescriptionRulesProject: "textDescriptionRulesProject"
        }
      ]
    },
    {
      headingDescriptionRulesProject: "headingDescriptionRulesProject",
      point: [
        {
          titleDescriptionRulesProject: "titleDescriptionRulesProject",
          textDescriptionRulesProject: "textDescriptionRulesProject"
        }
      ]
    },
    {
      headingDescriptionRulesProject: "headingDescriptionRulesProject",
      point: [
        {
          titleDescriptionRulesProject: "titleDescriptionRulesProject",
          textDescriptionRulesProject: "textDescriptionRulesProject"
        },
        {
          titleDescriptionRulesProject: "titleDescriptionRulesProject",
          textDescriptionRulesProject: "textDescriptionRulesProject"
        }
      ]
    }
  ]);
  
  return (
    <div className = "scroll_news" >
      <div className = "accordion" >
        {titleDescriptionNews.map((data, index) => (
          <div >
            <Rules
                id = {index}
                key = {index}
                headingDescriptionRulesProject = {data.headingDescriptionRulesProject}
                point = {data.point} />
          </div >
        ))}
      </div >
    </div >
  );
};
