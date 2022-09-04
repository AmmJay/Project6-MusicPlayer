import React from "react";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import Feed from "./components/Feed"
import "./App.css"

function App() {
  return (
    <>
    <div className = "app">
      <Header />
      <div className="app-body">
        <LeftSideBar />
        <Feed />
      </div>
    </div>
    </>
  );
}

export default App;
