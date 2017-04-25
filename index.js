var cp = require('child_process');

var packages = [
  'mocha',
  'mocha-reporter',
  'istanbul',
  'nyc'
]

exports.setup = function (callback) {
  const npm = cp.spawn('npm', [
    'install',
    '--save-dev'
  ].concat(packages))

  npm.stdout.pipe(process.stdout)
  npm.stderr.pipe(process.stderr)
  npm.on('exit', callback)
}
