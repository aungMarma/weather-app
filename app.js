require('dotenv').config(); // laod env variables form .env file to process.env
const request = require('request');

const darkskyKey = process.env.DARK_SKY_NET_API_KEY;
const mapboxKey = process.env.MAPBOX_API_KEY;

const urlDarksky = `https://api.darksky.net/forecast/${darkskyKey}/`; //42.3601,-71.0589`;

// request.get({ url: urlDarksky, json: true }, (error, response) => {
// 	if (error) {
// 		console.log('ERROR...');
// 		console.log(error);
// 	} else {
// 		console.log('RESPONSE........');
// 		const { body } = response;
// 		console.log(body);
// 	}
// });

const place = 'Los Angeles';
const urlGeocode = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${mapboxKey}&limit=1`;
request.get({ url: urlGeocode, json: true }, (error, response) => {
	if (error) {
		console.log('ERROR...');
		console.log(error);
	} else {
		const { body } = response;
		const address = body.features[0];
		const { place_name, center } = address;
		const latitude = center[1];
		const longitude = center[0];
		// get weather info with the coordinates
		const url = urlDarksky + latitude + ',' + longitude;
		request.get({ url: url, json: true }, (error, response) => {
			if (error) {
				console.log('ERROR...');
				console.log(error);
			} else {
				console.log('RESPONSE........');
				const { body } = response;
				console.log(body.currently);
			}
		});
	}
});
