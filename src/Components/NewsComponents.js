import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class NewsComponents extends Component {
 
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=304b6abcaeac4229ba651cd347803685"
    let data = await fetch(url)
    let parsedData =await data.json()
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp</h2>
        <div className="row ">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItems
                  title={element.title.slice(0, 45)}
                  description={element.description ? element.description.slice(0, 80) : "No description available"}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
