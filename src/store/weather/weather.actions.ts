import { WeatherTypes, WeatherLoadAction } from "./weather.types";

const loadWeather = ({ country }): WeatherLoadAction => {
  return {
    type: WeatherTypes.LOAD_WEATHER,
    payload: { country }
  };
};

const loadCountries = () => {
  return {
    type: WeatherTypes.LOAD_COUNTRIES
  };
};

const selectCountry = ({ country }) => {
  return {
    type: WeatherTypes.SELECT_COUNTRY,
    payload: country
  };
};

const loadUserCountry = () => {
  return {
    type: WeatherTypes.LOAD_USER_COUNTRY
  };
};

export { loadWeather, loadCountries, selectCountry, loadUserCountry };
