import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import WeatherDisplay from "../components/WeatherDisplay";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
Enzyme.configure({
	adapter: new EnzymeAdapter(),
});
const mockStore = configureMockStore([thunk]);

describe("/WeatherDisplay", () => {
	const store = mockStore({
		weatherReducer: { data: "", error: "", loading: false },
		alertReducer: { message: "random message" },
	});

	const data = {
		cod: 123,
		main: {
			humidity: 12,
			pressure: 13,
			temp: 14,
			temp_max: 16,
			temp_min: 5,
		},
		name: "city",
		sys: { country: "england" },
		weather: [
			{
				id: 123,
				main: "random word",
				description: "random description",
				icon: "icon",
			},
		],
		wind: { speed: 12 },
	};

	const wrapper = mount(
		<Provider store={store}>
			<WeatherDisplay data={data} />
		</Provider>
	);

	it("should display weather details", () => {
		expect(wrapper.find('[data-testid="location"]').text()).toEqual(
			"city - england"
		);
		expect(wrapper.find('[data-testid="description"]').text()).toEqual(
			"random description"
		);
		expect(wrapper.find('[data-testid="humidity"]').text()).toEqual("humidity12%");
		expect(wrapper.find('[data-testid="pressure"]').text()).toEqual("pressure13%");
		expect(wrapper.find('[data-testid="wind"]').text()).toEqual("wind12%");
		expect(wrapper.find("button").text()).toEqual(
			"See weather forecast for the next 16 days"
		);
	});
});
