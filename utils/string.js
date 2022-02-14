const func = ({ value }) => {
    if (typeof value !== "string") throw "payload should be string type";
    return {
        length: value.length,
        reverse: value.split('').reverse().join(''),
        uppercase: value.toUpperCase(),
        lowercase: value.toLowerCase(),
        capitalize: value.length === 0 ? '' : value[0].toUpperCase() + value.substring(1),
        alias: value.toLowerCase().replace(/\W/g, '-').replace(/-+/g, '-'),
        shuffle: value.split('').sort(() => Math.random() - 0.5).join('')
    }
};

func.method = 'get';

module.exports = func;