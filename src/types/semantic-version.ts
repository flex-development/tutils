/**
 * @file Type Definitions - SemanticVersion
 * @module tutils/types/SemanticVersion
 */

import type EmptyString from './empty-string'
import type NumberString from './number-string'

/**
 * Semantic version string schema.
 *
 * @see https://semver.org
 * @see https://docs.npmjs.com/about-semantic-versioning
 */
type SemanticVersion = `${number}.${number}.${number}${
  | EmptyString
  | `-${number | `${string}${EmptyString | `.${number}`}`}`
  | `+${NumberString}`}`

export type { SemanticVersion as default }
