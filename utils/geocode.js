const request = require('request');
const geocode = (address, callback) => {
	const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
		address
	)}.json?access_token=${process.env.MAPBOX_API_KEY}&limit=1`;
	request.get({ url: mapboxUrl, json: true }, (error, response) => {
		if (error) {
			callback('Unable to connect to geocoding service!');
		} else if (response.body.features.length == 0) {
			callback('Unable to find location, try another!');
		} else {
			const location = response.body.features[0];
			const { place_name, center } = location;
			const [ longitude, latitude ] = center;
			const locationData = {
				location: place_name,
				latitude: latitude,
				longitude: longitude
			};
			// No error
			callback(undefined, locationData);
		}
	});
};
module.exports = geocode;
