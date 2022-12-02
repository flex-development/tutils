/**
 * @file Type Definitions - Jsonifiable
 * @module tutils/types/Jsonifiable
 */

import type JsonPrimitive from './json-primitive'
import type JsonifiableArray from './jsonifiable-array'
import type JsonifiableInstance from './jsonifiable-instance'
import type JsonifiableObject from './jsonifiable-object'

/**
 * Matches a value that can be losslessly converted to JSON.
 *
 * Can be used to type values that are expected to pass `JSON.stringify`.
 */
type Jsonifiable =
  | JsonifiableArray
  | JsonifiableInstance
  | JsonifiableObject
  | JsonPrimitive

export type { Jsonifiable as default }
