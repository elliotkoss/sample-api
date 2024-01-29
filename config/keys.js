const fs = require('fs');

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');

  if (fs.existsSync('./config/dev.override.js')) {
    console.log('Loading dev.override.js ...')
    const devOverride = require('./dev.override')
    module.exports = {
        ...module.exports,
        ...devOverride
    }
  }
}
