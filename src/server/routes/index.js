'use strict';

import { Router } from 'express';
import productRouter from './product.js';

const routes = new Router();

routes.use('/product', productRouter);

export default routes;