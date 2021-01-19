import React from 'react';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  FollowAge,
 } from './styles';

 const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        {/* <EditButton outlined>Edit Profile</EditButton> */}
        <h1>Lucas Tenani</h1>
        <h2>@lucastenani</h2>

        <p>
          Software Engineer at <a href="https://www.lumis.com.br/"
          target="_blank" rel="noopener noreferrer"> Lumis</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Born on June 17, 1999
          </li>
          </ul>

          <FollowAge>
            <span>
              <strong>127</strong> Following
            </span>
            <span>
              <strong>70</strong> Followers
            </span>
          </FollowAge>
      </ProfileData>
    </Container>
  );
}

export default ProfilePage;
