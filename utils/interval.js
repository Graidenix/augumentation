const func = ({ from, to }) => {
    const fromDate = from ? new Date(from) : new Date();
    const toDate = to ? new Date(to) : new Date();
    if (fromDate.toString() === 'Invalid Date') throw "Invalid date provided";
    if (toDate.toString() === 'Invalid Date') throw "Invalid date provided";

    const diff = Math.abs(toDate - fromDate);
    return {
        milliseconds: diff,
        seconds: Math.floor(diff / 1000),
        minutes: Math.floor(diff / (60 * 1000)),
        hours: Math.floor(diff / (60 * 60 * 1000)),
        days: Math.floor(diff / (24 * 60 * 60 * 1000)),
        years: Math.floor(diff / (365 * 24 * 60 * 60 * 1000)),
    };
}

func.method = 'post';

module.exports = func;