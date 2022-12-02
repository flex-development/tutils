/**
 * @file Type Definitions - Jsonifiable
 * @module tutils/types/Jsonifiable
 */

import type JSONPrimitive from './json-primitive'
import type JsonifiableArray from './jsonifiable-array'
import type JsonifiableObject from './jsonifiable-object'

/**
 * Matches a value that can be losslessly converted to JSON.
 *
 * Can be used to type values that are expected to pass `JSON.stringify`.
 */
type Jsonifiable = JsonifiableArray | JsonifiableObject | JSONPrimitive

export type { Jsonifiable as default }
