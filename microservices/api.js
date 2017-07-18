// Microservice
module.exports = function api(options) {

  let validOps = { geocode:'geocode', route:'route' };

  // Api pattern
  this.add('role:api,path:map', function (msg, respond) {

    let cmd = msg.args.params.cmd;

    if (!validOps[cmd]) {
      return respond(new Error('Operation not valid'))
    }

    let params = msg.args.query;
    params.cmd = msg.args.params.cmd;

    this.act('role:map', params, respond)
  })

  // Seneca Web init pattern
  this.add('init:api', function (msg, respond) {

    this.act('role:web',{
      routes:{
        prefix: '/api',
        pin: 'role:api,path:*',
        map: {
          map: {
            GET:true,
            suffix:'/:cmd'
          }
        }
      }
    }, respond);
  });

}
