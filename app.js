require('dotenv').config(); // laod env variables form .env file to process.env
const request = require('request');

console.log(process.env);

// const url = 'https://api.darksky.net/forecast/3282dbfba449ef0e498ee412162f44e8/42.3601,-71.0589';

// request.get({ url: url }, (error, response) => {
// 	if (error) {
// 		console.log('ERROR');
// 		console.log(error);
// 	} else {
// 		console.log('RESPONSE........');
// 		const data = JSON.parse(response.body);
// 		console.log('data.currently', data.currently);
// 	}
// });
// darksky.net api key 3282dbfba449ef0e498ee412162f44e8
