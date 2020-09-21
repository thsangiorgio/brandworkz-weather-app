import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Search from "../components/Search";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

Enzyme.configure({
	adapter: new EnzymeAdapter(),
});

const mockStore = configureMockStore([thunk]);
describe("/Search", () => {
	const store = mockStore({});
	const wrapper = mount(
		<Provider store={store}>
			<Search />
		</Provider>
	);

	it("should display the search input and button", () => {
		expect(wrapper.find("input").exists()).toBe(true);
		expect(wrapper.find("button").exists()).toBe(true);
	});

	it("should disabled the search button by default", () => {
		expect(wrapper.find("button").prop("disabled")).toBe(true);
	});

	describe("when any answer is given", () => {
		beforeEach(() => {
			wrapper.find("input").simulate("change", { target: { value: "test" } });
		});

		it("should change the target value", () => {
			expect(wrapper.find("input").prop("value")).toBe("test");
		});

		it("should enable the button", () => {
			expect(wrapper.find("button").prop("disabled")).toBe(false);
		});
	});
});
