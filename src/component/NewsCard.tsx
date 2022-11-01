import React, {FC} from 'react';

type NewsCardProps = {
  id: number,
  author: string | null,
  title: string,
  description: string,
  url: string,
  urlToImage: string | null,
  publishedAt: string | null,
  content: string,
};

const NewsCard: FC<NewsCardProps> = (item) => {
  const date = new Date(item.publishedAt ?? new Date()).toDateString();
  return (
    <div className="news-card">
      <div className="news-theme">
        <h3 className="news-theme__title">Экономика</h3>
        <p>{date}</p>
      </div>
      <div className="card-content">
        <img className="news-img" src={item.urlToImage ?? 'https://picsum.photos/300/300'} alt=""/>
        <div className="news-info">
          <div className="">
            <h3>{item.title}</h3>
          </div>
          <p>{item.description}</p>
        </div>
      </div>
      <p>Автор : {item.author}</p>
      <a href={item.url} target="_blank">Читать источник</a>
    </div>
  );
};

export default NewsCard;