// Google Maps client
const googleClient = require('@google/maps').createClient({
  key: 'AIzaSyCyCkLzlMKp3m1bPjVYWorb-Cgof2Ff4B0  '
});

// Microservice
module.exports = function route(options) {

  // The "this" is in the Seneca context
  // Adding a pattern to be matched
  this.add('role:map,cmd:route', (params, respond) => {

    if (!params.origin || !params.destination) {
      return respond(new Error('Parameters not defined'))
    }

    // Routing
    googleClient.directions({
      origin: params.origin,
      destination: params.destination,
    }, (err, response) => respond(err, !response.json ? null : response.json));

  });

}
