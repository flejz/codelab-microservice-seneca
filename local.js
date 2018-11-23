// Initializing the Seneca
require('seneca')()

  // Connection pipes
  .use('./sum')
  .use('./times')
  .use('./hypotenuse')
  //.client({ host: 'https://codelab-microservice-seneca.glitch.me', port:80, pin: 'role:math,cmd:hypotenuse' })


  .act('role:math,cmd:hypotenuse', { co: 2, ca: 5 }, (err, data) => {

    console.log(data);
  });

