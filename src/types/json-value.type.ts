import type JSONArray from './json-array.type'
import type JSONObject from './json-object.type'
import type JSONPrimitive from './json-primitive.type'

/**
 * @file Type Definitions - JSONValue
 * @module tutils/types/JSONValue
 */

/**
 * Types of [JSON data types][1].
 *
 * [1]: https://restfulapi.net/json-data-types
 */
type JSONValue = JSONArray | JSONPrimitive | JSONObject

export default JSONValue
