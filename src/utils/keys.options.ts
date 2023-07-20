/**
 * @file Utilities - KeysOptions
 * @module tutils/utils/keys/options
 */

import type { Nilable } from '#src/types'
import type AlphabetizeOptions from './alphabetize.options'

/**
 * Options for retrieving enumerable string-keyed property names.
 *
 * @see {@linkcode AlphabetizeOptions}
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/keys}
 *
 * @extends {AlphabetizeOptions}
 */
interface KeysOptions extends AlphabetizeOptions {
  /**
   * Include nested keys.
   *
   * @default false
   */
  deep?: Nilable<boolean>
}

export type { KeysOptions as default }
