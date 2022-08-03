/**
 * @file Type Definitions - JSONValue
 * @module tutils/types/JSONValue
 */

import type JSONArray from './json-array'
import type JSONObject from './json-object'
import type JSONPrimitive from './json-primitive'

/**
 * [JSON data types][1].
 *
 * [1]: https://restfulapi.net/json-data-types
 */
type JSONValue = JSONArray | JSONObject | JSONPrimitive

export { type JSONValue as default }
