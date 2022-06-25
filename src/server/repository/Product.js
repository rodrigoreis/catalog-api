'use strict';

import mongoist from 'mongoist';
import db from '../config/mongoist.js';

const Product = {
    list() {
        const query = {};
        return db.products.find(query);
    },
    byId() {
        return db.products.findOne({ _id: mongoist.ObjectId(id) });
    },
    create(data) {
        return db.stormtroopers.insert(data)
    },
    updateById(id, data) {
        return db.stormtroopers.update({ _id: mongoist.ObjectId(id) }, { $set: data });
    },
    deleteById(id) {
        return db.stormtroopers.remove({ _id: mongoist.ObjectId(id) });
    }
};

export default Product;