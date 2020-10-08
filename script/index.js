'use strict';

import generateCatalog from './generateCatalog.js';
import generateFooter from './generateFooter.js';
import generateGoodsPage from './generateGoodsPage.js';
import generateHeader from './generateHeader.js';
import {
  loadData
} from './loadData.js';

generateCatalog();
generateFooter();
generateHeader();
generateGoodsPage();
loadData();