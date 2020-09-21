This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Overview:

### This weather app has 3 main features:

1. On the home page, when user enter city name on search input, it will render the weather data of the day for that city. If any error happen like city name not found, an alert box will be displayed with the error message.
2. When seeing the weather data of the day, user has the option to click on a link that redirect user to another page where user can see 16 days weather forecast for that same city.
3. On the second page, user has the option to filter the min temperature and max temperature. This will return result that match requirement of the task.

### This app is built with:

1. React Hooks, Redux, Typescript
2. Lodash fp
3. Jest, Enzyme for test
4. TDD when applicable.
5. Clean code
6. Functional programming

# How to run the app:

1. Install the latest version of node
2. Run `yarn install`
3. I had to create an account on [Openweathermap](https://openweathermap.org/current) and [Weatherbit](https://www.weatherbit.io/). The reason I used both of these APIs is because I started with the Openweathermap not knowing that the 16 days api is only for paid subscription. Only when I got to the work on the second page that I found out so I had to find another free API for 16 days forecast and I found weatherbit. When you create an account with them, you will receive a API key in your account. Just so you don't have to go through the same process and wasting time waiting for the API to be activated( you need to wait around 30 minutes after creating for the API to be activated), I have put the API key directly on the url instead of putting them in a dotenv file and fetch it with `process.env.API_KEY`.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner
