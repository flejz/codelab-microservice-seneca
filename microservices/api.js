module.exports = function api(options) {

  let valid_ops = { geocode:'geocode', route:'route' }

  this.add('role:api,path:map', function (msg, respond) {

    let params = msg.args.query
    params.cmd = msg.args.params.cmd

    this.act('role:map', params, respond)
  })

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
    }, respond)
  })

}
