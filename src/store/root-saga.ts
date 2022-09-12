import { all } from "redux-saga/effects";
import weatherSaga from "./weather/weather.saga";

export default function* rootSaga(): Generator {
  yield all([weatherSaga()]);
}
