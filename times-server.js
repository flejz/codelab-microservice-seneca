'use strict';

require('seneca')()
  .use('./times')
  .listen(3030);
