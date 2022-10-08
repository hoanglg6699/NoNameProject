import React, { useState, useRef, useEffect } from 'react';
import styles from '../css/Player.less';
import Controls from './Controls';
import Details from './Details';
import { useIntl } from 'umi';

function Player(props) {
  const intl = useIntl();
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [volume, setVolume] = useState(0.4);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const handleLoadedData = () => {
    setDuration(audioEl.current.duration);
    if (isPlaying) audioEl.current.play();
  };

  const handleTimeSliderChange = ({ x }) => {
    audioEl.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlaying) {
      setIsPlaying(true);
      audioEl.current.play();
    }
  };

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp += 1;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp -= 1;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  const handleEnd = () => {
    const randomSong = Math.floor(Math.random() * props.songs.length);
    if (isRandom && !isLooping) {
      props.setCurrentSongIndex(randomSong);
    } else if (isLooping && !isRandom) {
      props.setCurrentSongIndex(props.currentSongIndex);
    } else if(isLooping && isRandom) {
      props.setCurrentSongIndex(props.currentSongIndex);
    } else if (props.currentSongIndex === props.songs.length - 1) {
      return props.setCurrentSongIndex(0);
    } else {
      SkipSong();
    }
  };

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (s > 9 ? ':' : ':0') + ~~s;
  };

  const handleVolume = (q) => {
    setVolume(q);
    audioEl.current.volume = q;
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <audio
          onLoadedData={handleLoadedData}
          onTimeUpdate={() => setCurrentTime(audioEl.current.currentTime)}
          onEnded={() => handleEnd(false)}
          src={props.songs[props.currentSongIndex].mp3}
          ref={audioEl}
        />
        <Details
          x={currentTime}
          handleTimeSliderChange={handleTimeSliderChange}
          duration={duration}
          currentTime={currentTime}
          isPlaying={isPlaying}
          songs={props.songs[props.currentSongIndex]}
          fmtMSS={fmtMSS}
        />
        <Controls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong}
          setIsRandom={setIsRandom}
          setIsLooping={setIsLooping}
          isLooping={isLooping}
          isRandom={isRandom}
          handleVolume={handleVolume}
          volume={volume}
        />
        <p className={styles.next_song_nextup}>
          {intl.formatMessage({
            id: 'pages.musicplayerv2.player.nextup',
            defaultMessage: 'Next Up',
          })}
          {':'}
        </p>
        <div className={styles.next_song_title}>{props.songs[props.nextSongIndex].title}</div>
        <div className={styles.next_song_artist}>{intl.formatMessage({
            id: 'pages.musicplayerv2.player.by',
            defaultMessage: 'By',
          })}{': '}{props.songs[props.nextSongIndex].artist}</div>
      </div>
    </div>
  );
}

export default Player;
