const func = ({value}) => {
    const dateObj = new Date(value);
    if (dateObj.toString() === 'Invalid Date') throw "Invalid date provided";
    return dateObj.toISOString();
}

func.method = 'get';

module.exports = func;