// Laod env variables form .env file to process.env
require('dotenv').config();
const readline = require('readline');
const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("What's your address? ", (address) => {
	geocode(address, (error, { latitude, longitude, location }) => {
		if (error) {
			console.log('Error', error);
		} else {
			forecast(latitude, longitude, (error, forecastData) => {
				if (error) {
					console.log('Error', error);
				} else {
					console.log(chalk.green('Location: ' + location));
					console.log(chalk.blue('Forecast: ' + forecastData));
				}
			});
		}
	});
	rl.close();
});
