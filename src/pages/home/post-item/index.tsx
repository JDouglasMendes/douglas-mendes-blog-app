import React from "react";
import { RecentPost } from "../../../data/recents-posts.data";

const PostItem: React.FC<RecentPost> = (prop: RecentPost) => {
  return (
    <div>
      <div className="post-preview">
        <a href={prop.rota}>
          <h2 className="post-title">{prop.title}</h2>
          <h3 className="post-subtitle">{prop.subTitle}</h3>
        </a>
        <p className="post-meta">
          {prop.minutes} minutos de leituras, {prop.date}
        </p>
      </div>
      <hr />
    </div>
  );
};

export default PostItem;
