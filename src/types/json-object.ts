/**
 * @file Type Definitions - JSONObject
 * @module tutils/types/JSONObject
 */

import type JSONValue from './json-value'

/**
 * Type representing a [JSON][1] object.
 *
 * This type can be used to enforce input values to be JSON-compatible or as a
 * super-type to be extended from.
 *
 * The type should **not**, however, be used as a direct return type as the user
 * would have to double-cast it: `object as unknown as CustomResponse`.
 *
 * Instead, the return type should extend `JSONObject` to ensure the return type
 * is JSON-compatible: `interface CustomResponse extends JSONObject { … }`.
 *
 * [1]: https://restfulapi.net/json-data-types
 *
 * @template T - JSON value type
 */
type JSONObject<T extends JSONValue = JSONValue> = { [K in string]?: T }

export { type JSONObject as default }
