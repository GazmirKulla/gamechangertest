export interface WeatherState {
  loading: boolean;
  selectedCountry?: string;
  weather?: Weather | null;
  countries?: any;
  ipData?: any;
}

export enum WeatherTypes {
  LOAD_WEATHER = "LOAD_WEATHER",
  LOADED_WEATHER = "LOADED_WEATHER",
  LOAD_COUNTRIES = "LOAD_COUNTRIES",
  LOADED_COUNTRIES = "LOADED_COUNTRIES",
  SELECT_COUNTRY = "SELECT_COUNTRY",
  LOAD_USER_COUNTRY = "LOAD_USER_COUNTRY",
  LOADED_USER_COUNTRY = "LOADED_USER_COUNTRY"
}

export interface WeatherLoadAction {
  type: string;
  payload: {
    country: string;
  };
}

export interface WeatherLoadedAction {
  type: string;
  payload: Weather;
}

export interface Weather {
  coord: Coord;
  weather?: WeatherEntity[] | null;
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
export interface Coord {
  lon: number;
  lat: number;
}
export interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface Wind {
  speed: number;
  deg: number;
}
export interface Clouds {
  all: number;
}
export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}
