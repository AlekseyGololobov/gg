export interface IProjectNews {
  id: number;
  titleNews: string;
  dataNews: string;
  textNews: string;
}

export interface IBtnDescriptionNews {
  id: number;
  numberDescriptionNews: string;
  titleDescriptionNews: string;
  textDescriptionNews: string;
  videoDescriptionNews?: string;
}

export interface IDescriptionRulesProject {
  id: number;
  headingDescriptionRulesProject: string;
  point: {
    titleDescriptionRulesProject: string;
    textDescriptionRulesProject: string;
  }[];
}

export interface ITestNews {
  titleNes: string ,
  id: number;
  avatarNews: string,
  textNews: string,
  titleNews: string,
  dataNews: string,
  description: {
      videoDescriptionNews: string,
      titleDescriptionNews: string,
      textDescriptionNews: string,
      numberDescriptionNews: string,
      width: string,
      height: string,
    }[];
}

export interface IContactComponent {
  id: number;
  imgUser: string;
  nameUser: string;
  actionUser: string;
  online: boolean;
}

export interface INanLink {
  to: string;
  activeClassName: string;
  nameLink: string;
  completed: number;
}

export interface IProd {
  width: number;
  percent: number;
}
