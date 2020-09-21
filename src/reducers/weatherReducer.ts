import { WeatherState, WeatherAction } from "../domain/Weather";
import {
	GET_WEATHER,
	GET_16_DAYS_WEATHER,
	SET_LOADING,
	SET_ERROR,
} from "../actions/types";
const initialState: WeatherState = {
	data: null,
	data16days: null,
	loading: false,
	error: "",
};

export default (state = initialState, action: WeatherAction): WeatherState => {
	switch (action.type) {
		case GET_WEATHER:
			return {
				data: action.payload,
				data16days: null,
				loading: false,
				error: "",
			};
		case GET_16_DAYS_WEATHER:
			return {
				data: null,
				data16days: action.payload,
				loading: false,
				error: "",
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
