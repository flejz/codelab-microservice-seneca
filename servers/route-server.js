require('seneca')()
  .use('../microservices/route')
  .listen(process.env.PORT || 3031);
