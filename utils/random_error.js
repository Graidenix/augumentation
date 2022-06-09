const func = ({k = 0.5}) => {
    if (Math.random() < +k) throw "Random Error";
    return "ok";
}

func.method = 'get';

module.exports = func;