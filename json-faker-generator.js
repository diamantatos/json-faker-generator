const faker = require('faker');

const createJson = (fields_number, fields_depth) => {
  var json = {}
  for (var i = 0; i < fields_number; i++) {
    var key = faker.name.firstName()
    json[key] = {}
    json[key] = addDepth(json[key],0, fields_depth)
  }
  return json
};

function addDepth(json, depth, maxDepth) {
  if (depth == maxDepth) {
    name = faker.name.firstName()
    return name
  } else {
    var key = faker.name.firstName()
    json[key] = {}
    json[key] = addDepth(json[key],depth+1, maxDepth)
    return json
  }
}

module.exports = createJson;
