'use strict';

require('seneca')()
  .use('./sum')
  .use('./times')
  .use('./hypotenuse')
  .listen(3032);
