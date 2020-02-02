import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../resources/scss/base.scss';
import { Layout } from 'react-simple-responsive-framework';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <Layout>
        {children}
      </Layout>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
