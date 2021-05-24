/**
 * @file Utility Types
 * @module types
 */

/**
 * Type representing any value.
 */
export type ANY = any

/**
 * Helper type indicating a type that needs a better type definition.
 */
export type FIXME = any

/**
 * Boolean and string values representing `true` or `false`.
 */
export type Booleanish = boolean | 'true' | 'false'

/**
 * Type representing all comparison operators.
 */
export type ComparisonOperator = '=' | '!=' | '>' | '>=' | '<' | '<='

/**
 * Type representing any empty object.
 */
export type EmptyObject = Record<never, never>

/**
 * Type representing `null`, `undefined`, and empty strings.
 */
export type EmptyPrimitive = '' | null | undefined

/**
 * Valid index signature types.
 */
export type IndexSignature = number | symbol | string

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

/**
 * Type representing any boolean that can also be `null`.
 */
export type NullishBoolean = boolean | null

/**
 * Type representing any number that can also be `null`.
 */
export type NullishNumber = number | null

/**
 * Type representing any string that can also be `null`.
 */
export type NullishString = string | null

/**
 * Type representing a `number` or `string`.
 */
export type NumberString = number | string

/**
 * Type representing a nested or top level object key.
 *
 * @template T - Object type
 *
 * See: https://github.com/ghoullier/awesome-template-literal-types
 */
export type Path<T> = PathNT<T> extends string | keyof T ? PathNT<T> : keyof T

/**
 * Type representing a nested object key or `never` if the key in question does
 * on exist on {@template T}.
 *
 * @template T - Object type
 * @template K - Nested object key
 *
 * - https://github.com/ghoullier/awesome-template-literal-types#dot-notation-string-type-safe
 */
export type PathN<T, K extends keyof T> = K extends string
  ? T[K] extends PlainObject
    ?
        | `${K}.${PathN<T[K], Exclude<keyof T[K], keyof any[]>> & string}`
        | `${K}.${Exclude<keyof T[K], keyof any[]> & string}`
    : never
  : never

/**
 * Type representing a nested object key, or top level key if the key in
 * question does on exist on {@template T}.
 *
 * @template T - Object type
 *
 * - https://github.com/ghoullier/awesome-template-literal-types#dot-notation-string-type-safe
 */
export type PathNT<T> = PathN<T, keyof T> | keyof T

/**
 * Type representing an object value.
 *
 * @template T - Object type
 * @template P - Nested or top level object path
 *
 * - https://github.com/ghoullier/awesome-template-literal-types#dot-notation-string-type-safe
 */
export type PathValue<
  T,
  P extends Path<T>
> = P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? Rest extends Path<T[Key]>
      ? PathValue<T[Key], Rest>
      : never
    : never
  : P extends keyof T
  ? T[P]
  : never

/**
 * Type that accepts one piece of data or an array of data.
 *
 * @template T - Data
 */
export type OneOrMany<T = ANY> = T | Array<T>

/**
 * Represents data returned by a function, or the return type of a function that
 * never returns a value because an error was thrown.
 *
 * @template T - Return value
 */
export type OrNever<T = any> = T | never

/**
 * Type allowing all properties of T or some properties of T.
 *
 * @template T - Object type
 */
export type OrPartial<T = UnknownObject> = T | Partial<T>

/**
 * Type representing an asynchronous or synchronous value.
 *
 * @template T - type
 */
export type OrPromise<T = any> = T | Promise<T>

/**
 * Omit certain fields while making others optional.
 *
 * @template T - Object type
 * @template K - Object fields (top level) to omit
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

/**
 * Pick (require) certain fields while making others required.
 *
 * @template T - Object type
 * @template K - Object fields (top level) to pick
 */
export type PartialByRequired<T, K extends keyof T> = Pick<T, K> &
  Partial<Omit<T, K>>

/**
 * Type representing any object (`{}`) value.
 */
export type PlainObject = Record<IndexSignature, any>

/**
 * Type representing any [primitive][1] value.
 *
 * [1]: https://developer.mozilla.org/docs/Glossary/Primitive
 */
export type Primitive = JSONPrimitive | bigint | symbol | undefined

/**
 * Type representing object with unknown values.
 */
export type UnknownObject = Record<IndexSignature, unknown>
