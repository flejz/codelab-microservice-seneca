// Google Maps client
const googleClient = require('@google/maps').createClient({
  key: 'AIzaSyCyCkLzlMKp3m1bPjVYWorb-Cgof2Ff4B0  '
});

// Microservice
module.exports = function geocode(options) {

  // The "this" is in the Seneca context
  // Adding a pattern to be matched
  this.add('role:map,cmd:geocode', (params, respond) => {

    if (!params.type) {
      params.type = 'address';
    }

    if (!params[params.type]) {
      return respond(new Error('Parameter not defined'))
    }

    // Geocoding
    googleClient.geocode({
      address: params[params.type]
    }, (err, response) => respond(err, !response.json ? null : response.json));

  });
}
