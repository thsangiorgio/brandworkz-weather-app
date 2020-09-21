import React, { FC } from "react";
import Search from "./Search";
import WeatherDisplay from "./WeatherDisplay";
import Alert from "./Alert";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setAlert } from "../actions/alertAction";
import { setError } from "../actions/weatherActions";

const Home: FC = () => {
	const dispatch = useDispatch();
	const weatherData = useSelector(
		(state: RootState) => state.weatherReducer.data
	);
	const loading = useSelector((state: RootState) => state.weatherReducer.loading);
	const error = useSelector((state: RootState) => state.weatherReducer.error);
	const alertMsg = useSelector((state: RootState) => state.alertReducer.message);

	return (
		<div className="text-center mb-20">
			<div className="inputs w-full max-w-2xl p-6 mx-auto">
				<h3
					data-testid="header"
					className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4"
				>
					WEATHER APP
				</h3>
				<Search />
				{loading ? (
					<h3>Loading...</h3>
				) : (
					weatherData && <WeatherDisplay data={weatherData} />
				)}
				{alertMsg && (
					<Alert message={alertMsg} onClose={() => dispatch(setAlert(""))} />
				)}
				{error && <Alert message={error} onClose={() => dispatch(setError())} />}
			</div>
		</div>
	);
};

export default Home;
