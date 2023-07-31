import { Anchor, ScrollArea, Table, ThemeIcon } from '@mantine/core';
import { BsBehance, BsPhone } from 'react-icons/bs';
import {
  FiDribbble,
  FiExternalLink,
  FiFacebook,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi';
import { MdDriveFileRenameOutline, MdOutlineCake } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

function AboutGroup() {
  return (
    <>
      <div className='bg-white rounded shadow-nice py-4 px-10 mb-10'>
        <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
          Contact Info
        </h2>
        <ScrollArea offsetScrollbars>
          <Table fontSize='md' className='min-w-[max-content]'>
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
                    <ThemeIcon variant='light' size='lg' color='orange'>
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
                    <ThemeIcon variant='light' size='lg' color='pink'>
                      <MdOutlineCake />
                    </ThemeIcon>
                    <span className='mx-2'>Created:</span>
                  </div>
                </td>
                <td>
                  <p>January 1, 1998</p>
                </td>
              </tr>
            </tbody>
          </Table>
        </ScrollArea>
      </div>
      <div className='bg-white rounded shadow-nice py-4 px-10 mb-16'>
        <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
          Social Media Information
        </h2>
        <ScrollArea offsetScrollbars>
          <Table fontSize='md' className='min-w-[max-content]'>
            <tbody>
              <tr>
                <td>
                  <div className='flex items-center'>
                    <ThemeIcon variant='light' size='lg' color='orange'>
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
        </ScrollArea>
      </div>
    </>
  );
}

export default AboutGroup;
