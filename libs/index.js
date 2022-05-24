const fs = require("fs");
const availableRoutes = [];

const loggingRoutes = (layers) => {
    layers.forEach((layer) => {
        Object.keys(layer.route.methods).forEach((method) => {
            if (layer.route.methods[method]) {
                availableRoutes.push({
                    method: method.toUpperCase(),
                    path: '.' + layer.route.path,
                });
                console.info(`${method.toUpperCase().padEnd(5)} /api${layer.route.path}`);
            }
        });
    });
};



const getRoutes = () => {
    const files = fs.readdirSync('./utils');
    return files.filter((name) => name.substr(-3) === '.js').reduce((acc, filename) => {
        const func = require('../utils/' + filename);
        const endpoint = filename.replace(/\.js$/, '');

        return [...acc, {endpoint, func}];
    }, []);
}

module.exports = {
    loggingRoutes,
    getRoutes,
    availableRoutes
}