import React, { Component } from 'react';
import '../resources/scss/base.scss';
import { Layout } from 'react-simple-responsive-framework';

export default class App extends Component {
  render() {
    return (
      <Layout>
        {this.props.children}
      </Layout>
    );
  }
}
