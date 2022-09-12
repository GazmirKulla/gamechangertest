import { Weather } from "../../store/weather/weather.types";
import axios from "../axiosConfig";

const appId = "b432a9f2a45edaaa600331e48b65d18d";

const getWeather = async (payload): Promise<Weather[]> => {
  const url = `?q=${payload.country}&APPID=${appId}`;
  const { data } = await axios({
    method: "get",
    url
  });

  return data;
};

export { getWeather };
