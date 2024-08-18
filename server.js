const http = require('https');

const options = {
	method: 'GET',
	hostname: 'anime-streaming.p.rapidapi.com',
	port: null,
	path: '/latest-anime',
	headers: {
		'x-rapidapi-key': '1c1438c1d9msh979fa7f217b0005p186e0fjsn5902434cfcb1',
		'x-rapidapi-host': 'anime-streaming.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();