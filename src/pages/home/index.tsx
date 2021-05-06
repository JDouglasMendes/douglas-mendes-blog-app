import React, { useEffect, useState } from "react";
import PostItem from "./post-item/index";
import { getRecentsPosts, RecentPost } from "./../../data/recents-posts.data";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<RecentPost[]>([]);
  useEffect(() => {
    setPosts(getRecentsPosts);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          {posts.map((post) => {
            return (
              <PostItem
                date={post.date}
                minutes={post.minutes}
                rota={post.rota}
                subTitle={post.subTitle}
                title={post.title}
              />
            );
          })}
          <div className="clearfix">
            <a className="btn btn-primary float-right" href="#!">
              Posts Antigos →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
