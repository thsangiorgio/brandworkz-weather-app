import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import {
	GET_WEATHER,
	GET_16_DAYS_WEATHER,
	SET_LOADING,
	SET_ERROR,
} from "./types";
import {
	WeatherAction,
	WeatherData,
	Weather16DaysData,
	WeatherError,
} from "../domain/Weather";

export const getWeather = (
	city: string
): ThunkAction<void, RootState, null, WeatherAction> => {
	return async (dispatch) => {
		try {
			const res = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4a1e06becaf3b399ff7769a8708f38ab`
			);

			if (!res.ok) {
				const resData: WeatherError = await res.json();
				throw new Error(resData.message);
			}

			const resData: WeatherData = await res.json();
			dispatch({
				type: GET_WEATHER,
				payload: resData,
			});
		} catch (err) {
			dispatch({
				type: SET_ERROR,
				payload: err.message,
			});
		}
	};
};

export const get16DaysWeather = (
	city: string
): ThunkAction<void, RootState, null, WeatherAction> => {
	return async (dispatch) => {
		try {
			const res = await fetch(
				`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=758f8993c4db4d5a96b59ddb6c33ca6c`
			);

			if (!res.ok) {
				const resData: WeatherError = await res.json();
				throw new Error(resData.message);
			}

			const resData: Weather16DaysData = await res.json();

			dispatch({
				type: GET_16_DAYS_WEATHER,
				payload: resData,
			});
		} catch (err) {
			dispatch({
				type: SET_ERROR,
				payload: err.message,
			});
		}
	};
};

export const setLoading = (): WeatherAction => {
	return {
		type: SET_LOADING,
	};
};

export const setError = (): WeatherAction => {
	return {
		type: SET_ERROR,
		payload: "",
	};
};
