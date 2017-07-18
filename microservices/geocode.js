// Google Maps client
const googleClient = require('@google/maps').createClient({
  key: 'AIzaSyCyCkLzlMKp3m1bPjVYWorb-Cgof2Ff4B0  '
});

// Maplink client
const maplinkClient = require ('@maplink/maplink-geocoder')('NGKiNG2iNJUkNIUkOGoBNXoAOj==');


// Microservice
module.exports = function geocode(options) {

  // The "this" is in the Seneca context
  // Adding a pattern to be matched
  this.add('role:map,cmd:geocode', (params, respond) => {

    // Geocoding
    googleClient.geocode({
      address: params.address
    }, (err, response) => respond(err, !response.json ? null : response.json));

  });

  The maplink pattern matching
  this.add('role:map,cmd:geocode,source:maplink', (params, respond) => {

    maplinkClient.search(params.address)
      .then(result => respond(null, JSON.parse(result).results))
      .catch(respond);
  });
}
