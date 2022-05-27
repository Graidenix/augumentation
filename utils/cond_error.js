const func = ({ condition = 'eq', expected = 0, value = 0 }) => {
    switch (condition) {
        case 'lt': {
            if (expected < value) throw "Conditional Error";
            break;
        }
        case 'gt': {
            if (expected < value) throw "Conditional Error";
            break;
        }
        case 'eq': {
            if (expected === value) throw "Conditional Error";
            break;
        }
        default: {
            throw "Invalid condition, 'gt', 'lt', 'eq' allowed";
        }
    }

    return "ok";
}

func.method = 'get';

module.exports = func;