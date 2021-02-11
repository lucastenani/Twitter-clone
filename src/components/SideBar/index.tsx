import React from 'react';
import List from '../List';
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,  } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <Body>
        <List
          title="What’s happening"
          elements={[
            <h1>Test</h1>,
            <h1>Test</h1>,
            <h1>Test</h1>
          ]}
        />
        <List
          title="Who to follow"
          elements={[
            <h1>Test</h1>,
            <h1>Test</h1>,
            <h1>Test</h1>
          ]}
        />
      </Body>
    </Container>
  );
}

export default SideBar;
