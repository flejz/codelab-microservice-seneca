// Google Maps client
const client = require('@google/maps').createClient({
  key: 'AIzaSyCyCkLzlMKp3m1bPjVYWorb-Cgof2Ff4B0  '
});

// Microservice
module.exports = function geocode(options) {
  
  // The "this" is in the Seneca context
  // Adding a pattern to be matched
  this.add('role:map,cmd:route', (obj, respond) => {

    if (!obj.origin || !obj.destination) {
      return respond(new Error('Parameters not defined'))
    }

    // Geocoding
    client.directions({
      origin: obj.origin,
      destination: obj.destination,
    }, (err, response) => {

      respond(err, !response.json ? null : response.json.results)
    });

  });

}
