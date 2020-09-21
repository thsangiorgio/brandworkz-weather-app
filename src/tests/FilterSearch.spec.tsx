import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import FilterSearch from "../components/FilterSearch";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

Enzyme.configure({
	adapter: new EnzymeAdapter(),
});

const mockStore = configureMockStore([thunk]);
describe("/FilterSearch", () => {
	const store = mockStore({
		weatherReducer: { data: "", data16days: "", error: "", loading: false },
		alertReducer: { message: "random message" },
	});
	const wrapper = mount(
		<Provider store={store}>
			<FilterSearch />
		</Provider>
	);

	it("should display the search input and button", () => {
		expect(wrapper.find("input").exists()).toBe(true);
		expect(wrapper.find("button").exists()).toBe(true);
	});

	it("should disabled the search button by default", () => {
		expect(wrapper.find('[data-testid="min-button"]').prop("disabled")).toBe(true);
		expect(wrapper.find('[data-testid="min-button"]').prop("disabled")).toBe(true);
	});

	describe("when a temperature is given", () => {
		beforeEach(() => {
			wrapper.find("input").simulate("change", { target: { value: "9" } });
		});

		it("should change the target value", () => {
			expect(wrapper.find("input").prop("value")).toBe("9");
		});

		it("should enable the button", () => {
			expect(wrapper.find('[data-testid="min-button"]').prop("disabled")).toBe(false);
			expect(wrapper.find('[data-testid="min-button"]').prop("disabled")).toBe(false);
		});
	});
});
