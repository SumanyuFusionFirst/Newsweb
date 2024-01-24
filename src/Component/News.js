import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
export class News extends Component {

    articles = [
{
    "source":{"id":null,"name":"Gizmodo.com"},
    "author":"Florence Ion",
    "title":"The Google Play Store Ruling Is Bad News for Longtime Android Phone Users",
    "description":"Last week, Epic won a years-long suit against Google for anti-competitive practices within the Play Store. We were all left wondering: what would happen to Android’s app store moving forward? Today, Google laid out what’s happening in its Keyword blog, and it…",
    "url":"https://gizmodo.com/google-play-store-ruling-bad-news-1851112716",
    "urlToImage":"https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/e23fa26c8bbd1f39db169f92330b78cf.jpg",
    "publishedAt":"2023-12-19T21:45:00Z",
    "content":"Last week, Epic won a years-long suit against Google for anti-competitive practices within the Play Store. We were all left wondering: what would happen to Androids app store moving forward? \r\nToday,… [+4065 chars]"
},
{"source":{"id":null,"name":"Hubspot.com"},
"author":"Lauren Farrell",
"title":"PPC Keyword Research: The Complete Guide",
"description":"Pay-per-click (or PPC) marketing can feel like a daunting task. From creating ads to monitoring performance and understanding bidding strategies, there’s a lot to take in. But PPC keyword research is an often under-appreciated, yet necessary, component of sea…",
"url":"https://blog.hubspot.com/marketing/ppc-keyword-research#article",
"urlToImage":"https://blog.hubspot.com/hubfs/ppc-keyword-research.webp#keepProtocol",
"publishedAt":"2023-12-21T12:00:00Z",
"content":"Pay-per-click (or PPC) marketing can feel like a daunting task. From creating ads to monitoring performance and understanding bidding strategies, theres a lot to take in. But PPC keyword research is … [+17079 chars]"},

{"source":{"id":null,"name":"Search Engine Journal"},
"author":"Daniel Smullen",
"title":"How To Use ChatGPT For Keyword Research (Festive Flashback) via @sejournal, @dansmull","description":"Unleash the power of ChatGPT in keyword research and make it an invaluable addition to your SEO toolbox using this guide.\nThe post How To Use ChatGPT For Keyword Research (Festive Flashback) appeared first on Search Engine Journal.",
"url":"https://www.searchenginejournal.com/how-to-use-chatgpt-for-keyword-research-festive-flashback/502156/",
"urlToImage":"https://www.searchenginejournal.com/wp-content/uploads/2023/12/2-ff-chatgpt-for-keyword-research-657a84d71aa7d-sej.jpg",
"publishedAt":"2024-01-05T09:15:30Z",
"content":"Celebrate the Holidays with some of SEJ’s best articles of 2023.\r\nOur Festive Flashback series runs from December 21 – January 5, featuring daily reads on significant events, fundamentals, actionable… [+14691 chars]"}
    ]

    constructor(){
        super();
        this.state = {
            articles: [],
            loading:false
        }
        }

    async componentDidMount(){
        console.log("cdm")
        let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=9ddf129e23074ce0a27777942e453534&page=1&pageSize=20`
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles})
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
        })
        
    }

    // handleNextClick = async ()=>{
    //     let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=9ddf129e23074ce0a27777942e453534&page=${this.state.page}&pageSize=5`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     // this.setState({articles: parsedData.articles})
    //     console.log(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=9ddf129e23074ce0a27777942e453534&page=${this.state.page}`)
    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parsedData.articles,
    //     })
    // }

    // handlePrevClick =()=>{
        
    // }


  render() {
    return (
      <div className='container my-3'>
    <h2>News </h2>
<div className='row'>
{this.state.articles.map((element)=>{
return<div className='col-md-4'>
    <NewsItem  key={element.url} title={element.title} description={element.description} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt}/>
</div>
})}
</div>
{/* <div className='Container'>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-primary me-md-2" type="button" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button className="btn btn-primary" type="button" onClick={this.handleNextClick}>Next &rarr; </button>
                </div>
        </div> */}
      </div>
    )
  }
}

export default News
