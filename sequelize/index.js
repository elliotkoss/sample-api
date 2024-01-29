const keys = require('../config/keys');

//
// See https://github.com/sequelize/express-example
//
const { Sequelize, DataTypes } = require('sequelize');

// Example Postgres: postgres://user:pass@example.com:5432/dbname
const sequelize = new Sequelize(keys.postgresURI, 
    { logging: false }
);


const modelDefiners = [    
    require('./models/sample_users.model'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize, DataTypes);
}

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
