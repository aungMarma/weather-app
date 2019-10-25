console.log('Starting...');

// Asynchronous codes
setTimeout(function() {
	// console.log(this); // Timeout { ...}
	console.log('2 seconds timer');
}, 2000); // 3 SECONDS
setTimeout(() => {
	// console.log(this); // {}
	console.log('0 seconds timer');
}, 0);

console.log('Stopping');

// darksky.net api key 3282dbfba449ef0e498ee412162f44e8
