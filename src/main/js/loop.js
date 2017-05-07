/*! superflycss-variables-html-entities | MIT License | https://github.com/superflycss/variables-html-entities/blob/master/LICENSE.md */

fs = require('fs');

const entitiesjson = './src/main/json/entities.json';

const entities = JSON.parse(fs.readFileSync(entitiesjson).toString());

let LOOP_VARIABLES = '';

entities.forEach((entity) => {
  let key = entity.title.replace(/ /g, '-').toLowerCase();
  LOOP_VARIABLES += key + ',  ';
});

console.log(LOOP_VARIABLES);
