import { PageContainer } from '@ant-design/pro-layout';
import { useState } from 'react';
import styles from './index.less';
import { TbMapSearch, TbSearch } from 'react-icons/tb';
import Header from './components/Header';
import DetailsCard from './components/DetailsCard';
import SummaryCard from './components/SummaryCard';
import { useIntl } from 'umi';

function Weather() {
  const intl = useIntl();
  const REACT_APP_API_KEY = 'bccfbf2597ac2a1a2b049fb99ec61ba6';
  const API_KEY = REACT_APP_API_KEY;
  const REACT_APP_ICON_URL = 'https://openweathermap.org/img/wn/';
  const REACT_APP_URL = 'http://api.openweathermap.org/data/2.5/forecast?';

  // const API_KEY = process.env.REACT_APP_API_KEY;

  const [noData, setNoData] = useState(
    intl.formatMessage({
      id: 'pages.weather.usestate.nodata',
      defaultMessage: 'No Data Yet!',
    }),
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState(
    intl.formatMessage({
      id: 'pages.weather.usestate.city',
      defaultMessage: 'Unknown location!',
    }),
  );
  // const [weatherIcon, setWeatherIcon] = useState(`${process.env.REACT_APP_ICON_URL}10n@2x.png`);
  const [weatherIcon, setWeatherIcon] = useState(`${REACT_APP_ICON_URL}10n@2x.png`);

  const [dataview, setDataView] = useState('');

  const getWeather = async (location) => {
    setWeatherData([]);
    const howToSearch =
      typeof location === 'string' ? `q=${location}` : `lat:${location[0]}&lon=${location[1]}`;

    try {
      // const res = await fetch(`${process.env.REACT_APP_URL + howToSearch}&appid=${API_KEY}&units=metrc&cnt=5&exclude=hourly,minutely`)

      // const res = await fetch(`${REACT_APP_URL + howToSearch}
      // &appid=${API_KEY}&units=metrc&cnt=5&exclude=hourly,minutely`)

      const res = await fetch(
        `${REACT_APP_URL + howToSearch}&appid=${API_KEY}&units=metrc&cnt=5&exclude=hourly,minutely`,
      );

      const data = await res.json();
      // if (data.cod !== 200) {
      //   setNoData('Location Not Found');
      //   return;
      // }
      if (data.cod == 200) {
        setWeatherData(data);
        setCity(`${data.city.name}, ${data.city.country}`);
        // setWeatherIcon(`${process.env.REACT_APP_ICON_URL + data.list[0].weather[0]["icon"]}@4x.png`)
        setWeatherIcon(`${REACT_APP_ICON_URL + data.list[0].weather[0].icon}@4x.png`);
      } else
        setNoData(
          intl.formatMessage({
            id: 'pages.weather.nodata',
            defaultMessage: 'Location Not Found',
          }),
        );

      // setWeatherData(data)
      // setCity(`${data.city.name}, ${data.city.country}`)
      // // setWeatherIcon(`${process.env.REACT_APP_ICON_URL + data.list[0].weather[0]["icon"]}@4x.png`)
      // setWeatherIcon(`${REACT_APP_ICON_URL + data.list[0].weather[0].icon}@4x.png`)

      setDataView(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log('data', dataview);

  const handleChange = (e) => {
    // const {value} = input.target
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(searchTerm);
  };

  const myIP = (location) => {
    const { latitude, longtitude } = location.coords;
    getWeather([latitude, longtitude]);
  };

  return (
    <PageContainer>
      <div className="container">
        <div className={styles.blur} style={{ top: '20%', right: 0 }}></div>
        <div className={styles.blur} style={{ top: '60%', left: '-6rem' }}></div>
        <div className={styles.content}>
          <div className={styles.formContainer}>
            <div className={styles.name}>
              <div className={styles.logo}>
                {intl.formatMessage({
                  id: 'pages.weather.weatherapp',
                  defaultMessage: 'Weather App',
                })}
              </div>
              <div className={styles.city}>
                <TbMapSearch />
                <p>{city}</p>
              </div>
            </div>
            <div className={styles.search}>
              <h2>
                {intl.formatMessage({
                  id: 'pages.weather.weatherforecast',
                  defaultMessage: 'Weather Forecast',
                })}
              </h2>
              <hr />
              <form className={styles.searchBar} noValidate onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder={intl.formatMessage({
                    id: 'pages.weather.explore',
                    defaultMessage: 'Explore?',
                  })}
                  onChange={handleChange}
                  required
                />
                <button className={styles.SIcon}>
                  <TbSearch
                    onChange={() => {
                      navigator.geolocation.getCurrentPosition(myIP);
                    }}
                  />
                </button>
              </form>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <Header />
            {weatherData.length === 0 ? (
              <div>
                <div className={styles.noData}>
                  <h1>{noData}</h1>
                </div>
              </div>
            ) : (
              <>
                <h1>
                  {intl.formatMessage({
                    id: 'pages.weather.today',
                    defaultMessage: 'Today',
                  })}
                </h1>
                <DetailsCard weatherIcon={weatherIcon} data={weatherData} />
                <h1 className={styles.title}>
                  {intl.formatMessage({
                    id: 'pages.weather.moreon',
                    defaultMessage: 'More On',
                  })} {city}
                </h1>
                <ul className={styles.summary}>
                  {weatherData.list.map((days, index) => {
                    if (index > 0) {
                      return <SummaryCard key={index} day={days} />;
                    }
                  })}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Weather;
