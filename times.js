'use strick';

// multiply module
module.exports = function times() {

  this.add({ role: 'math', cmd: 'times' }, (params, respond) => {

    respond(null, {
      answer: params.x * params.y
    });

  });
};
