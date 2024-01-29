require('dotenv').config()
console.log('NODE_ENV', process.env.NODE_ENV);

const express = require('express');
const express_enforces_ssl = require('express-enforces-ssl');
const sequelize = require('./sequelize');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

const app = express();

// vvvvvvvvvvvvvvvvvv
// DO NOT REMOVE

// You will NOT see changes in the localhost (dev) environment, but you will in staging and production
if (process.env.NODE_ENV === 'production') {
	
	// This will stop the passport-ethereum-siwe wallet login from working, locking out everyone from the product
	app.enable('trust proxy');

	// This will allow HTTP to be used, which also locks out anyone using HTTP from using the product.
	// Plus, this will directly impact our website's security (since this forces HTTP to HTTPS)
	app.use(express_enforces_ssl());
}

// DO NOT REMOVE
// ^^^^^^^^^^^^^

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.get('/health', (req, res) => {
    res.json({ status: "ok" })
})

require('./routes/dataFetch')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

// See https://github.com/sequelize/express-example
async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log('Database connection OK!');
        if (process.env.DEBUG === 'database') await debugDatabaseModels()
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
	}
}

async function init() {
	await assertDatabaseConnectionOk();

	console.log(`Starting app on port ${PORT}...`);

	app.listen(process.env.PORT || 5000, () => {
		console.log(`app listening on port ${PORT}.`);		
	});
}

init();
