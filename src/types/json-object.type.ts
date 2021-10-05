import type JSONValue from './json-value.type'

/**
 * @file Type Definitions - JSONObject
 * @module tutils/types/JSONObject
 */

/**
 * Type representing any [JSON][1] object.
 *
 * This type can be useful to enforce some input to be JSON-compatible or as a
 * super-type to be extended from.
 *
 * Don't use this as a direct return type as the user would have to double-cast
 * it: `object as unknown as CustomResponse`.
 *
 * Instead, you could extend `JSONObject` to ensure your type only uses
 * JSON-compatible types:  `interface CustomResponse extends JSONObject { … }`.
 *
 * Reference: [type-fest - Basic][2]
 *
 * [1]: https://restfulapi.net/json-data-types
 * [2]: https://github.com/sindresorhus/type-fest/blob/main/source/basic.d.ts
 */
type JSONObject = { [Key in string]?: JSONValue }

export default JSONObject
