import React from "react";
import { ISeriesHome } from "../../data/seriesHome";

const SerieItem: React.FC<ISeriesHome> = (prop: ISeriesHome) => {
  return (
    <div>
      <div className="post-preview">
        <a href={prop.route}>
          <h2 className="post-title">{prop.title}</h2>
          <h3 className="post-subtitle">{prop.subtitle}</h3>
          <p className="post-meta">
            {prop.ready} de {prop.topics} topicos escritos.
          </p>
        </a>
      </div>
      <hr />
    </div>
  );
};

export default SerieItem;
