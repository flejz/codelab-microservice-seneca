'use strict';
const { all, promisify } = require('bluebird');

// hypotenuse module
module.exports = function pitagoras() {
  //
  // promisifing the act
  const act = promisify(this.act, { context: this });

  this.add('role:math,cmd:hypotenuse', async (params, respond) => {

    const [co, ca] = await all([
        act('role:math,cmd:times', { x: params.co, y: params.co }),
        act('role:math,cmd:times', { x: params.ca, y: params.ca })
      ]);

    const sum = await act('role:math,cmd:sum', { x: co.answer, y: ca.answer });
    const answer= Math.sqrt(sum.answer)

    respond({ answer });
  });

}
