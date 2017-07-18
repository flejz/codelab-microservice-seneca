const seneca = require('seneca')({
    log: 'silent'
  })
  .use('../microservices/geocode');


describe('Geocoding', _ => {

  describe('An address', _ => {

    it('Should return a list of address candidates', (done) => {

      seneca.act('role:map,cmd:geocode', {

        address: 'Rua Fidêncio Ramos, 302'

      }, done);
    });
  });

  describe('A city', _ => {

    it('Should return a list of city candidates', (done) => {

      seneca.act('role:map,cmd:geocode,type:city', {

        city: 'Santiago - Chile'

      }, done);
    });
  });
});
