import React, {Component} from 'react';
import {Container, Header, Content, Footer, Text} from 'native-base';
export default class IndexPage extends Component {
  render() {
    return (
      <Container>
        <Header></Header>
        <Content>
          <Text>This is index page</Text>
        </Content>
        <Footer></Footer>
      </Container>
    );
  }
}
