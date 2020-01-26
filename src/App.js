import React, { useReducer, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import JobList from "./components/JobList";
import Search from "./components/Search";

const App = () => {
  useEffect(() => {
    console.log("render");
  });

  return (
    <div>
      <Header />

      <JobList />
      <Search />
    </div>
  );
};

export default App;
