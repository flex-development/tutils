/**
 * @file Type Definitions - JsonArray
 * @module tutils/types/JsonArray
 */

import type JsonValue from './json-value'

/**
 * Type representing an array containing [JSON values][1].
 *
 * [1]: https://restfulapi.net/json-data-types
 */
type JsonArray = JsonValue[] | readonly JsonValue[]

export type { JsonArray as default }
