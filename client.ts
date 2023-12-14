import * as http from "http";

const options: http.RequestOptions = {
	hostname: "127.0.0.1",
	port: 3000,
	method: "GET",
};

console.log(`Listening on port ${options.port}...`);

const req = http.request(options, (res: http.IncomingMessage) => {
	let data = "";

	res.on("data", (chunk: Buffer) => {
		data += chunk;
	});

	res.on("end", () => {
		console.log(`${data}\t${res.statusCode}`);
	});
});

req.end();
