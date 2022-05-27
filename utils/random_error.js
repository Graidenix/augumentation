const func = ( ) => {
    if (Math.random() > 0.5) throw "Random Error";
    return "ok";
}

func.method = 'get';

module.exports = func;