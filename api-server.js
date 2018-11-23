let SenecaWeb = require('seneca-web')
let Express = require('express')
let Router = Express.Router
let context = new Router()

let senecaWebConfig = {
  context: context,
  adapter: require('seneca-web-adapter-express'),
  options: { parseBody: false } // So we can use body-parser
}

Express()
  .use(require('body-parser').json())
  .use(context)
  .listen(3000)

// Initializing the Seneca
require('seneca')()
  .use(SenecaWeb, senecaWebConfig) // The integration happens here
  .use('../api') // The api endpoint microservice

  // Connection pipes
  //.client({ host: 'https://codelab-microservice-seneca.glitch.me', port:80, pin: 'role:math,cmd:hypotenuse' });
  .client(3032);
