import React from "react";
import Navbar from "./Navbar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import Homes from "./Homes.jsx";
import { theme } from "./styles";

//import data from "./data.json";
import Form from "./Form";
//import { useState } from "react";
//import Header from "./Header";
//import Search from "./Search";
//import React, { useState } from 'react';
//import { Container } from 'react-bootstrap'
//import useFetchJobs from './useFetchJobs'

//import SearchForm from './SearchForm'
//import JobsList from './JobsList'
//import JobsPagination from './JobsPagination'

//import { Switch, Route } from "react-router-dom";

//import BookData from "./Data.json";
//import { Searchbar } from './SearchBar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const appTheme = createMuiTheme(theme);
const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <ThemeProvider theme={appTheme}>
          <Homes />
        </ThemeProvider>
      </div>
    </>
  );
};

const Appliedjob = () => {
  return (
    <>
      <Navbar />
      <p>Check Your Applied Jobs</p>
      <Form />
    </>
  );
};

const Candidate = () => {
  return (
    <>
      <Navbar />
      <Form />
    </>
  );
};

const Recruiter = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Recruiter PAGE</h1>
      </section>
      <Form />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/appliedjob">
          <Appliedjob />
        </Route>

        <Route path="/candidate">
          <Candidate />
        </Route>

        <Route path="/recruiter">
          <Recruiter />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
