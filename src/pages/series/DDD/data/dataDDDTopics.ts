export interface IDDDTopics {
  title: string;
  subtitle: string;
  date: string;
  readingTime: string;
  route: string;
  ready?: boolean;
}
export const DataDDDTopics = (): IDDDTopics[] => [
  {
    title: `O que é DDD? Por que devo utilizar
    ? Quando devo utilizar ?`,
    subtitle: `Antes de sair criando Entities, Values Objects, que tal verificar se DDD realmente pode ajudar seu projeto?`,
    date: `11/05/2021`,
    readingTime: `9 minutos de leitura`,
    route: `/ddd-introduction`,
  },
  {
    title: `Linguagem Ubíqua`,
    subtitle: ``,
    date: `-`,
    readingTime: `-`,
    route: `/#`,
  },
  {
    title: `Contexto Delimitado`,
    subtitle: ``,
    date: `-`,
    readingTime: `-`,
    route: `/#`,
  },
  {
    title: `Mapas de Contexto`,
    subtitle: ``,
    date: `-`,
    readingTime: `-`,
    route: `/#`,
  },
  {
    title: `Domain`,
    subtitle: ``,
    date: `-`,
    readingTime: `-`,
    route: `/#`,
  },
  {
    title: `Entidades & Aggregados`,
    subtitle: ``,
    date: `-`,
    readingTime: `-`,
    route: `/#`,
  },
  {
    title: `Objetos de Valor`,
    subtitle: ``,
    date: `-`,
    readingTime: `-`,
    route: `/#`,
  },
  {
    title: `Domain Services`,
    subtitle: ``,
    date: `-`,
    readingTime: `-`,
    route: `/#`,
  },
  {
    title: `Fabricas`,
    subtitle: ``,
    date: `-`,
    readingTime: `-`,
    route: `/#`,
  },
  {
    title: `Repository`,
    subtitle: ``,
    date: `-`,
    readingTime: `-`,
    route: `/#`,
  },
  {
    title: `Camada anti corrupção`,
    subtitle: ``,
    date: `-`,
    readingTime: `-`,
    route: `/#`,
  },
];
