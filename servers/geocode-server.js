require('seneca')()
  .use('../microservices/geocode')
  .listen(3030);
