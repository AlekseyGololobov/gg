import React from "react";
import { Contact } from "./assets/Contact";

import ava1 from './assets/ava11.png';
import ava2 from './assets/ava22.png';


import './assets/Contact.scss';

export const Contacts: React.FC = () => {

  const [userState, setUserState] = React.useState([
    {
      imgUser    :ava1,
      nameUser   :'1Vasaya Slivkin',
      actionUser :'Нюхает бэбру',
      online     :true,
    },
    {
      imgUser    :ava2,
      nameUser   :'2Slavik Bochkin',
      actionUser :'Тикает съ городу',
      online     :false,
    },
    {
      imgUser    :ava1,
      nameUser   :'Vasaya Slivkin',
      actionUser :'Нюхает бэбру',
      online     :false,
    },
    {
      imgUser    :ava2,
      nameUser   :'Slavik Bochkin',
      actionUser :'Тикает съ городу',
      online     :false,
    },
    {
      imgUser    :ava1,
      nameUser   :'Vasaya Slivkin',
      actionUser :'Нюхает бэбру',
      online     :false,
    },
    {
      imgUser    :ava2,
      nameUser   :'Slavik Bochkin',
      actionUser :'Тикает съ городу',
      online     :true,
    },
    {
      imgUser    :ava1,
      nameUser   :'Vasaya Slivkin',
      actionUser :'Нюхает бэбру',
      online     :false,
    },
    {
      imgUser    :ava2,
      nameUser   :'Slavik Bochkin',
      actionUser :'Тикает съ городу',
      online     :true,
    },
    {
      imgUser    :ava1,
      nameUser   :'Vasaya Slivkin',
      actionUser :'Нюхает бэбру',
      online     :false,
    },
    {
      imgUser    :ava2,
      nameUser   :'Slavik Bochkin',
      actionUser :'Тикает съ городу',
      online     :true,
    },
    {
      imgUser    :ava1,
      nameUser   :'Vasaya Slivkin',
      actionUser :'Нюхает бэбру',
      online     :false,
    },
    {
      imgUser    :ava2,
      nameUser   :'Slavik Bochkin',
      actionUser :'Тикает съ городу',
      online     :true,
    },
    {
      imgUser    :ava1,
      nameUser   :'Vasaya Slivkin',
      actionUser :'Нюхает бэбру',
      online     :false,
    },
    {
      imgUser    :ava2,
      nameUser   :'Slavik Bochkin',
      actionUser :'Тикает съ городу',
      online     :true,
    },
    {
      imgUser    :ava1,
      nameUser   :'Vasaya Slivkin',
      actionUser :'Нюхает бэбру',
      online     :false,
    },
    {
      imgUser    :ava2,
      nameUser   :'Slavik Bochkin',
      actionUser :'Тикает съ городу',
      online     :true,
    },
    {
      imgUser    :ava1,
      nameUser   :'Vasaya Slivkin',
      actionUser :'Нюхает бэбру',
      online     :false,
    },
    {
      imgUser    :ava2,
      nameUser   :'Slavik Bochkin',
      actionUser :'Тикает съ городу',
      online     :true,
    },
  ]
    .sort((a, b) => Number(b.online) - Number(a.online)));

  return (
    <div className="scroll_news">
      <div className="user_contacts">
        {userState.map((data, index) => (
          <Contact
            key={index}
            id={index}
            imgUser={data.imgUser}
            nameUser={data.nameUser}
            actionUser={data.actionUser}
            online={data.online}
          />
        ))}
      </div>
    </div>
  );
};
