'use strict';

import { Router } from 'express';
import controller from '../controller/Product.js';

const productRouter = new Router();

productRouter.get('/', controller.list);
productRouter.get('/:id', controller.byId);
productRouter.post('/', controller.create);
productRouter.put('/:id', controller.updateById);
productRouter.delete('/:id', controller.deleteById);

export default productRouter