/**
 * @file Helpers - PKG
 * @module helpers/pkg
 */

import path from 'node:path'

/** @const {PackageJson} PKG - `package.json` object */
const PKG: PackageJson = require(path.resolve(process.cwd(), 'package.json'))

export default PKG
