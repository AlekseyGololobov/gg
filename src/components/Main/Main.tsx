import React from "react";
import { Route, useLocation} from "react-router-dom";


import "./assets/Main.scss";

import { Contacts } from "./Contacts/Contacts";
import { ProjectNews } from "./ProjectNews/ProjectNews";
import { ProjectRules } from "./ProjectRules/ProjectRules";
import { Nav } from "../Nav/Nav";
import { IsDownload } from "./IsDownload/IsDownload";
import { IProd } from "../../types/data";

import warning from "./assets/warning.svg";
import {BgCircleAnim} from "./BgCircleAnim";
import {Video} from "./Video/Video";


export const Main: React.FC = () => {

  const location = useLocation<Location>();
  

  React.useEffect(
      () => {
        console.log('New path:', location.pathname);
      },
      [location]
  )
  
return (
<>
   <Video/>
    <div className="main"  style={{background: location.pathname !== '/' ?  "rgba(0,0,0, 0.2)" : ''}}>
     
      <div className="title-menu">
        <h1>
          <span className='welcome'>добро пожаловать</span>
          <span className='v'>на advance five</span>
        </h1>
        <div>
          <img src={warning} alt="sss" />
          <p>
            ПОКА ЗАГРУЖАЮТСЯ ДАННЫЕ ИГРЫ, ПОЧИТАЙТЕ
            <br />
            НАШИ ПРАВИЛА И ОЗНАКОМЬТЕСЬ С НОВОСТЯМИ
            <br />
            ПРОЕКТА
          </p>
        </div>
      </div>
      <div className="wr-link">
        <Nav />
        <Route path="/"/>
        <Route path="/ProjectNews" component={ProjectNews} />
        <Route path="/ProjectRules" component={ProjectRules} />
        <Route path="/Contacts" component={Contacts} />
      </div>
      <IsDownload />
    </div>
</>

);
}
