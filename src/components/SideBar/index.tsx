import React from 'react';
import StickyBox from 'react-sticky-box';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
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
      <StickyBox>
        <Body>
          <List
            title="What’s happening"
            elements={[
            <News />,
            <News />,
            <News />
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
          <List
            title="What’s happening"
            elements={[
            <News />,
            <News />,
            <News />
            ]}
          />
          <List
            title="What’s happening"
            elements={[
            <News />,
            <News />,
            <News />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;
