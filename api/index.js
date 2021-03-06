process.env.TZ = 'GMT'

const express = require('express');
const bodyParser = require('body-parser');
const { loggingRoutes, availableRoutes, getRoutes } = require("../libs");
const router = express.Router();
const routes = getRoutes();

const app = express();
app.use(bodyParser.json({ limit: '128mb', extended: true }));

routes.forEach(({endpoint, func}) => {
    router[func.method]('/' + endpoint, (req, res) => {
        try {
            const result = func(func.method === 'get' ? req.query : req.body);
            res.json({
                success: true, result
            })
        } catch (error) {
            res.status(422).json({
                success: false, error
            })
        }
    })
})

loggingRoutes(router.stack);

app.use('/api', router);

app.get('/api', (req, res) => {
    res.json(availableRoutes);
});

module.exports = app;






