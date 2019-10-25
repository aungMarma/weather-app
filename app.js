require('dotenv').config(); // laod env variables form .env file to process.env
const request = require('request');

const key = process.env.DARK_SKY_NET_API_KEY;
const url = `https://api.darksky.net/forecast/${key}/42.3601,-71.0589?lang=bn`;

request.get({ url: url, json: true }, (error, response) => {
	if (error) {
		console.log('ERROR...');
		console.log(error);
	} else {
		console.log('RESPONSE........');
		const { body } = response;
		console.log(body);
	}
});
