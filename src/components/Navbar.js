import React, { Component } from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  // static propTypes = {searchNews};
  render() {
    return (
      <div>
        <>
          <nav className="bg-blue-500 py-2">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
              <div className="flex items-center">
                <Link to="/" className="text-white text-2xl font-semibold">
                  News Daily
                </Link>
                <button
                  id="mobile-menu-button"
                  className="lg:hidden text-white ml-2"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              </div>

              <ul className="lg:flex space-x-4 mt-4 lg:mt-0 hidden" id="navLinks">
                <li className="text-white hover:text-blue-300">
                  <Link to="/Business">Business</Link>
                </li>
                <li className="text-white hover:text-blue-300">
                  <Link to="/Entertainment">Entertainment</Link>
                </li>
                <li className="text-white hover:text-blue-300">
                  <Link to="/Health">Health</Link>
                </li>
                {/* <li className="text-white hover:text-blue-300">
                  <Link to="/">General</Link>
                </li> */}
                <li className="text-white hover:text-blue-300">
                  <Link to="/Science">Science</Link>
                </li>
                <li className="text-white hover:text-blue-300">
                  <Link to="/Sports">Sports</Link>
                </li>
                <li className="text-white hover:text-blue-300">
                  <Link to="/Technology">Technology</Link>
                </li>
              </ul>

              <div className="flex items-center mt-4 lg:mt-0">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  onchange={this.props.handleOnChange}
                />
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md ml-2 transition duration-300 ease-in-out transform hover:scale-105"
                  type="submit"
                  onclick={this.props.searchNews}
                >
                  Search
                </button>
              </div>
            </div>
          </nav>
        </>
      </div>
    );
  }
}
