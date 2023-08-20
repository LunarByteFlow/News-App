import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto text-center">
    <p className="text-lg font-semibold">Stay Updated with the Latest News</p>
    <p className="mt-2">Be the first to know about breaking stories and in-depth coverage from around the world.</p>
    
    <div className="mt-6">
      <input type="email" className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter your email"/>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring my-3 focus:border-blue-300">Subscribe</button>
    </div>
    
    <div className="mt-4 flex justify-center items-center">
      <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">
        <i className="fab fa-facebook-square text-2xl"></i>
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">
        <i className="fab fa-twitter-square text-2xl"></i>
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">
        <i className="fab fa-instagram-square text-2xl"></i>
      </a>
    </div>
    
    <p className="mt-6 text-sm">&copy; 2023 The News Daily All rights reserved.</p>
  </div>
</footer>

      </div>
    )
  }
}
