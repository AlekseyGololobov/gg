import React from "react";
import { ITestNews } from "../../../types/data";

import news_logo from './assets/news_logo.png';
import "./assets/ProjectNews.scss";



export const News: React.FC<ITestNews> = (props) => {
    
    
 
    
    const [showResults, setShowResults] = React.useState(false);
    const handlerBtnNews = () => {
     setShowResults(true);
     console.log('qq click')
     // setVideo(true);
   };
    return (
        <div>
             <div className="wr">
             <div className="in">
                 <img src={news_logo} alt="news" />
                 <div className="news">
                    <div className="st">
                         <p>{props.titleNes}</p>
                         <p>{props.dataNews}</p>
                    </div>
                     <p className="text_news">{props.textNews}</p>
                    <button onClick={handlerBtnNews}>ПОДРОБНЕЕ</button>
                </div>
             </div>
             </div>
                <div>
                    { showResults ? props.description.map((data,index)=>{
                        return  (
                        <div className="wr-description wr">
                            <div className="number_optimization">
                               <div>
                                    <span>{index + 1}</span>
                                   <span className='titleDescriptionNews'> {data.titleDescriptionNews}</span>
                               </div>
                                {/*<p className="description">что-тут?</p>*/}
                               <div className='text_description'>
                                    {data.textDescriptionNews}
                                   {data.numberDescriptionNews}
                                  </div>
                                    <iframe
                                         width={data.width}
                                         height={data.height}
                                         src={data.videoDescriptionNews}
                                         title="YouTube video player"
                                         frameBorder="0"
                                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                         allowFullScreen
                                    />
                                <div>
                    <p className="text_description">33</p>
                </div>
                            </div>
                        
             </div>)
             }): null
             }
      </div>
        </div>
  )
}




// import React from "react";
// import { BtnDescriptionNews } from "./BtnDescriptionNews";
//
// // import {ProjectNews} from "./ProjectNews";
// import { IProjectNews } from "../../../types/data";
// import "./assets/ProjectNews.scss";
//
// import news_logo from './assets/news_logo.png';
// // import {Search} from "./test";
//
// export const News: React.FC<IProjectNews> = (props) => {
//   const [titleDescriptionNews, setTitleDescriptionNews] = React.useState([
//     {
//       titleDescriptionNews: " ОПТИМИЗАЦИЯ СТРЕЛЬБЫ И ФИКС ПОТЕРИ ПАКЕТОВ",
//       textDescriptionNews:
//         "1 Прежде всего, перспективное планирование однозначно определяет каждого участника как способного принимать собственные решения касаемо вывода текущих активов. Значимость этих проблем настолько очевидна.",
//       numberDescriptionNews: "1",
//     },
//     {
//       titleDescriptionNews: " ОПТИМИЗАЦИЯ СТРЕЛЬБЫ И ФИКС ПОТЕРИ ПАКЕТОВ",
//       textDescriptionNews:
//         "2 Прежде всего, перспективное планирование однозначно определяет каждого участника как способного принимать собственные решения касаемо вывода текущих активов. Значимость этих проблем настолько очевидна.",
//       numberDescriptionNews: "2",
//     },
//     {
//       videoDescriptionNews: "https://www.youtube.com/embed/zv5BvGWTPTI",
//       titleDescriptionNews: "title 3",
//       textDescriptionNews: " text 3",
//       numberDescriptionNews: "3 ",
//     },
//   ]);
//   const [showResults, setShowResults] = React.useState(false);
//   const handlerBtnNews = () => {
//     setShowResults(true);
//     setVideo(true);
//   };
//
//   const [video, setVideo] = React.useState(false);
//   // const handlerBtnVideo = () => setVideo(true);
//   return (
//     <div className="wr">
//       <div className="in">
//         <img src={news_logo} alt="news" />
//         <div className="news">
//           <div className="st">
//             <p>{props.titleNews}</p>
//             <p>{props.dataNews}</p>
//           </div>
//           <p className="text_news">{props.textNews}</p>
//           <button onClick={handlerBtnNews}>ПОДРОБНЕЕ</button>
//         </div>
//       </div>
//
//       {showResults ? (
//         <div className="description_news">
//           {titleDescriptionNews.map((data, index) => {
//             // console.log('data btn  = ', data)
//             console.log(
//               "тут есть видео ? = ",
//               Object.entries(data).map(([key, value]) =>
//                 key.search("videoDescriptionNews")
//               ).length > 3
//                 ? data
//                 : "тут нет видио"
//             );
//
//             if (
//               Object.entries(data).map(([key, value]) =>
//                 key.search("videoDescriptionNews")
//               ).length > 3 &&
//               data.videoDescriptionNews !== ""
//             ) {
//               return (
//                 <>
//                   <BtnDescriptionNews
//                     id={index}
//                     key={index.toString()}
//                     numberDescriptionNews={data.numberDescriptionNews}
//                     titleDescriptionNews={data.titleDescriptionNews}
//                     textDescriptionNews={data.textDescriptionNews}
//                   />
//
//                   <iframe
//                     width="560"
//                     height="315"
//                     src={data.videoDescriptionNews}
//                     title="YouTube video player"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   />
//                 </>
//               );
//             }
//             return (
//               <BtnDescriptionNews
//                 id={index}
//                 key={index.toString()}
//                 numberDescriptionNews={data.numberDescriptionNews}
//                 titleDescriptionNews={data.titleDescriptionNews}
//                 textDescriptionNews={data.textDescriptionNews}
//               />
//             );
//           })}
//
//           {/*              { video ? <div className="fr"> */}
//           {/*                  { titleDescriptionNews.map((data,index) => { */}
//           {/*                      // console.log('data = 1',data) */}
//
//           {/*                      if(data.videoDescriptionNews) { */}
//           {/* // console.log('data = 2',data) */}
//
//           {/*                      } */}
//
//           {/*                  })} */}
//           {/*            </div> : null } */}
//         </div>
//       ) : null}
//     </div>
//   );
// };
