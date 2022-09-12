import React from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { formatTemp } from "./utils";
import {
  loadWeather,
  loadCountries,
  selectCountry,
  loadUserCountry
} from "../../store/weather/weather.actions";
import { WeatherWrapper } from "./style";

const Weather = () => {
  const dispatch = useDispatch();

  const { selectedCountry, countries, weather, ipData } = useSelector(
    (state: RootStateOrAny) => state.weather
  );

  const changeCountry = (e) => {
    dispatch(selectCountry({ country: e.target.value }));
  };

  React.useEffect(() => {
    selectedCountry && dispatch(loadWeather({ country: selectedCountry }));
  }, [dispatch, selectedCountry, ipData]);

  React.useEffect(() => {
    dispatch(loadCountries());
    if (!selectedCountry) {
      dispatch(loadUserCountry());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <WeatherWrapper>
      <h2>Select a Country</h2>
      <select
        className="countrySelect"
        onChange={(e) => changeCountry(e)}
        defaultValue="defValue"
      >
        <option disabled hidden value="defValue">
          Select
        </option>
        {countries.length > 0 &&
          countries
            .filter((x) => x.capital)
            .map(({ area, name, capital, population }) => (
              <option key={area + population} value={capital[0]}>
                {name.common}
              </option>
            ))}
      </select>
      {weather && (
        <div className="sections">
          <Section
            title="Temprature"
            iconUrl="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-temperature-spring-flatart-icons-outline-flatarticons.png"
          >
            <p>
              Minimum: {formatTemp(weather.main.temp_min)} <br />
              Maximum: {formatTemp(weather.main.temp_max)}
            </p>
          </Section>
          <Section
            title="Wind"
            iconUrl="https://img.icons8.com/wired/64/000000/wind.png"
          >
            <p>
              Speed: {weather.wind.speed} m/s <br />
              Direction: {weather.wind.deg} deg
            </p>
          </Section>
          <Section
            title="Humidity"
            iconUrl="https://img.icons8.com/external-dreamstale-lineal-dreamstale/64/000000/external-humidity-weather-dreamstale-lineal-dreamstale.png"
          >
            {weather.main.humidity} %
          </Section>
          <Section
            title="Pressure"
            iconUrl="https://img.icons8.com/ios/100/000000/pressure.png"
          >
            {weather.main.pressure} hPa
          </Section>
        </div>
      )}
    </WeatherWrapper>
  );
};

export const Section = ({ title, iconUrl, children }) => {
  return (
    <section>
      <div>
        <img alt="Weather icon" src={iconUrl} width={40} height={40} />
      </div>
      <h3 className="text-grey">{title}</h3>
      <div>{children}</div>
    </section>
  );
};

export default Weather;
