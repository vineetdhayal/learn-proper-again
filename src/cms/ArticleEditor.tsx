import React, { useState } from 'react';

const ArticleEditor = ({ articles, onArticleUpdate }) => {
    console.log('Artice Editor');
  const [selectedArticleId, setSelectedArticleId] = useState(articles[0].id);
  const [content, setContent] = useState(articles[0].content);

  const handleArticleChange = (e) => {
    console.log('Artice Editor Change');
    const article = articles.find((article) => article.id === parseInt(e.target.value));
    setSelectedArticleId(article.id);
    setContent(article.content);
  };

  const handleContentChange = (e) => {
    console.log('Artice Editor Content Change');
    setContent(e.target.value);
  };

  const handleSave = () => {
    console.log('Artice Editor Save');
    const updatedArticle = {
      id: selectedArticleId,
      title: articles.find((article) => article.id === selectedArticleId).title,
      content: content,
      authorId: articles.find((article) => article.id === selectedArticleId).authorId,
      categoryId: articles.find((article) => article.id === selectedArticleId).categoryId
    };
    onArticleUpdate(updatedArticle);
  };

  return (
    <div>
      <select value={selectedArticleId} onChange={handleArticleChange}>
        {articles.map((article) => (
          <option key={article.id} value={article.id}>
            {article.title}
          </option>
        ))}
      </select>
      <textarea value={content} onChange={handleContentChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ArticleEditor;
