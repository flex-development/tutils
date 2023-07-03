/**
 * @file Type Definitions - TemplateData
 * @module tutils/types/TemplateData
 */

import type NumberString from './number-string'
import type Primitive from './primitive'

/**
 * Object representing template data.
 *
 * @todo add more detail to documentation
 * @todo examples
 */
type TemplateData = {
  [K in NumberString]?: Exclude<Primitive, symbol> | TemplateData
}

export type { TemplateData as default }
