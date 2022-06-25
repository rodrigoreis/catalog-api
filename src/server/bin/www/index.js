'use strict';

import app from '../../app.js';
import debug from 'debug';

const log = debug('catalog-api:bin:www');

app.listen(3000, () => log('server started'));