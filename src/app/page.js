"use client"
import { useEffect, useState } from "react";

import { fetchNYTArticles } from "@/api";
import ArticleList from "@/components/ArticleList";
import ArticleDetail from "@/components/ArticleDetail";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const loadArticles = async () => {
      const articles = await fetchNYTArticles(1);
      setArticles(articles);
    };

    loadArticles();
  }, []);

  return (
    <div className="flex">
      <div className="w-1/2">
        <ArticleList articles={articles} onSelectArticle={setSelectedArticle} />
      </div>
      <div className="w-1/2">
        <ArticleDetail article={selectedArticle} />
      </div>
    </div>
  );
};

export default Home;
