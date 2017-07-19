const Promise = require('bluebird');
const seneca = require('seneca')();

// sum pattern
seneca.add('role:math,cmd:sum', (params, respond) => {

  respond(null, {
    answer: params.x + params.y
  });

});

// sum action
seneca.act('role:math,cmd:sum', { x: 5, y: 2 }, (err, result) => {

  console.log(result);

});




// multiply pattern
seneca.add({ role: 'math', cmd:'multiply' }, (params, respond) => {

  respond(null, {
    answer: params.x * params.y
  });

});

// multiply action
seneca.act({ role: 'math' }, { cmd: 'multiply', x: 5, y: 2 }, (err, result) => {

  console.log(result);

});



// hypotenuse module
function pitagoras(options) {

  // Promisifing the act
  let act = Promise.promisify(seneca.act, {context: seneca});

  this.add('role:math,cmd:hypotenuse', (params, respond) => {

    Promise
      .all([
        act('role:math,cmd:multiply', { x: params.co, y: params.co }),
        act('role:math,cmd:multiply', { x: params.ca, y: params.ca })
      ])
      .then(squares => {
        return act('role:math,cmd:sum', { x: squares[0].answer, y: squares[1].answer })
      })
      .then(sum => {
        respond({ answer: Math.sqrt(sum.answer) })
      })
      .catch(console.error)

  });

}

// using the module and acting
seneca
  .use(pitagoras)
  .act('role:math,cmd:hypotenuse', { co: 3, ca: 4 }, (err, result) => {

    console.log(result)

  });
