import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import loading from "./assets/Icons/loading.png";

// Lazy load components for future dev
const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./components/blog"));
const Post = lazy(() => import("./components/post"));
const NewPost = lazy(() => import("./components/newpost"));

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="center-loading">
          <img
            src={loading}
            alt="Loading..."
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/post/:token" element={<Post />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
