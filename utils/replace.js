const func = ({ subject, pattern, replace }) => {
    if (!subject) return '';

    const regexp = new RegExp(pattern, 'g');
    return subject.replace(regexp, replace);
}

func.method = 'post';

module.exports = func;