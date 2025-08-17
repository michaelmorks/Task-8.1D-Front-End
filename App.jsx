import React from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";
import "./App.css";  // CSS 

function App() {
  return (
    <div className="App">
      <h1>DEV@Deakin Questions</h1>
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
