// Google Maps client
const client = require('@google/maps').createClient({
  key: 'AIzaSyCyCkLzlMKp3m1bPjVYWorb-Cgof2Ff4B0  '
});

// Microservice
module.exports = function geocode(options) {

  // The "this" is in the Seneca context
  // Adding a pattern to be matched
  this.add('role:map,cmd:geocode', (obj, respond) => {

    if (!obj.type) {
      obj.type = 'address';
    }

    if (!obj[obj.type]) {
      return respond(new Error('Parameter not defined'))
    }

    // Geocoding
    client.geocode({
      address: obj[obj.type]
    }, (err, response) => {

      respond(err, !response.json ? null : response.json.results)
    });

  });

}
