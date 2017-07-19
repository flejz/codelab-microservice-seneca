const seneca = require('seneca')({
    log: 'silent'
  })
  .use('../microservices/geocode');

describe('Geocoding Google', _ => {
  it('List of candidates', (done) => {

    seneca.act('role:map,cmd:geocode', {
      address: 'Rua Fidencio Ramos'
    }, (err, response) => {

      console.log('** GEOCODE GOOGLE');
      console.log(response);

      done()
    });
  });
});

// describe('Geocoding Maplink', _ => {
//   it('List of candidates', (done) => {
//
//     seneca.act('role:map,cmd:geocode,source:maplink', {
//       address: 'Rua Fidencio Ramos'
//     }, (err, response) => {
//
//       console.log('** GEOCODE MAPLINK');
//       console.log(response);
//
//       done()
//     });
//   });
// });
