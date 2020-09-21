import React, { FC, useState, ChangeEvent } from "react";
import isEmpty from "lodash/fp/isEmpty";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Weather16DaysDetails } from "../domain/Weather";
import ForecastList from "./ForecastList";

const FilterSearch: FC = () => {
	const [temperature, setTemperature] = useState("");
	const weather16DaysData = useSelector(
		(state: RootState) =>
			state.weatherReducer.data16days && state.weatherReducer.data16days.data
	);

	const [filteredData, setFilteredData] = useState<Weather16DaysDetails[] | null>(
		weather16DaysData
	);

	useEffect(() => {
		setFilteredData(weather16DaysData);
	}, [weather16DaysData]);

	const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTemperature(event.target.value);
	};
	const filterMinTemp = (
		weather16DaysData: Weather16DaysDetails[] | null,
		temperature: string
	) => {
		const filteredMinTemp =
			weather16DaysData &&
			weather16DaysData.filter(
				(eachDayData) => eachDayData.min_temp <= parseInt(temperature)
			);

		setFilteredData(filteredMinTemp);
	};

	const filterMaxTemp = (
		weather16DaysData: Weather16DaysDetails[] | null,
		temperature: string
	) => {
		const filteredMaxTemp =
			weather16DaysData &&
			weather16DaysData.filter(
				(eachDayData) => eachDayData.max_temp >= parseInt(temperature)
			);

		setFilteredData(filteredMaxTemp);
	};

	const searchMinTemp = (event: any) => {
		event.preventDefault();
		filterMinTemp(weather16DaysData, temperature);
	};

	const searchMaxTemp = (event: any) => {
		event.preventDefault();
		filterMaxTemp(weather16DaysData, temperature);
	};

	return (
		<div>
			<form className="mt-4 flex items-center justify-center ">
				<input
					data-testid="search-input"
					type="text"
					placeholder="Enter temperature"
					className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
					value={temperature}
					onChange={changeHandler}
				/>
				<button
					className={`ml-4 mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
						isEmpty(temperature) ? "cursor-not-allowed opacity-50" : ""
					}`}
					disabled={isEmpty(temperature)}
					onClick={searchMinTemp}
					data-testid="min-button"
				>
					Min Temperature
				</button>
				<button
					className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
						isEmpty(temperature) ? "cursor-not-allowed opacity-50" : ""
					}`}
					disabled={isEmpty(temperature)}
					onClick={searchMaxTemp}
					data-testid="max-button"
				>
					Max Temperature
				</button>
			</form>
			<div data-test="">
				<div>
					<div>
						<div className="flex flex-wrap items-center text-center">
							{filteredData && <ForecastList filteredData={filteredData} />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterSearch;
