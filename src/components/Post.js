import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Like from './Like';

export default class Post extends Component {
  render() {
    let title = this.props.post.title
    if (this.props.isDraft) {
      title = `${title} (Draft)`
    }

    return (
      <div className="post-min">
      <Like/>
      <div className="content">
        <Link className="no-underline ma1" to={`/post/${this.props.post.id}`}>
          <h2 className="f3 black-80 fw4 lh-solid">{title}</h2>
          <p className="black-80 fw3">{this.props.post.content}</p>        
        </Link>
        </div>
      </div>
    )
  }
}