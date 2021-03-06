import React, { Component } from 'react'

export default class NewsItem extends Component {

    
    render() {
        // let title = this.props.title;
        // let description = this.props.description;
        // let imageUrl = this.props.imageUrl;

        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <>
                <div className="card" >
                    <img src={imageUrl} className="card-img-top" alt="..." height="auto" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} target = "_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </>
        )
    }
}
