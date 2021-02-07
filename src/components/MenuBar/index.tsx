import React from 'react';
import Button from '../Button';
import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  EmailIcon,
  BookmarkIcon,
  ProfileIcon,
  BellIcon,
  // ExploreIcon,
  // ListIcon,
  // MoreIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon
 } from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
      <Logo />
      <MenuButton>
        <HomeIcon />
        <span>Home</span>
      </MenuButton>

      {/* <MenuButton>
        <ExploreIcon />
        <span>Explore</span>
      </MenuButton> */}

      <MenuButton>
        <BellIcon />
        <span>Notifications</span>
      </MenuButton>

      <MenuButton>
        <EmailIcon />
        <span>Messages</span>
      </MenuButton>

      <MenuButton>
        <BookmarkIcon />
        <span>Bookmarks</span>
      </MenuButton>

      {/* <MenuButton>
        <ListIcon />
        <span>Lists</span>
      </MenuButton> */}

      <MenuButton className="active">
        <ProfileIcon />
        <span>Profile</span>
      </MenuButton>

      {/* <MenuButton >
        <MoreIcon />
        <span>More</span>
      </MenuButton> */}

      <Button>
        <span>Tweet</span>
      </Button>

      </TopSide>

      <BotSide>
        <Avatar />
        <ProfileData>
          <strong>Lucas Tenani</strong>
          <span>@lucastenani</span>
        </ProfileData>
        <ExitIcon />
      </BotSide>
    </Container>
  );
}

export default MenuBar;
