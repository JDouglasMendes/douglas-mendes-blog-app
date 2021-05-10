import React from "react";
import { DataDDDTopics } from "../data/dataDDDTopics";

const DDDTopics: React.FC = () => {
  return (
    <div className="container">
      <div className="list-group">
        {DataDDDTopics().map((topic) => {
          return (
            <a
              href={topic.route}
              className="list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{topic.title}</h5>
                <small>{topic.date} </small>
              </div>
              <p className="mb-1">{topic.subtitle}</p>
              <small>{topic.readingTime} </small>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default DDDTopics;
