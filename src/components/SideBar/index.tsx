import React from 'react';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
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
            <FollowSuggestion name="Nick Fury" nickname="@fury_nick" />,
            <FollowSuggestion name="Thor Odinson" nickname="@odinson" />,
            <FollowSuggestion name="Steve Rogers" nickname="@roger_steve" />
          ]}
        />
      </Body>
    </Container>
  );
}

export default SideBar;
