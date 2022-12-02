/**
 * @file Type Definitions - JsonObject
 * @module tutils/types/JsonObject
 */

import type JsonValue from './json-value'

/**
 * Type representing a [JSON][1] object.
 *
 * This type can be used to enforce input values to be JSON-compatible or as a
 * super-type to be extended from.
 *
 * The type should **not**, however, be used as a direct return type as the user
 * would have to double-cast it: `object as unknown as CustomResponse`.
 *
 * Instead, the return type should extend `JsonObject` to ensure the return type
 * is JSON-compatible: `interface CustomResponse extends JsonObject { … }`.
 *
 * [1]: https://restfulapi.net/json-data-types
 */
type JsonObject = { [K in string]?: JsonValue }

export type { JsonObject as default }
