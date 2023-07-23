/**
 * @file Type Definitions - TemplateData
 * @module tutils/types/TemplateData
 */

import type Joinable from './joinable'
import type NumberString from './number-string'

/**
 * Object representing template data.
 *
 * Keys should be valid JavaScript identifiers or numbers (`a-z`, `A-Z`, `0-9`).
 *
 * @todo examples
 */
type TemplateData = { [K in NumberString]?: Joinable | TemplateData }

export type { TemplateData as default }
