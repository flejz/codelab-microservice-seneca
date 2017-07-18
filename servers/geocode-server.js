require('seneca')()
  .use('../microservices/geocode')
  .listen(process.env.PORT || 3030);
