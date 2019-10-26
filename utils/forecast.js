const request = require('request');
const forecast = (latitude, longitude, callback) => {
	const darkskyUrl = `https://api.darksky.net/forecast/${process.env.DARK_SKY_NET_API_KEY}/${latitude},${longitude}`;
	request.get({ url: darkskyUrl, json: true }, (error, response) => {
		if (error) {
			callback('Unable to connect to weather service!');
		} else if (response.body.error) {
			callback('Unable to find location!');
		} else {
			const { body } = response;
			const { currently, daily } = body;
			let forecastStr = daily.data[0].summary;
			forecastStr += " It's currently " + currently.temperature + ' degrees out.';
			forecastStr += ' There is a ' + currently.precipProbability + '% of rain.';
			callback(undefined, forecastStr);
		}
	});
};
module.exports = forecast;
