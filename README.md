
## Project Overview:

The project is a COVID-19 contact management app built using React and TypeScript. 

## Prerequisites:

1. Clone the Repository first.
2. Make sure you have Node.js installed on your machine.
3. Ensure you have the necessary dependencies installed by running npm install or yarn install.

## Running the App

### To run the app, follow these steps:

1. Navigate to the project root directory.
2. Run the command npm start or yarn start (depending on your package manager).
3. Open your web browser and navigate to http://localhost:3000.
   
The app should now be running and accessible in your web browser.

## API Endpoints

### The app uses the following API endpoints:


World wide data of cases: https://disease.sh/v3/covid-19/all

This API endpoint returns the covid cases data like total cases, total deaths and total recovered.

Country Specific data of cases: https://disease.sh/v3/covid-19/countries

This API return the covid cases data per country, data like active cases, country population, total recovered, deaths etc.

Graph data for cases with date:
https://disease.sh/v3/covid-19/historical/all?lastdays=all

This API returns the suitable covid related data like cases, recovered and deaths data date wise perfect for the graph visualisation.

