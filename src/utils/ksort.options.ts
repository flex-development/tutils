/**
 * @file Utilities - KsortOptions
 * @module tutils/utils/ksort/options
 */

import type { Nilable } from '#src/types'
import type AlphabetizeOptions from './alphabetize.options'

/**
 * Property key sorting options.
 *
 * @see {@linkcode AlphabetizeOptions}
 *
 * @extends {AlphabetizeOptions}
 */
interface KsortOptions extends AlphabetizeOptions {
  /**
   * Recursively sort keys, including keys of plain objects within arrays.
   *
   * @default false
   */
  deep?: Nilable<boolean>
}

export type { KsortOptions as default }
