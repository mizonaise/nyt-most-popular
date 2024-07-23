import React from "react";

const ArticleDetail = ({ article }) => {
  if (!article) return null;

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">{article.title}</h2>
      <p>{article.abstract}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        Read more
      </a>
    </div>
  );
};

export default ArticleDetail;
