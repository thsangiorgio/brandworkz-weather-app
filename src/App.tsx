import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import WeatherForecast from "./components/WeatherForecast";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/:city" component={WeatherForecast} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
