const api = require('./api');

api.listen(8000, () => {
    console.log('>>> Server started')
})