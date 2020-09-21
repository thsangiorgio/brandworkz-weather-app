import React, { FC } from "react";

import FilterSearch from "./FilterSearch";

const WeatherForecast: FC = () => {
	return (
		<div className="mb-20 p-6 mx-auto text-center">
			<h3 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mx-auto">
				Weather forecast for 16 days
			</h3>
			<FilterSearch />
		</div>
	);
};

export default WeatherForecast;
