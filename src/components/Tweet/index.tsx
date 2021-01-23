import React from 'react';
import {
  Container,
  Retweeted,
  RetweetIcon,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  Dot,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetedIcon,
  LikeIcon,
  ShareIcon
  } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        You Retweeted
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Tony Stark</strong>
            <span>@Iron_man</span>
            <Dot />
            <time>18h</time>
          </Header>
          <Description>
            Genius, billionaire, playboy, philanthropist
          </Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              12
            </Status>
            <Status>
              <RetweetedIcon />
              8
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
            <Status>
              <ShareIcon />
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>

  );
}

export default Tweet;
