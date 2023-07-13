import BasicInfo from '../components/settings/BasicInfo';
import ChangePassword from '../components/settings/ChangePassword';
import ContactInfo from '../components/settings/ContactInfo';
import EducationAndOthersInformation from '../components/settings/EducationAndOthersInformation';
import HobbiesAndInterests from '../components/settings/HobbiesAndInterests';

const TOC = [
  {
    label: 'Contact Info',
    id: 'contactInfo',
    component: ContactInfo,
  },
  {
    label: 'Basic Info',
    id: 'basicInfo',
    component: BasicInfo,
  },
  {
    label: 'Change Password',
    id: 'changePassword',
    component: ChangePassword,
  },
  {
    label: 'Education And Others Information',
    id: 'educationAndOthersInformation',
    component: EducationAndOthersInformation,
  },
  {
    label: 'Hobbies and Interests',
    id: 'hobbiesAndInterests',
    component: HobbiesAndInterests,
  },
];

export { TOC };
