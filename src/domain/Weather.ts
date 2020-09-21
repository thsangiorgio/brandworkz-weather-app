import {
	GET_WEATHER,
	GET_16_DAYS_WEATHER,
	SET_LOADING,
	SET_ERROR,
} from "../actions/types";
export interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface WeatherData {
	cod: number;

	main: {
		humidity: number;
		pressure: number;
		temp: number;
		temp_max: number;
		temp_min: number;
	};
	name: string;
	sys: {
		country: string;
	};

	weather: Weather[];
	wind: {
		speed: number;
	};
}

export interface Weather16DaysDetails {
	weather: {
		icon: string;
		description: string;
	};
	datetime: string;
	min_temp: number;
	max_temp: number;
}
export interface Weather16DaysData {
	city_name: string;
	data: Array<Weather16DaysDetails>;
}

export interface WeatherState {
	data: WeatherData | null;
	data16days: Weather16DaysData | null;
	loading: boolean;
	error: string;
}

export interface WeatherError {
	cod: string;
	message: string;
}

interface GetWeatherAction {
	type: typeof GET_WEATHER;
	payload: WeatherData;
}

interface GetWeather16DaysAction {
	type: typeof GET_16_DAYS_WEATHER;
	payload: Weather16DaysData;
}

interface SetLoadingAction {
	type: typeof SET_LOADING;
}

interface SetErrorAction {
	type: typeof SET_ERROR;
	payload: string;
}

export type WeatherAction =
	| GetWeatherAction
	| GetWeather16DaysAction
	| SetLoadingAction
	| SetErrorAction;
