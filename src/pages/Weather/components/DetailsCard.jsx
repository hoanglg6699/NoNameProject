import moment from 'moment';
import React from 'react';
import styles from '../css/DetailsCard.less';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { IoWater } from 'react-icons/io5';
import { FaTemperatureLow, FaTemperatureHigh } from 'react-icons/fa';
import { BsClouds } from 'react-icons/bs';
import { useIntl } from 'umi';

function DetailsCard({ weatherIcon, data }) {
  const intl = useIntl();
  const { clouds, main, weather } = data.list[0];
  return (
    <div className={styles.details}>
      <div className={styles.clouds}>
        <p className={styles.celsius}>{Math.round(main.temp - 273, 15)}&deg;C</p>
        <div className={styles.cloudsIcon}>
          {weather[0].main}
          <img src={weatherIcon} alt="" />
        </div>
        <div className={styles.des}>{weather[0].description}</div>
        <div className={styles.time}>{moment().format('dddd DD MMM YYYY')}</div>
      </div>
      <div className={styles.moreInfo}>
        <div>
          <TbTemperatureCelsius />
          <p>
            {intl.formatMessage({
              id: 'pages.weather.detailscard.realfeel',
              defaultMessage: 'RealFeel',
            })}
            : {Math.round(main.feels_like - 273, 15)}&deg;C
          </p>
        </div>
        <div>
          <IoWater />
          <p>
            {intl.formatMessage({
              id: 'pages.weather.detailscard.humidity',
              defaultMessage: 'Humidity',
            })}
            : {main.humidity}%
          </p>
        </div>
        <div>
          <BsClouds />
          <p>
            {intl.formatMessage({
              id: 'pages.weather.detailscard.cloudcover',
              defaultMessage: 'Cloud Cover',
            })}
            : {clouds.all}{' '}
          </p>
        </div>
        <div>
          <FaTemperatureLow />
          <p>
            {intl.formatMessage({
              id: 'pages.weather.detailscard.mintemp',
              defaultMessage: 'Min Temp',
            })}
            : {Math.round(main.temp_min - 273, 15)}&deg;C
          </p>
        </div>
        <div>
          <FaTemperatureHigh />
          <p>
            {intl.formatMessage({
              id: 'pages.weather.detailscard.maxtemp',
              defaultMessage: 'Max Temp',
            })}
            : {Math.round(main.temp_max - 273, 15)}&deg;C
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;
