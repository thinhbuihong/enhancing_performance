// process.env.UV_THREADPOOL_SIZE = 1; //1 thread per cluster

const cluster = require('cluster');
const crypto = require('crypto')

if (cluster.isMaster) {
	const numberOfCluster = 4
	for (let i = 0; i < numberOfCluster; i++) {
		cluster.fork();
	}
} else {
	const express = require('express');
	const app = express();

	// function doWork(duration) {
	// 	const start = Date.now();
	// 	while (Date.now() - start < duration) { }
	// }

	// const start = Date.now()
	// crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
	// 	console.log("1:",Date.now()-start);
	// })

	app.get('/', (req, res) => {
		// doWork(10000)
		crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
			res.send('hi there')
		})
	})

	app.get('/fast', (req, res) => {
		res.send('this was fast')
	})

	app.listen(3000);
	console.log("sever start",);
}