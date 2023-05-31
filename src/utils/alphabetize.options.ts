/**
 * @file Utilities - AlphabetizeOptions
 * @module tutils/utils/AlphabetizeOptions
 */

import type { SortOrder } from '#src/enums'
import type { OneOrMany, Optional } from '#src/types'

/**
 * Options for sorting an array alphabetically.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
 */
type AlphabetizeOptions = {
  /**
   * Indicate if uppercase or lowercase strings should be sorted first.
   *
   * @default 'upper'
   */
  caseFirst?: Optional<'false' | 'lower' | 'upper'>

  /**
   * Ignore punctuation.
   *
   * @default false
   */
  ignorePunctuation?: Optional<boolean>

  /**
   * Locale matching algorithm to use.
   *
   * @default 'best fit'
   */
  localeMatcher?: Optional<'best fit' | 'lookup'>

  /**
   * A string with a BCP 47 language tag, or an array of such strings.
   *
   * If more than one locale is included, they should be listed in descending
   * order by priority so that the first entry is the preferred locale.
   *
   * If `undefined`, the default locale of the JavaScript runtime will be used.
   */
  locales?: Optional<OneOrMany<string>>

  /**
   * Use numeric collation, such that `'1' < '2' < '10'`.
   *
   * @default true
   */
  numeric?: Optional<boolean>

  /**
   * Sort order rule.
   *
   * @default SortOrder.ASC
   */
  order?: Optional<SortOrder>

  /**
   * Which differences in the strings should lead to non-zero result values.
   *
   * Possible values:
   *
   * - `'accent'`: Only base letter, accent, and other diacritic mark
   *   differences compare as unequal (e.g.  ≠ b, a ≠ á, a = A)
   * - `'base'`: Only base letter differences compare as unequal (e.g. a ≠ b, a
   *   = á, a = A)
   * - `'case'`: Only base letter and case differences compare as unequal (e.g.
   *   a ≠ b, a = á, a ≠ A)
   * - `'variant'`: Strings that differ in base letters, accents and other
   *   diacritic marks, or case compare as unequal. Other differences may also
   *   be taken into consideration (e.g. a ≠ b, a ≠ á, a ≠ A)
   *
   * @default 'variant'
   */
  sensitivity?: Optional<'accent' | 'base' | 'case' | 'variant'>
}

export type { AlphabetizeOptions as default }
