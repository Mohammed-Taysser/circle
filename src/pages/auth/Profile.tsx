import React from 'react';
import Banner from '../../components/profile/Banner.profile';
import Taps from '../../components/profile/Taps.profile';

import '../../assets/scss/pages/profile.scss';

function Profile() {
  return (
    <div className='profile-page'>
      <Banner />
      <Taps />
    </div>
  );
}

export default Profile;
