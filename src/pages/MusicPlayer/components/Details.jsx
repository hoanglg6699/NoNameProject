import React from 'react';
import styles from '../css/Details.less';
import TimeSlider from 'react-input-slider';

function Details(props) {
  return (
    <div>
      <div id={styles.playing_details}>
        <div className={styles.details_thumbnail}>
          <img src={props.songs.avatar} className={props.isPlaying ? styles.details_img_play : styles.details_img_pause} alt="" />
        </div>
        <h3 className={styles.details_title}>{props.songs.title}</h3>
        <h4 className={styles.details_artist}>{props.songs.artist}</h4>
      </div>
      {/* /////////////////////////////////////////////////////////// */}
      <TimeSlider
        axis="x"
        xmax={props.duration}
        x={props.currentTime}
        onChange={props.handleTimeSliderChange}
        styles={{
          track: {
            position: "relative",
            height: '5px',
            margin: '0px auto 12px',
            backgroundColor: 'rgb(221, 226, 232)',
            borderRadius: '20px',
            cursor: 'pointer',
          },
          active: {
            width: "0%",
            height: "inherit",
            backgroundColor: "rgb(49, 224, 59)",
            borderRadius: "inherit",
          },
          thumb: {
            position: "absolute",
            top: '50%',
            left: '0px',
            width: '19px',
            height: '19px',
            backgroundColor: 'rgb(49, 224, 59)',
            border: '3px solid rgb(255, 255, 255)',
            borderRadius: '50%',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 8px 0px',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
          },
        }}
      />
      {/* <div className={styles.timeline}>
        <div className={styles.circle}></div>
        <div className={styles.percent}></div>
      </div> */}
      <div className={styles.time}>
        <div className={styles.left}>{props.fmtMSS(props.currentTime)}</div>
        <div className={styles.right}>{props.fmtMSS(props.duration)}</div>
      </div>
    </div>
  );
}

export default Details;
