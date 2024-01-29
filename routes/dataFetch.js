const { models } = require('../sequelize');

module.exports = (app) => {                

    app.get('/api/get/static-user', async( req, res) => {
        try {            
            res.status(200).json([{id:1, firstName: 'Elliot', lastName: 'Koss'}]);
        } catch (error) {
            console.log(error);
            res.status(404).json(error);
        }
    });

    app.get('/api/get/sql-user', async( req, res) => {
        try {
            const benefitTypes = await models.sample_users.findAll({ 
                limit: 1
            });            
            res.status(200).json(benefitTypes);
        } catch (error) {
            console.log(error);
            res.status(404).json(error);
        }
    });

    app.get('/api/get/variable-user/:id', async( req, res) => {
        const { id } = req.params;

        try {
            const benefitTypes = await models.sample_users.findOne({ 
                where: {id},                
            });            
            res.status(200).json(benefitTypes);
        } catch (error) {
            console.log(error);
            res.status(404).json(error);
        }
    });
};
