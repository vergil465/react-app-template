import React, { Component } from 'react';
import { Container, Heading } from 'react-simple-responsive-framework';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Heading
          text="React App Template"
          position="center"
        />
      </Container>
    );
  }
}
