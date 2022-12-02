/**
 * @file Type Definitions - JsonValue
 * @module tutils/types/JsonValue
 */

import type JsonArray from './json-array'
import type JsonObject from './json-object'
import type JsonPrimitive from './json-primitive'

/**
 * [JSON data types][1].
 *
 * [1]: https://restfulapi.net/json-data-types
 */
type JsonValue = JsonArray | JsonObject | JsonPrimitive

export type { JsonValue as default }
