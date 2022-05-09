/**
 * @file Mocha Configuration - Root
 * @see https://mochajs.org/#command-line-usage
 * @see https://mochajs.org/#configuration-format
 */

/**
 * @type {Mocha.MochaInstanceOptions}
 * @const config - Configuration object
 */
const config = {
  ...require('./.mocharc.base.cjs'),
  package: require('path').join(process.cwd(), 'package.json')
}

module.exports = config
