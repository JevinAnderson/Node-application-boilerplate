import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Navigation from '../components/navigation';
import Posts from '../components/posts';
import Footer from '../components/footer';

class Application extends Component {
  render() {
    const { pages, posts } = this.props;
    return (
      <div className="application">
        <Navigation pages={pages} />
        <Posts posts={posts} />
        <Footer />
      </div>
    );
  }
};

Application.propTypes = {};

Application.defaultProps = {};

function mapStateToProps(state) {
  const { pages, posts } = state;

  return { pages, posts };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
