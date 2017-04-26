var cp = require('child_process');
var readline = require('readline')

var packages = [
  'mocha',
  'mocha-reporter',
  'istanbul',
  'nyc'
]

function log(stream, logger) {
  readline.createInterface({
    input: stream
  }).on('line', logger)
}

exports.setup = function (mage, options, callback) {
  const logger = mage.core.logger
  const npm = cp.spawn('npm', [
    'install',
    '--save-dev'
  ].concat(packages))

  log(npm.stdout, logger.debug.bind(logger))
  log(npm.stderr, logger.warning.bind(logger))

  npm.on('exit', callback)
}
