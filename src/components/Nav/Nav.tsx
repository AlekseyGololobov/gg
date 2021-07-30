import React from "react";
import {NavLink, Redirect, useLocation} from "react-router-dom";
import "./assets/Nav.scss";
// import { INanLink } from "../../types/data";



export const Nav: React.FC = () => {
  const [navLink, setNavLink] = React.useState([
    {
      to: "/",
      activeClassName: "selected",
      nameLink: "главная",
      completed: 1,
    },
    {
      to: "/ProjectRules",
      activeClassName: "selected",
      nameLink: "правила проекта",
      completed: 0,
    },
    {
      to: "/ProjectNews",
      activeClassName: "selected",
      nameLink: " новости проекта",
      completed: 0,
    },
    {
      to: "/Contacts",
      activeClassName: "selected",
      nameLink: "контакты",
      completed: 0,
    },
  ]);
  
  const [adrees, setAdress] = React.useState('/');
  
  const location = useLocation<Location>();
  
  
  React.useEffect(
      () => {
        console.log('New path:', location.pathname);
      },
      [location]
  )
  
  React.useEffect(() => {
    window.addEventListener("keydown",hendler);
    return () => {
      window.removeEventListener("keydown",hendler)
    }
  }, []);
  
 const hendler = (e: KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      setAdress(()=>{
        const spisok = navLink.findIndex((data,index)=> data.to === location.pathname )
        const nextIndex = spisok <= 0 ? navLink.length - 1 : spisok - 1;
        return navLink[nextIndex].to } )
    } else if (e.key === "ArrowDown") {
      setAdress(()=>{
        const spisok = navLink.findIndex((data,index)=> data.to === location.pathname )
        const nextIndex = spisok >= navLink.length - 1 ? 0 : spisok + 1;
        console.log('SPISOK = ', spisok, 'nextIndex = ',nextIndex);
        return navLink[nextIndex].to })
     
    }
  }
  
  return (
    <div className="link_nav">
    <Redirect to={adrees}> </Redirect>
        {navLink.map((data, index) => (
            <NavLink
                tabIndex={index}
                key={index}
                exact
                to={data.to}
                activeClassName={data.activeClassName} >
          <div>
            <p>{data.nameLink} </p>
          </div>
        </NavLink>
        ))}
   
    </div>
  );
};
