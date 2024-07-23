import React from "react";

const ArticleList = ({ articles = [], onSelectArticle }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Most Popular Articles</h1>
      <ul className="space-y-2">
        {articles.map((article) => (
          <li
            key={article.id}
            className="p-4 border rounded cursor-pointer hover:bg-gray-100"
            onClick={() => onSelectArticle(article)}
          >
            {article.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
