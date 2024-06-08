import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const generateRandomPublishTime = () => {
      const start = new Date(2020, 0, 1).getTime();
      const end = new Date().getTime();
      const randomTime = new Date(start + Math.random() * (end - start));
      return randomTime;
    };

    const generateRandomReadTime = () => {
      return Math.floor(Math.random() * 35) + 1;
    };

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/posts`)
      .then((response) => {
        const articlesWithTimes = response.data.map((article) => ({
          ...article,
          publishedDate: generateRandomPublishTime(),
          readTime: generateRandomReadTime(),
        }));
        setArticles(articlesWithTimes);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{
        articles,
        setArticles,
        article,
        setArticle,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };
