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
export type IndexSignature = number | string

/**
 * Type representing any JSON object.
 */
export type JSONObject = Record<string, JSONValue>

/**
 * Types of JSON data values.
 */
export type JSONValue = OneOrMany<NullishPrimitive | PlainObject>

/**
 * Type representing any boolean that can also be `null`.
 */
export type NullishBoolean = boolean | null

/**
 * Type representing any number that can also be `null`.
 */
export type NullishNumber = number | null

/**
 * Type representing any defined `Primitive` that can also be `null`.
 */
export type NullishPrimitive = Primitive | null

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
export type ObjectPath<T> = ObjectPathNT<T> extends string | keyof T
  ? ObjectPathNT<T>
  : keyof T

/**
 * Type representing a nested object key or `never` if the key in question does
 * on exist on {@template T}.
 *
 * @template T - Object type
 * @template K - Nested object key
 *
 * - https://github.com/ghoullier/awesome-template-literal-types#dot-notation-string-type-safe
 */
export type ObjectPathN<T, K extends keyof T> = K extends string
  ? T[K] extends PlainObject
    ?
        | `${K}.${ObjectPathN<T[K], Exclude<keyof T[K], keyof any[]>> & string}`
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
export type ObjectPathNT<T> = ObjectPathN<T, keyof T> | keyof T

/**
 * Type representing an object value.
 *
 * @template T - Object type
 * @template P - Nested or top level object path
 *
 * - https://github.com/ghoullier/awesome-template-literal-types#dot-notation-string-type-safe
 */
export type ObjectPathValue<
  T,
  P extends ObjectPath<T>
> = P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? Rest extends ObjectPath<T[Key]>
      ? ObjectPathValue<T[Key], Rest>
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
 * Make certain fields required while making others required.
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
 * Type representing primitive value types.
 */
export type Primitive = boolean | number | string

/**
 * Type representing object with unknown values.
 */
export type UnknownObject = Record<IndexSignature, unknown>
