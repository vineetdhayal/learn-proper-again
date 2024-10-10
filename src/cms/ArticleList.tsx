import React from 'react';

const ArticleList = ({ articles }) => {
    console.log('Artice List');
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
