'use strict';

const 
	express = require('express'),
	bodyParser = require('body-parser'),
	chalk = require('chalk'),
	cors = require('cors');
require('dotenv').load();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const hello = (request, response) => {
	response.status(200).send('Welcome !');
};

app.get('/', hello);

app.listen(PORT, () => {
	console.log(chalk.green(`The server is running on ${PORT}`));
});
