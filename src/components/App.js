import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js"
import About from "./About.js"
import ArticleList from "./ArticleList";


function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} text={blogData.about}/>
      <ArticleList blogData={blogData}/>
    </div>
  );
}

export default App;
