import axiosOriginal from "axios";

const getCountries = async (): Promise<any> => {
  const { data } = await axiosOriginal({
    method: "get",
    url: "https://restcountries.com/v3.1/all"
  });
  return data;
};

const getUserCountry = async (): Promise<any> => {
  const { data } = await axiosOriginal({
    method: "get",
    url: "http://ip-api.com/json"
  });
  return data;
};




export { getCountries, getUserCountry };
