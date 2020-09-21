import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Home from "../components/Home";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

Enzyme.configure({
	adapter: new EnzymeAdapter(),
});
const mockStore = configureMockStore([thunk]);

describe("/Home", () => {
	const store = mockStore({
		weatherReducer: { data: "", error: "", loading: false },
		alertReducer: { message: "random message" },
	});

	const wrapper = mount(
		<Provider store={store}>
			<Home />
		</Provider>
	);

	it("should render the header", () => {
		expect(wrapper.find('[data-testid="header"]').text()).toEqual("WEATHER APP");
	});

	it("should render Search Component", () => {
		expect(wrapper.find("Search").exists()).toBe(true);
	});
});
