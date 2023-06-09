import React, { useContext } from 'react';
import {HiOutlineMail} from "react-icons/hi";
// import icons
import {
  ImFacebook,
  ImInstagram,
  ImBehance,
} from 'react-icons/im';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='hidden xl:flex ml-24'
    >
      <ul className='flex gap-x-4'>
        <li>
          <a href='https://www.facebook.com/anhhhao127' target='_blank'>
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href='http://www.twitter.com' target='_blank'>
            <ImBehance />
          </a>
        </li>
        <li>
          <a href='http://www.instagram.com' target='_blank'>
            <ImInstagram />
          </a>
        </li>
        {/* <li>
          <a href='http://www.youtube.com' target='_blank'>
            <HiOutlineMail/>
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Socials;
