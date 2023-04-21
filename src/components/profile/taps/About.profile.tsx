import { Anchor, Table, ThemeIcon } from '@mantine/core';
import {
  BsBarChartSteps,
  BsBehance,
  BsMusicNote,
  BsPhone,
} from 'react-icons/bs';
import {
  FiDribbble,
  FiExternalLink,
  FiFacebook,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import {
  MdDriveFileRenameOutline,
  MdOutlineCake,
  MdOutlineHomeWork,
  MdOutlineMovie,
  MdOutlineScreenshotMonitor,
  MdOutlineWorkOutline,
} from 'react-icons/md';
import { RiBuilding2Line } from 'react-icons/ri';
import { TfiBookmarkAlt, TfiEmail } from 'react-icons/tfi';
import { VscBug } from 'react-icons/vsc';

function AboutProfile() {
  return (
    <>
      <div className='bg-white rounded nice-shadow py-4 px-10 mb-10'>
        <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
          Contact Info
        </h2>
        <Table fontSize='md'>
          <tbody>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='blue'>
                    <MdDriveFileRenameOutline />
                  </ThemeIcon>
                  <span className='mx-2'>Name</span>
                </div>
              </td>
              <td>
                <p>Rebeca Powel</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='grape'>
                    <TfiEmail />
                  </ThemeIcon>
                  <span className='mx-2'>Email</span>
                </div>
              </td>
              <td>
                <p>
                  <Anchor target='_blank' href='mailto:info@example.com'>
                    info@example.com
                  </Anchor>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='green'>
                    <BsPhone />
                  </ThemeIcon>
                  <span className='mx-2'>Phone</span>
                </div>
              </td>
              <td>
                <p>
                  <Anchor
                    target='_blank'
                    href='tel:123%2098566836'
                    rel='nofollow'
                  >
                    123 98566836
                  </Anchor>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='orange'>
                    <MdOutlineHomeWork />
                  </ThemeIcon>
                  <span className='mx-2'>Address</span>
                </div>
              </td>
              <td>
                <p>59 Street, Newyorkc City</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='pink'>
                    <FiExternalLink />
                  </ThemeIcon>
                  <span className='mx-2'>Website</span>
                </div>
              </td>
              <td>
                <p>
                  <Anchor
                    target='_blank'
                    href='http://www.rebeca.com'
                    rel='nofollow'
                  >
                    http://www.rebeca.com
                  </Anchor>
                </p>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='bg-white rounded nice-shadow py-4 px-10 mb-16'>
        <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
          Education And Others Information
        </h2>
        <Table fontSize='md'>
          <tbody>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='blue'>
                    <MdOutlineCake />
                  </ThemeIcon>
                  <span className='mx-2'>BirthDay</span>
                </div>
              </td>
              <td>
                <p>January 1, 1998</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='grape'>
                    <HiOutlineAcademicCap />
                  </ThemeIcon>
                  <span className='mx-2'>Education</span>
                </div>
              </td>
              <td>
                <p>The New College of Design</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='green'>
                    <RiBuilding2Line />
                  </ThemeIcon>
                  <span className='mx-2'>Institution</span>
                </div>
              </td>
              <td>
                <p>Radiustheme Techlonology</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='orange'>
                    <MdOutlineWorkOutline />
                  </ThemeIcon>
                  <span className='mx-2'>Employment</span>
                </div>
              </td>
              <td>
                <p>Web Development</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='pink'>
                    <FiFacebook />
                  </ThemeIcon>
                  <span className='mx-2'>Facebook</span>
                </div>
              </td>
              <td>
                <p>
                  <Anchor href='https://www.facebook.com/' target='_blank'>
                    https://www.facebook.com/
                  </Anchor>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='yellow'>
                    <FiTwitter />
                  </ThemeIcon>
                  <span className='mx-2'>Twitter</span>
                </div>
              </td>
              <td>
                <p>
                  <Anchor href='https://twitter.com/' target='_blank'>
                    https://twitter.com/
                  </Anchor>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='blue'>
                    <FiDribbble />
                  </ThemeIcon>
                  <span className='mx-2'>Dribbble</span>
                </div>
              </td>
              <td>
                <p>
                  <Anchor href='https://dribbble.com/' target='_blank'>
                    https://dribbble.com/
                  </Anchor>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='grape'>
                    <BsBehance />
                  </ThemeIcon>
                  <span className='mx-2'>Behance</span>
                </div>
              </td>
              <td>
                <p>
                  <Anchor href='https://www.behance.net/' target='_blank'>
                    https://www.behance.net/
                  </Anchor>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='green'>
                    <FiYoutube />
                  </ThemeIcon>
                  <span className='mx-2'>YouTube</span>
                </div>
              </td>
              <td>
                <p>
                  <Anchor href='https://www.youtube.com/' target='_blank'>
                    https://www.youtube.com/
                  </Anchor>
                </p>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='bg-white rounded nice-shadow py-4 px-10 mb-10'>
        <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
          Hobbies and Interests
        </h2>
        <Table fontSize='md'>
          <tbody>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='blue'>
                    <VscBug />
                  </ThemeIcon>
                  <span className='mx-2'>My Hobbies</span>
                </div>
              </td>
              <td>
                <p>
                  When an unknown printer took a galley of type
                  and&nbsp;scrambled make&nbsp;a type specimen It has survived
                  not only five centuries.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='grape'>
                    <BsMusicNote />
                  </ThemeIcon>
                  <span className='mx-2'>Favorite Music Bands/Artists</span>
                </div>
              </td>
              <td>
                <p>
                  Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of
                  a Revenge.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='green'>
                    <MdOutlineScreenshotMonitor />
                  </ThemeIcon>
                  <span className='mx-2'>Favorite TV Shows</span>
                </div>
              </td>
              <td>
                <p>
                  Breaking Good, RedDevil, People of Interest, The Running Dead,
                  Found,
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='orange'>
                    <TfiBookmarkAlt />
                  </ThemeIcon>
                  <span className='mx-2'>Favorite Books</span>
                </div>
              </td>
              <td>
                <p>
                  The Crime of the Century, Egiptian Mythology 101, The Scarred
                  Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of
                  Air and Water.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='pink'>
                    <MdOutlineMovie />
                  </ThemeIcon>
                  <span className='mx-2'>Favorite Movies</span>
                </div>
              </td>
              <td>
                <p>
                  Idiocratic, The Scarred Wizard and the Fire Crown, Crime
                  Squad, Ferrum Man.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex items-center'>
                  <ThemeIcon variant='light' size='lg' color='yellow'>
                    <BsBarChartSteps />
                  </ThemeIcon>
                  <span className='mx-2'>Other Activities</span>
                </div>
              </td>
              <td>
                <p>
                  Swimming, Surfing, Scuba Diving, Anime, Photography, Tattoos,
                  Street Art.
                </p>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default AboutProfile;
