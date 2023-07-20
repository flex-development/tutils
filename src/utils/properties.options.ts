/**
 * @file Utilities - PropertiesOptions
 * @module tutils/utils/properties/options
 */

import type { Nilable } from '#src/types'

/**
 * Property key retrieval options.
 */
interface PropertiesOptions {
  /**
   * Include enumerable properties only.
   *
   * @default false
   */
  enu?: Nilable<boolean>
}

export type { PropertiesOptions as default }
