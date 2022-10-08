import React, { useEffect, useState } from 'react';
import styles from '../index.less';
import songs from '../songs';
import Player from './Player';
import Playlist from './Playlist';

function Navbar() {
  const [songlist] = useState(songs);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songlist.length - 1) {
        return 0;
      }
      return currentSongIndex + 1;
    });
  }, [currentSongIndex]);

  return (
    <div className={styles.body}>
      <div id={styles.playing}>
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songlist}
        />
      </div>
      <div id={styles.playlist}>
        <Playlist
          songs={songlist}
          setCurrentSongIndex={setCurrentSongIndex}
          currentSongIndex={currentSongIndex}
        />
      </div>
    </div>
  );
}

export default Navbar;
