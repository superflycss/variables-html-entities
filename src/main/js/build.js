/*! superflycss-variables-html-entities | MIT License | https://github.com/superflycss/variables-html-entities/blob/master/LICENSE.md */

fs = require('fs');

const indexcss = './src/main/css/index.css';
const entitiesjson = './src/main/json/entities.json';

//Delete the file before recreating it.
fs.unlinkSync(indexcss);

const entities = JSON.parse(fs.readFileSync(entitiesjson).toString());

let VARIABLES = '';
let TEMPLATE_LICENSE = `/*
 * Copyright 2017 Firefly Semantics Corporation
 * Copyright 2017 SuperflyCSS
 * Copyright 2017 Ole Ersoy
 */

/*! superflycss-variables-html-entities | MIT License | https://github.com/superflycss/variables-html-entities/blob/master/LICENSE.md */
`
const VARIABLE_PREFIX = '--';
const NEWLINE = '\n';
const SEPARATOR = ': ';
const VARIABLES_START = ':root { \n';
const VARIABLES_END = '}';

entities.forEach((entity) => {
  let key = entity.title.replace(/ /g, '-').toLowerCase();
  let value = entity.hex.replace('#x', '');
  let variable = '  ' + VARIABLE_PREFIX + key + SEPARATOR + value + ';' + NEWLINE;
  VARIABLES += variable;
});

const FILE = TEMPLATE_LICENSE + VARIABLES_START + VARIABLES + VARIABLES_END;

fs.writeFileSync(indexcss, FILE);
