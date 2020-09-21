import React, { FC } from "react";

interface ForecastListProps {
	filteredData: any;
}
//I have to put type 'any' while instead it should be 'Weather16DaysDetails'. I couldn't figure out why it screams error:"element[] is not assignable to type...bla bla bla". Would be great if you could tell me why.
const ForecastList: FC<ForecastListProps> = ({ filteredData }) => {
	return filteredData.map((weatherDetail, index) => {
		return (
			<div
				data-testid={`data-${index}`}
				key={index}
				className="rounded bg-white border-gray-200 shadow-md relative m-4"
			>
				<div className="w-full m-4 p-4 text-gray-800 text-sm">
					<h5 data-testid={`datetime-${index}`} className="mt-2">
						{weatherDetail.datetime}
					</h5>
					<p data-testid={`description-${index}`} className="mt-2">
						{weatherDetail.weather.description}
					</p>
					<span data-testid={`min-${index}`} className="block mt-2">
						{weatherDetail.min_temp}
						<sup>&#8451;</sup>
					</span>
					<span data-testid={`max-${index}`} className="block mt-2">
						{weatherDetail.max_temp}
						<sup>&#8451;</sup>
					</span>
				</div>
			</div>
		);
	});
};

export default ForecastList;
