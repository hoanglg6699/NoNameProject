import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { changeDayNight } from '../redux/actions';
import styles from '../css/Header.less';
import { Link } from 'react-router-dom';
import lofiLogo from '../assets/icons/lofi-logo.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import DarkLightSwitch from './DarkLightSwitch';

const Header = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const daynight = useSelector((state) => state.modeState);
  const dispatch = useDispatch();

  const mode = daynight;

  const daynightHandler = () => {
    dispatch(changeDayNight(daynight));
  };

  const fullscreenHandler = () => {
    if (!fullscreen) {
      setFullscreen(true);
      const e = document.documentElement;
      e.requestFullscreen();
    } else {
      setFullscreen(false);
      if (!document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }
  };

  return (
    <nav className={styles.wrap}>
      <Link to="/">
        <img src={lofiLogo} alt="" />
      </Link>
      <div className={styles.nav_menu}>
        <div onClick={daynightHandler}>
          <DarkLightSwitch theme={mode} />
        </div>

        <button onClick={fullscreenHandler} className={styles.fullscreenBtn}>
          <FontAwesomeIcon icon={faExpand} />
        </button>
      </div>
    </nav>
  );
};

export default Header;
