import React from 'react';
import styles from '../index.less';
import amee from '../assets/images/01.jpg';
import {
  PauseCircleOutlined,
  PlayCircleOutlined,
  RetweetOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  SwapOutlined,
} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Navbar() {
  // 1. thêm số 0 vào đằng trước các số 0 đến 9
  function addZero(number) {
    if (number >= 0 && number <= 9) {
      return `0${number}`;
    }
    return number;
  }

  // 2. chuyển đổi giây thành phút và format lại
  function convertSecondsToMinutes(timeType, element = '') {
    let seconds = 0;
    if (timeType === 'currentTime') {
      seconds = element.currentTime.toFixed(0);
    } else if (timeType === 'duration') {
      seconds = element.duration.toFixed(0);
    } else {
      seconds = timeType.toFixed(0);
    }
    const minutes = Math.trunc(seconds / 60);
    return `${addZero(minutes)}:${addZero(seconds - minutes * 60)}`;
  }

  // 3. tối ưu việc random để 1 bài hát không lặp lại cho đến đã phát hết danh sách bài hát
  // let random = [];
  // function randomOptimization(arr) {
  //   const max = arr.length;
  //   let numberRandom = Math.floor(Math.random() * max);

  //   if (random.length >= arr.length) {
  //     random = [];
  //   }

  //   while (random.find((num) => numberRandom == num) !== undefined) {
  //     numberRandom = Math.floor(Math.random() * max);
  //   }

  //   random.push(numberRandom);
  //   return numberRandom;
  // }

  

  return (
    <div className={styles.body}>
      {/* <main> */}
      <div id={styles.playing}>
        <div className={styles.thumbnail}>
          <img src={amee} alt="amee" className={styles.img}/>
        </div>
        <p className={styles.song}>mama boy</p>
        <p className={styles.singer}>amee</p>
        <div className={styles.timeline}>
          <div className={styles.circle}></div>
          <div className={styles.percent}></div>
        </div>

        <div className={styles.time}>
          <div className={styles.left}>00:00</div>
          <div className={styles.right}>03:43</div>
        </div>

        <div className={styles.controls}>
          <SwapOutlined className={styles.random} />
          {/* <FontAwesomeIcon icon="fa-solid fa-shuffle" className={styles.random}/> */}
          <StepBackwardOutlined className={styles.backward} />
          <PlayCircleOutlined className={styles.media && styles.play && styles.active} />
          <PauseCircleOutlined className={styles.media && styles.pause} />
          <StepForwardOutlined className={styles.forward} />
          <RetweetOutlined className={styles.loop} />
        </div>
      </div>
      <div id={styles.playlist}>
      {/* <CaretRightOutlined /> */}
      </div>
      {/* </main> */}
    </div>
  );
}

export default Navbar;
