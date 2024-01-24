import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageurl, newsUrl, author, publishedAt} = this.props;
    return (
      <div className='card' style={{width:'18rem', marginBottom:"25px", maxWidth: "100%"}}>
        <img className='card-img-top' src={!imageurl?"https://www.northampton.ac.uk/wp-content/uploads/2018/11/default-svp_news.jpg":imageurl} style={{width:"auto"}}/>
        <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
            <p class="card-text"><small class="text-muted">By {author} published <br/> {publishedAt} </small></p>
            <a href={newsUrl} target='_blank' className='btn btn-primary'>Read More</a>
        </div>
      </div>
    )
    
  }
}

export default NewsItem
