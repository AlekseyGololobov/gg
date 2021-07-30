import React from "react";
// import {IProjectNews} from "../../../types/data";
import { News } from "./News";

import './assets/ProjectNews.scss';
// import news_logo from './assets/news_logo.png';

export const ProjectNews: React.FC = () => {
  const [news, setNews] = React.useState([
    {
      titleNes:'название новости',
      avatarNews:'news_logo',
      dataNews: '1223',
      textNews: "1 data.ts (3, 5): ожидаемый тип происходит из свойства titleNews, которое здесь объявлено в типе IntrinsicAttributes & IProjectNews & {children ?: ReactNode; }",
      description: [
        {
          titleDescriptionNews: " ОПТИМИЗАЦИЯ СТРЕЛЬБЫ И ФИКС ПОТЕРИ ПАКЕТОВ",
          textDescriptionNews: " Прежде всего, перспективное планирование однозначно определяет каждого участника как способного принимать собственные решения касаемо вывода текущих активов. Значимость этих проблем настолько очевидна.",
          numberDescriptionNews: "1",
          videoDescriptionNews: "https://www.youtube.com/embed/zv5BvGWTPTI",
          width: '560',
          height: '315',
        }
      ]
    },
    {
      titleNes:'название новости',
      avatarNews:'news_logo',
      dataNews: '4444',
      textNews: "2 data.ts (3, 5): ожидаемый тип происходит из свойства titleNews, которое здесь объявлено в типе IntrinsicAttributes & IProjectNews & {children ?: ReactNode; }",
      description: [
        {
          titleDescriptionNews: "title 3",
          textDescriptionNews: " text 3",
          numberDescriptionNews: "3 ",
          videoDescriptionNews: "",
          width: '0',
          height: '0',
        }
      ]
    },
    
  ]);


  return (
    <div>
      <div>
        <div className="scroll_news">
          {news.map((data, index) => (
            <News
              id={index}
              key={index.toString()}
              titleNews={data.titleNes}
              dataNews={data.dataNews}
              textNews={data.textNews}
              avatarNews={data.avatarNews}
              description={data.description}
              titleNes={data.titleNes}/>
          ))}
        </div>
      </div>
    </div>
  );
};
