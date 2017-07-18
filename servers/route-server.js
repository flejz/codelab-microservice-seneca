require('seneca')()
  .use('../microservices/route')
  .listen(3031);
