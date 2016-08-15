import React, { Component, PropTypes } from 'react';
import Sidebar from './sidebar';

class Posts extends Component {
  renderAuthor(author) {
    switch(author){
      case 'Jevin':
        return <a target="__blank" href="https://github.com/JevinAnderson">Jevin</a>;
      case 'Jamela':
        return <a target="__blank" href="https://www.facebook.com/jamela.barry">Jamela</a>;
    }
  }

  renderPost(post, index) {
    const { element, props, value: __html } = post;
    if(__html){
      const dangerouslySetInnerHTML = { __html };
      props.dangerouslySetInnerHTML = dangerouslySetInnerHTML;
    }

    return React.createElement(element, props);
  }

  renderPosts(posts, key) {
    const { title, meta, author, data } = posts;

    return (
      <div className="blog-post">
        <h2 className="blog-post-title">{title}</h2>
        <p className="blog-post-meta">{meta} by { this.renderAuthor(author) }</p>
        { data.map(this.renderPost) }
      </div>
    );
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="container">
        <div className="blog-header">
          <h1 className="blog-title">Jevin's Bootstrap Blog</h1>
          <p className="lead blog-description">A simple bootstrap blog to describe what I've been up to.</p>
        </div>
        <div className="row">
          <div className="col-sm-8 blog-main">
            { posts.map(this.renderPosts, this) }
          </div>
          <Sidebar />
        </div>
      </div>
    );
  }
};

Posts.propTypes = {};

Posts.defaultProps = {};

export default Posts;
