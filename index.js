const express = require('express');
const app = express();


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