const func = ({value}) => {
    if (typeof value === 'number') return Math.floor(value);
    if (typeof value === 'string') return parseInt(value.replace(/[^\d.,]/g, '')) || 0;
    throw 'Invalid payload provided';
}


func.method = 'get';

module.exports = func;