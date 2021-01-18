import React from 'react';
import Main from './Main';
import { Container, Wrapper } from './styles';

export default function index() {
  return (
    <Container>
      <Wrapper>
        {/* <MenuBar /> */}
        <Main />
        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  )
}
