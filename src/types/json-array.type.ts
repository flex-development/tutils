/**
 * @file Type Definitions - JSONArray
 * @module tutils/types/JSONArray
 */

import type JSONValue from './json-value.type'

/**
 * Type representing an array containing [JSON values][1].
 *
 * [1]: https://restfulapi.net/json-data-types
 */
type JSONArray = JSONValue[]

export { type JSONArray as default }
