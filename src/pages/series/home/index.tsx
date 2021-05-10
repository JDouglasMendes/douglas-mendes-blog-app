import React from "react";
import { seriesHome } from "../data/seriesHome";
import SerieItem from "./serie-item";

const SeriesHome: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          {seriesHome().map((serie, index) => {
            return (
              <SerieItem
                route={serie.route}
                subtitle={serie.subtitle}
                title={serie.title}
                ready={serie.ready}
                topics={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SeriesHome;
