import Navbar from "./components/Navbar";
import NewsComponent from "./components/NewsComponent";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { Component, useState } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      articles: [],
      // totalResults: 0
    };
  }

  handleOnChange = (event) => {
    const value = event.target.value;
    this.setState({
      searchQuery: value,
    });
  };
  searchNews = async (e) => {
    e.preventDefault();

    const { searchQuery } = this.state;

    console.log("Search News Called");
    if (searchQuery.trim() === "") {
      console.log("Type Something to search ...");
      return; // Prevent empty search queries
    } else {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${searchQuery}&apiKey=8e6645b9e893463f8dbb6d2bdd0b0f44`;
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState((prevState) => ({
        articles: prevState.articles.concat(data.articles),
        totalResults: data.totalResults,
        searchQuery: searchQuery, // Update searchQuery state
      }));
      console.log(parsedData);
      setTimeout(() => {
        alert(
          `${searchQuery} Realted news articals are being added to existing articles`
        );
      }, 2000);
      console.log(searchQuery);
      // this.setState({ articles: parsedData.articles });
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
      });
    }
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  {" "}
                  <Navbar
                    searchNews={this.searchNews}
                    handleOnChange={this.handleOnChange}
                    searchQuery={this.searchQuery}
                  />
                  <NewsComponent
                    key="general"
                    country="us"
                    category="general"
                    searchQuery={this.state.searchQuery}
                    pageSize={6}
                    apiKey={"8e6645b9e893463f8dbb6d2bdd0b0f44"}
                  />
                  <Footer />{" "}
                </>
              }
            ></Route>

            <Route
              exact
              path="/Business"
              element={
                <>
                  {" "}
                  <Navbar
                    searchNews={this.searchNews}
                    handleOnChange={this.handleOnChange}
                    searchQuery={this.searchQuery}
                  />
                  <NewsComponent
                    key="business"
                    country="us"
                    category="business"
                    searchQuery={this.state.searchQuery}
                    pageSize={6}
                    apiKey={"8e6645b9e893463f8dbb6d2bdd0b0f44"}
                  />
                  <Footer />{" "}
                </>
              }
            ></Route>

            <Route
              exact
              path="/Entertainment"
              element={
                <>
                  {" "}
                  <Navbar
                    searchNews={this.searchNews}
                    handleOnChange={this.handleOnChange}
                    searchQuery={this.searchQuery}
                  />
                  <NewsComponent
                   key="entairtainment"
                    country="us"
                    category="entairtainment"
                    searchQuery={this.state.searchQuery}
                    pageSize={6}
                    apiKey={"8e6645b9e893463f8dbb6d2bdd0b0f44"}
                  />
                  <Footer />{" "}
                </>
              }
            ></Route>

            <Route
              exact
              path="/Health"
              element={
                <>
                  {" "}
                  <Navbar
                    searchNews={this.searchNews}
                    handleOnChange={this.handleOnChange}
                    searchQuery={this.searchQuery}
                  />
                  <NewsComponent
                   key="health"
                    country="us"
                    category="health"
                    searchQuery={this.state.searchQuery}
                    pageSize={6}
                    apiKey={"8e6645b9e893463f8dbb6d2bdd0b0f44"}
                  />
                  <Footer />{" "}
                </>
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <>
                  {" "}
                  <Navbar
                    searchNews={this.searchNews}
                    handleOnChange={this.handleOnChange}
                    searchQuery={this.searchQuery}
                  />
                  <NewsComponent
                  key="general"
                    country="us"
                    category="general"
                    searchQuery={this.state.searchQuery}
                    pageSize={6}
                    apiKey={"8e6645b9e893463f8dbb6d2bdd0b0f44"}
                  />
                  <Footer />{" "}
                </>
              }
            ></Route>

            <Route
              exact
              path="/Science"
              element={
                <>
                  {" "}
                  <Navbar
                    searchNews={this.searchNews}
                    handleOnChange={this.handleOnChange}
                    searchQuery={this.searchQuery}
                  />
                  <NewsComponent
                    country="us"
                    category="science"
                    key="science"
                    searchQuery={this.state.searchQuery}
                    pageSize={6}
                    apiKey={"8e6645b9e893463f8dbb6d2bdd0b0f44"}
                  />
                  <Footer />{" "}
                </>
              }
            ></Route>

            <Route
              exact
              path="/Sports"
              element={
                <>
                  {" "}
                  <Navbar
                    searchNews={this.searchNews}
                    handleOnChange={this.handleOnChange}
                    searchQuery={this.searchQuery}
                  />
                  <NewsComponent
                    country="us"
                    category="sports"
                    key="sports"
                    searchQuery={this.state.searchQuery}
                    pageSize={6}
                    apiKey={"8e6645b9e893463f8dbb6d2bdd0b0f44"}
                  />
                  <Footer />{" "}
                </>
              }
            ></Route>

            <Route
              exact
              path="/Technology"
              element={
                <>
                  {" "}
                  <Navbar
                    searchNews={this.searchNews}
                    handleOnChange={this.handleOnChange}
                    searchQuery={this.searchQuery}
                  />
                  <NewsComponent
                    country="us"
                    category="Technology"
                    key="technology"
                    searchQuery={this.state.searchQuery}
                    pageSize={6}
                    apiKey={"8e6645b9e893463f8dbb6d2bdd0b0f44"}
                  />
                  <Footer />{" "}
                </>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
