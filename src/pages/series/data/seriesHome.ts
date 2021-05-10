import { DataDDDTopics } from "../DDD/data/dataDDDTopics";

export interface ISeriesHome {
  title: string;
  subtitle: string;
  route: string;
  topics: number;
  ready: number;
}
export const seriesHome = (): ISeriesHome[] => [
  {
    title: "Domain Driven Design",
    subtitle: `Abordagem prática e direta dos principais tópicos do DDD.`,
    route: `series-ddd-topics`,
    topics: DataDDDTopics().length,
    ready: DataDDDTopics().filter((topic) => topic.ready).length,
  },
];
