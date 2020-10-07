'use strict';

import {
  useCatalog
} from './catalog.js';
import generateCatalog from './generateCatalog.js';
import generateFooter from './generateFooter.js';
import generateHeader from './generateHeader.js';
import generateSubcatalog from './generateSubcatalog.js';
import {
  loadData
} from './loadData.js';

generateCatalog();
generateFooter();
generateHeader();
generateSubcatalog();
useCatalog();
loadData();