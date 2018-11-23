'use strick';

// sum module
module.exports = function sum() {

  this.add({ role: 'math', cmd: 'sum' }, (params, respond) => {

    respond(null, {
      answer: parseFloat(params.x) + parseFloat(params.y)
    });

  });
};
