# Data by Daylight

This project is hosted on [firebase](https://data-by-daylight.web.app). It is not complete; however,\
there is progress in each of the main categories: data collection, data interpretation, and data representation.

## The Project

Data by Daylight is broken down into three categories: data collection, data interpretation, and data representation.

### Data Collection
Screenshots of scoreboards have been collected over the entirety of the Spring 2022 quarter.\
It is currently stored on Google Drive.

### Data Interpretation
Currently, I am not confident enough in my recognition software to depend on it for data collection.\
I have reached out to the creator of [Dead by Daylight Twitch Extension](https://dbdtwitch.com/) for advice.\
In the meantime, I have manually written the data found in the stacked bar chart found on the website.

### Data Representation
Data is represented as a stacked bar chart. It currently only represents data for survivors.\
The logic isn't quite the same for killer perks, given that it is possible to draw as a killer,\
so there is still work to be done. Additionally, because all my current data comes from the same source/player,\
the collected data would be incredibly redundant. It is laborious to create a new "build" of perks\
every game, so this data would be best represented once image recognition is fully fleshed out,\
allowing for more diversity.

## NPM Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Firebase Scripts

In the project directory, you can run:

### `firebase deploy`

Deploys the current build to the firebase [hosted website](https://data-by-daylight.web.app).