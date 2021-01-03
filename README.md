# Gambit challenge

## Problem description

This is a programming challenge designed by [Gambit](https://github.com/gambit-labs/challenge).

The task is to choose one of two options:

- Option 1: Convert the register data into human readable format.
- Option 2: Present the data as it is, in a mobile friendly way.

For the challenge i chose Option 2, which is focused more to designing (UI) specially in a mobile friendly way.

## What language used?

- Reactjs (Hooks)
- Html5
- CSS
  \*Material-UI (designing clean look)
- flex system & grid system for column...
- Firebase (for deploying/hosting)

## What have i done?

I have build a header where is the name of an ultrasonic energy meter(TUF-2000M) and under that is an input, where user can write numbers from 1-100 (index numbers) to get a specific register value.
In the app\_\_subheader (third at the top) i have Time of registery which is taken from live text feed & also nice img of a truck.
Now the main thing: I have put registered values into nice clean boxes using Material-UI design, i have used display:flex system for tasks such as flex-direction, align-items, justify-content, and for having columns i have used display:grid system also for larger sizes i have used Media Queries.

### Coding:

Because of cors errors i'm using https://cors-anywhere.herokuapp.com/ (includes CORS headers in the response).
The data offered from gambit was in txt format i had to convert it, first had to get rid of the new lines: replace(/\n/g, " ") then change the data into an array. Inside the second useEffect i'm setting data into key/values and from there taking value from it and passing to TwoMaps.js where that value is mapped and displayed to screen. Third useEffect setting data to avain/value and from there taking avain to filter with searchTerm(what number user writes to the input) then passing that also to TwoMaps.js.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
