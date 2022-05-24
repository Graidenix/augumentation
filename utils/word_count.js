const func = ({ text }) => {
    return typeof text === 'string' ? text.trim().split(/\s+/).length : 0;
}

func.method = 'post';

module.exports = func;