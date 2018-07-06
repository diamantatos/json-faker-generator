# json-faker-generator

Json Faker Generator
===========
json-faker-generator.createJson(X,Y)
A module that generates fake json with x fields, each having y depth by using faker names.

# Example

``````````
var jsonFakerGenerator  = require('json-faker-generator');
console.log(JSON.stringify(jsonFakerGenerator(2,3)))

``````````
# Output

``````````
{"Ebony":{"Hayden":{"Reyes":{"Nona":"Mario"}}},"Jarred":{"Alexandre":{"Tracey":{"Buddy":"Marcelina"}}}}

``````````

# License

MIT
