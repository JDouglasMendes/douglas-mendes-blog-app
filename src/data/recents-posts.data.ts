export interface RecentPost {
  title: string;
  subTitle: string;
  minutes: number;
  date: String;
  rota: string | undefined;
}
export const getRecentsPosts: RecentPost[] = [
  {
    title: "Essencial Git",
    subTitle: "Comandos, dicas e casos reais",
    minutes: 5,
    date: "06/05/2021",
    rota: "/",
  },
];
