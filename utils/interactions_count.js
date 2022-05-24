const func = ({ comments = '' }) => {
    let timestampPattern = /\d{4}-[01]\d-[0-3]\d [0-2]\d:[0-5]\d:[0-5]\d/g
    const timestamps = comments.match(timestampPattern) || []
    return timestamps.length;
}

func.method = 'post';

module.exports = func;