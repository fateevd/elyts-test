import React, {FC} from 'react';
import news from '../news.json';
import {NewsCard} from "../component";

const News: FC = () => {
  return (
    <div className="container">
      <div className="news">
        <h2 className="news-title">Новости</h2>
        {news.map((item) =>
          <React.Fragment key={item.id}>
            <NewsCard {...item}/>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default News;