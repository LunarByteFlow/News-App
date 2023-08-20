import React, { Component } from "react";

export default class NewsItemComponent extends Component {
render(props) {
  
  let {title,description,imageUrl,authorName,newsUrl,category,date} = this.props;
  return (
    <div>
        
       
          <div className="max-w-md bg-white rounded-md shadow-md overflow-hidden transition duration-150 hover:shadow-lg cursor-pointer">
            <img
              src={ !imageUrl? "https://i.insider.com/64dfc60ebd98a60019799d8b?width=1200&format=jpeg" : imageUrl}
              alt="News Image"
              className="w-full h-22 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-700 text-sm">
                {description} ...
              </p>
              <p className=" text-gray-500 text-sm">
                {!authorName?"Unknown": authorName}
              </p>
              {/* <p className="text-black-400">
              Published at: {date}
              </p> */}
              <a
                href={newsUrl} target="_blank"
                className="mt-2 text-blue-500 text-md inline-block hover:underline"
              >
                read More
              </a>
              <p className="text-red-700 text-bold">
                {category}
              </p>
            </div>
          </div>





        
      </div>
    );
  }
}
// 8e6645b9e893463f8dbb6d2bdd0b0f44
