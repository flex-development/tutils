const { writeFileSync } = require('fs')
const { join } = require('path')
const packagejson = require('../../package.json')

/**
 * @file Create package.json in `dist` directory
 * @module scripts/js/create-dist-package-json
 */

/**
 * Creates a `package.json` file in the `dist` directory.
 *
 * @return {void} Nothing when complete
 */
const createDistPackageJSON = () => {
  const withoutDistDir = str => {
    return str.replace(`${packagejson.publishConfig.directory}/`, '')
  }

  let pkg = {
    ...packagejson,
    publishConfig: {
      ...packagejson.publishConfig,
      directory: './'
    },
    main: withoutDistDir(packagejson.main),
    types: withoutDistDir(packagejson.types),
    scripts: {
      postpublish: 'zsh ../scripts/postpublish.sh'
    }
  }

  const pkg_stringified = JSON.stringify(pkg, null, 2)

  writeFileSync(join(__dirname, '../../dist/package.json'), pkg_stringified)
}

createDistPackageJSON()
