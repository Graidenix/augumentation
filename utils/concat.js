const func = ({items, glue}) => {
    return items.join(glue ?? '');
}

func.method = 'post';

module.exports = func;
