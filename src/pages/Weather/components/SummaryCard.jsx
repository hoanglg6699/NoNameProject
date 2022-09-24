import styles from '../css/SummaryCard.less';
import React from 'react'
import moment from 'moment';

function SummaryCard({day}) {
  const REACT_APP_ICON_URL = 'https://openweathermap.org/img/wn/'
    // const dayIcon = `${process.env.REACT_APP_ICON_URL + day.weather[0].icon}@2x.png`
    const dayIcon = `${REACT_APP_ICON_URL + day.weather[0].icon}@2x.png`

  return (
    <li className={styles.summaryItems}>
        <div>
            <p>{Math.round(day.main.temp - 273,15)}&deg;C</p>
            <p>
                {day.weather[0].main}
                <img src={dayIcon} alt="" />
            </p>
            <p>{day.weather[0].description}</p>
            <p>{moment(day.dt_txt).format('hh:mm a')}</p>
        </div>
    </li>
  )
}

export default SummaryCard
