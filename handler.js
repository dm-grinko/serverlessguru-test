'use strict';

exports.graphql = (event, context, callback) => {
	console.log('event', event);
	console.log('Received event {}', JSON.stringify(event, 3));

	const consumerKey = event.arguments.consumer_key;
	console.log('consumerKey', consumerKey);
	const consumerSecret = event.arguments.consumer_secret;
	console.log('consumerSecret', consumerSecret);

	console.log('Got an Invoke Request.');
	switch (event.field) {
		case 'helloWorld': {
			callback(null, 'Hello world');
			break;
		}

		default: {
			callback(`Unknown field, unable to resolve ${event.field}`, null);
			break;
		}
	}
};
