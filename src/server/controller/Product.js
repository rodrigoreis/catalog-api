'use strict';

import repsitory from '../repository/Product.js';

const Product = {
    list(req, res, next) {
        repsitory
            .list()
            .then(result => res.json(result))
            .catch(next);
    },
    byId(req, res, next) { },
    create(req, res, next) { },
    updateById(req, res, next) { },
    deleteById(req, res, next) { }
};

export default Product;