import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: 'general',
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 0,
            totalArticles: 0,
        }
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);

    }

    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a5df608aa4bc4acd84b2bc6683b75d74&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let response = await fetch(url);
        let parsedData = await response.json();
    
        this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults, loading: false});
    }

    handleNextClick = async() => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a5df608aa4bc4acd84b2bc6683b75d74&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let response = await fetch(url);
        let parsedData = await response.json();
        
        this.setState({articles: parsedData.articles});
        this.setState({page: this.state.page + 1, loading: false});

    }

    handlePrevClick = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a5df608aa4bc4acd84b2bc6683b75d74&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let response = await fetch(url);
        let parsedData = await response.json();
        
        this.setState({page: this.state.page - 1});
        this.setState({articles: parsedData.articles, loading: false});
    }

    render() {
        return (
            <div className="container my-3" style={{ paddingBottom: "20px" }}>
                {this.state.loading && <Spinner/>}
                <h1 className = "text-center">Today's Top headlines</h1>

                <div className="row">
                    {this.state.articles.map((article) => {

                        let description, title, urlToImage;
                        title = article.title;
                        description = article.description;

                        if(article.urlToImage == null)
                            urlToImage = "https://source.unsplash.com/random/400x300";
                        
                        else
                            urlToImage = article.urlToImage

                        if(description != null)
                            description = article.description.substring(0, 20) + "...";
                        else
                            description = "No description";

                        if(title != null)
                            title = article.title.substring(0, 40) + "...";
                        else
                            title = "No title";

                        return (
                            <div className="col-md-4" key={article.url}>
                                <NewsItem title={title} description={description} imageUrl={urlToImage} newsUrl={article.url} />
                            </div>
                        );
                    })}
                </div>

                <div className="container d-flex justify-content-between my-4">
                    <button disabled = {this.state.page <= 1} className="btn btn-dark" onClick = {this.handlePrevClick}>Previous</button>
                    <button disabled = {this.state.page >= Math.ceil(this.state.totalArticles / this.props.pageSize)} className="btn mx-4 btn-dark" onClick = {this.handleNextClick}>Next</button>
                </div>

            </div>
        )
    }
}
