/**
 * @file Type Definitions - JSON
 * @module tutils/types/JSON
 */

/**
 * Types representing an array of [JSON data types][1].
 *
 * [1]: https://restfulapi.net/json-data-types
 */
export type JSONArray = JSONValue[]

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
export type JSONObject = { [Key in string]?: JSONValue }

/**
 * Type representing any [primitive][1] [JSON value][2].
 *
 * [1]: https://developer.mozilla.org/docs/Glossary/Primitive
 * [2]: https://restfulapi.net/json-data-types
 */
export type JSONPrimitive = boolean | null | number | string

/**
 * Types of [JSON data types][1].
 *
 * [1]: https://restfulapi.net/json-data-types
 */
export type JSONValue = JSONArray | JSONPrimitive | JSONObject
