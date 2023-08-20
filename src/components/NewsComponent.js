import React, { Component } from "react";
import NewsItemComponent from "./NewsItemComponent";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export class NewsComponent extends Component {
  static defaultProps = {
    category:'general',
    country :'US',
    pageSize:6
  }
  
  static propTypes = {
    category:PropTypes.string,
    country :PropTypes.string,
    pageSize:PropTypes.number
  }
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 6,
    };
    console.log("constructor");
  }
  async componentDidMount() {
    console.log("componentDidMount");
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${
      this.props.apiKey
    }&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    const data = await fetch(url);

    this.setState({ loading: true });

    const parsedData = await data.json();
    console.log(parsedData);
    // this.setState({ articles: parsedData.articles });
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }

  handleNextClick = async () => {
    console.log("Next Click");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${
        this.props.apiKey
      }&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      
      this.setState({ loading: true });
      // this.setState({ loading: true});
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({ articles: parsedData.articles });
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };
  handlePreviousClick = async () => {
    console.log("previous Click");
    const url =
     
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${
        this.props.apiKey
      }&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // setTimeout(() => {
    // },300);
    this.setState({ loading: true });
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({ articles: parsedData.articles });

    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  render() {
    const articles = this.state.articles;
    console.log("render");
    const { searchQuery, totalResults } = this.state;
    
    return (

      <div>
        <h1 className="text-center text-[2.1rem] text-black-500 my-9">
          News Daily - Headlines - {this.props.category}
        </h1>
        {this.state.loading && <Spinner />}
        <h1 className="text-center text-[2.1rem] text-black-500 my-9">
          {searchQuery && `Search Query: ${searchQuery}`}
        </h1>

        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <NewsItemComponent
                key={element.url}
                title={element.title}
                description={element.description}
                authorName={element.author}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                searchQuery={element.category}
                date={element.publishedAt}
              />
            );
          })}
        </div>
        <div className="flex justify-between mt-8 mx-5">
          <a
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none  cursor-pointer focus:ring focus:border-blue-300 my-4"
            onClick={this.handlePreviousClick}
          >
            &larr; View Previous Articles
          </a>
          <a
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring cursor-pointer focus:border-blue-300 my-4"
            onClick={this.handleNextClick}
          >
            View Next Articles &rarr;
          </a>
        </div>
      </div>
    );
  }
}

export default NewsComponent;
