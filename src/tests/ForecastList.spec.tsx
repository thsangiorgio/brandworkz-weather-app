import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import ForecastList from "../components/ForecastList";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
Enzyme.configure({
	adapter: new EnzymeAdapter(),
});
const mockStore = configureMockStore([thunk]);

describe("/ForecastList", () => {
	const store = mockStore({
		weatherReducer: { data: "", data16days: "", error: "", loading: false },
		alertReducer: { message: "random message" },
	});

	const data = [
		{
			weather: {
				icon: "icon",
				description: "random description",
			},
			datetime: "date time",
			min_temp: 12,
			max_temp: 15,
		},
		{
			weather: {
				icon: "icon2",
				description: "another description",
			},
			datetime: "date time2",
			min_temp: 13,
			max_temp: 20,
		},
	];

	const wrapper = mount(
		<Provider store={store}>
			<ForecastList filteredData={data} />
		</Provider>
	);

	it("should display weather forecast list", () => {
		data.map((eachForecastData, index) => {
			expect(wrapper.find(`[data-testid="datetime-${index}"]`).text()).toEqual(
				eachForecastData.datetime
			);

			expect(wrapper.find(`[data-testid="description-${index}"]`).text()).toEqual(
				eachForecastData.weather.description
			);

			expect(wrapper.find(`[data-testid="min-${index}"]`).text()).toEqual(
				`${eachForecastData.min_temp}℃`
			);

			expect(wrapper.find(`[data-testid="max-${index}"]`).text()).toEqual(
				`${eachForecastData.max_temp}℃`
			);
		});
	});
});
