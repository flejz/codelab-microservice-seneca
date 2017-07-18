const seneca = require('seneca')({
    log: 'silent'
  })
  .use('../microservices/route');


describe('Routing', _ => {

  describe('An origin and a destination', _ => {

    it('Should return a route', (done) => {

      seneca.act('role:map,cmd:route', {

        origin: 'Maplink',
        destination: 'Anhembi Morumbi Vila Olímpia'

      }, done);
    });
  });

});
