const func = (payload) => {
    if (!Array.isArray(payload)) throw "payload should be array type";
    if (payload.some(n => isNaN(n))) throw "all items should be numeric"
    return payload.reduce((sum, item) => sum + item, 0);
}

func.method = 'post';

module.exports = func;