// import { setAlert } from "../store/actions/alertActions";
import React, { FC, useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import isEmpty from "lodash/fp/isEmpty";
import { getWeather, setLoading } from "../actions/weatherActions";

const Search: FC = () => {
	const dispatch = useDispatch();
	const [city, setCity] = useState("");

	const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setCity(event.target.value);
	};
	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		dispatch(setLoading());
		dispatch(getWeather(city));
		setCity("");
	};

	return (
		<div>
			<div>
				<div>
					<form onSubmit={submitHandler}>
						<input
							data-testid="search-input"
							type="text"
							placeholder="Enter city name"
							className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
							value={city}
							onChange={changeHandler}
						/>
						<button
							className={`ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
								isEmpty(city) ? "cursor-not-allowed opacity-50" : ""
							}`}
							disabled={isEmpty(city)}
						>
							Search
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Search;
