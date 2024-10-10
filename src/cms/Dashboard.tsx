import React, { useState } from 'react';
import ArticleList from './ArticleList.tsx';
import CategoryList from './CatgoryList.tsx';
import AuthorDetails from './AuthorDetails.tsx';
import ArticleEditor from './ArticleEditor.tsx';

const CMSDashboard = () => {
    const [articles, setArticles] = useState([
        { id: 1, title: 'Article 1', content: 'Content of article 1', authorId: 1, categoryId: 1 },
        { id: 2, title: 'Article 2', content: 'Content of article 2', authorId: 2, categoryId: 2 }
    ]);

    const [categories, setCategories] = useState([
        { id: 1, name: 'Technology' },
        { id: 2, name: 'Business' }
    ]);

    const [authors, setAuthors] = useState([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
    ]);

    const handleArticleUpdate = (updatedArticle) => {
        console.log('artice updated');
        setArticles((prevArticles) =>
            prevArticles.map((article) => (article.id === updatedArticle.id ? updatedArticle : article))
        );
    };

    return (
        <div>
            <h1>CMS Dashboard</h1>

            <div style={{ display: 'flex' }}>
                {/* Left column */}
                <div>
                    <h2>Articles</h2>
                    <ArticleList articles={articles} />
                </div>

                {/* Right column */}
                <div>
                    <h2>Categories</h2>
                    <CategoryList categories={categories} />

                    <h2>Authors</h2>
                    <AuthorDetails authors={authors} />
                </div>
            </div>

            <h2>Edit Article</h2>
            <ArticleEditor articles={articles} onArticleUpdate={handleArticleUpdate} />
        </div>
    );
};

export default CMSDashboard;
