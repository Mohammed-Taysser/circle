import { useDocumentTitle } from '@mantine/hooks';
import Banner from '../../components/profile/Banner.profile';
import Taps from '../../components/profile/Taps.profile';

import '../../assets/scss/pages/profile.scss';

function Profile() {
  useDocumentTitle('Mantine | Profile');
  return (
    <div className='profile-page'>
      <Banner />
      <Taps />
    </div>
  );
}

export default Profile;
