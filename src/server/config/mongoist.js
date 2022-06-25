'use strict';

import debug from 'debug';
import mongoist from 'mongoist';
import conifg from 'config';

const log = debug('catalog-api:config:mongoist');
const db = mongoist(conifg.get('mongo.uri'));

db.on('error', (err) => log('mongodb error', err));

export default db;