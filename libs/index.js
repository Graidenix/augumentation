const availableRoutes = [];

const loggingRoutes = (layers) => {
    layers.forEach((layer) => {
        Object.keys(layer.route.methods).forEach((method) => {
            if (layer.route.methods[method]) {
                availableRoutes.push({
                    method: method.toUpperCase(),
                    path: '.' + layer.route.path,
                });
                console.info(`${method.toUpperCase().padEnd(5)} /api/v1${layer.route.path}`);
            }
        });
    });
};

module.exports = {
    loggingRoutes,
    availableRoutes
}