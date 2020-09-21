import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import WeatherForecast from "../components/WeatherForecast";

Enzyme.configure({
	adapter: new EnzymeAdapter(),
});
const mockStore = configureMockStore([thunk]);

describe("/WeatherForecast", () => {
	const store = mockStore({
		weatherReducer: { data: "", error: "", loading: false },
		alertReducer: { message: "random message" },
	});

	const wrapper = mount(
		<Provider store={store}>
			<WeatherForecast />
		</Provider>
	);

	it("should render the header", () => {
		expect(wrapper.find("h3").text()).toEqual("Weather forecast for 16 days");
	});

	it("should render FilterSearch Component", () => {
		expect(wrapper.find("FilterSearch").exists()).toBe(true);
	});
});
