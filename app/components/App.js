import React from "react";

import Header from "./Header";
import PostList from "./PostList";
import PostSort from "./PostSort";

import "./css/_App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <PostSort />
      <PostList />
    </div>
  );
};

export default App;
