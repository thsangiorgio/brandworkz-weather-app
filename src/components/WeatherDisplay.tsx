import React, { FC } from "react";
import { WeatherData } from "../domain/Weather";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { get16DaysWeather } from "../actions/weatherActions";

interface WeatherProps {
	data: WeatherData;
}

const weatherDetails = (heading: string, dataDetail: string | number) => {
	return (
		<div className="flex items-center">
			<p className="">{heading}</p>
			<p className="ml-2">{dataDetail}</p>
		</div>
	);
};

const WeatherDisplay: FC<WeatherProps> = ({ data }) => {
	const dispatch = useDispatch();

	const celsius = (data.main.temp - 273.15).toFixed(2);

	const history = useHistory();

	const routeChange = () => {
		dispatch(get16DaysWeather(data.name));

		let path = `./${data.name}`;
		history.push(path);
	};

	return (
		<section className="flex items-center justify-center mt-10">
			<div className="rounded bg-white border-gray-200 shadow-md overflow-hidden relative">
				<div className="flex items-center ml-4 ">
					<h1 data-testid="location">
						{data.name} - {data.sys.country}
					</h1>
					<img
						src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
						alt=""
						className="object-cover"
					/>
				</div>
				<div className="m-4">
					<span data-testid="description" className="font-bold">
						{data.weather[0].description}
					</span>
					<span className="block text-gray-800 text-sm">
						temperature {celsius} <sup>&#8451;</sup>
					</span>
					<span data-testid="humidity" className="mt-4 block text-gray-500 text-sm">
						{weatherDetails("humidity", `${data.main.humidity}%`)}
					</span>
					<span data-testid="pressure" className="block text-gray-500 text-sm">
						{weatherDetails("pressure", `${data.main.pressure}%`)}
					</span>
					<span data-testid="wind" className="block text-gray-500 text-sm">
						{weatherDetails("wind", `${data.wind.speed}%`)}
					</span>
				</div>
				<button className="m-4 hover:text-blue-800 text-blue-400" onClick={routeChange}>
					See weather forecast for the next 16 days
				</button>
			</div>
		</section>
	);
};

export default WeatherDisplay;
