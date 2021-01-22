import React from 'react';
import Feed from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  FollowAge,
  EditButton
 } from './styles';

 const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Edit Profile</EditButton>
        <h1>Lucas Tenani</h1>
        <h2>@lucastenani</h2>

        <p>
          Software Engineer
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

      <Feed />
    </Container>
  );
}

export default ProfilePage;
