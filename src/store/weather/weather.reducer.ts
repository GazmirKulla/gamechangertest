import {
  WeatherState,
  WeatherTypes,
  WeatherLoadedAction
} from "./weather.types";

const initState: WeatherState = {
  loading: false,
  selectedCountry: "",
  weather: null,
  countries: [],
  ipData: null
};

const storeReducer = (state = initState, action: any): WeatherState => {
  switch (action.type) {
    case WeatherTypes.LOAD_WEATHER:
      return { ...state, loading: true };

    case WeatherTypes.LOADED_WEATHER: {
      const data = (action as WeatherLoadedAction).payload;
      return {
        ...state,
        weather: data,
        loading: false
      };
    }

    case WeatherTypes.LOADED_COUNTRIES: {
      return {
        ...state,
        countries: action.payload
      };
    }

    case WeatherTypes.LOADED_USER_COUNTRY: {
      return {
        ...state,
        ipData: action.payload
      };
    }

    case WeatherTypes.SELECT_COUNTRY: {
      const { payload } = action;
      return {
        ...state,
        selectedCountry: payload
      };
    }

    default:
      return state;
  }
};

export default storeReducer;
