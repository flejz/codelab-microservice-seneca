'use strict';

require('seneca')()
  .use('./sum')
  .listen(3031);