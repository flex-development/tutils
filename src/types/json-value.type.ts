/**
 * @file Type Definitions - JSONValue
 * @module tutils/types/JSONValue
 */

import type JSONArray from './json-array.type'
import type JSONObject from './json-object.type'
import type JSONPrimitive from './json-primitive.type'

/**
 * [JSON data types][1].
 *
 * [1]: https://restfulapi.net/json-data-types
 */
type JSONValue = JSONArray | JSONObject | JSONPrimitive

export { type JSONValue as default }
