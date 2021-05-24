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
 * Built-in values.
 */
/* eslint-disable-next-line @typescript-eslint/ban-types */
export type BuiltIn = Date | Error | Function | Primitive | RegExp

/**
 * Type representing all comparison operators.
 */
export type ComparisonOperator = '=' | '!=' | '>' | '>=' | '<' | '<='

/**
 * Omits nested properties using a filter object.
 *
 * @template T - Object type
 * @template F - Filter object
 *
 * See: https://github.com/krzkaczor/ts-essentials#DeepOmit
 */
export type DeepOmit<T extends DeepOmitHelper<F>, F> = T extends BuiltIn
  ? T
  : T extends Map<infer KeyType, infer ValueType>
  ? ValueType extends DeepOmitHelper<F>
    ? Map<KeyType, DeepOmit<ValueType, F>>
    : T
  : T extends ReadonlyMap<infer KeyType, infer ValueType>
  ? ValueType extends DeepOmitHelper<F>
    ? ReadonlyMap<KeyType, DeepOmit<ValueType, F>>
    : T
  : T extends WeakMap<infer KeyType, infer ValueType>
  ? ValueType extends DeepOmitHelper<F>
    ? WeakMap<KeyType, DeepOmit<ValueType, F>>
    : T
  : T extends Set<infer ItemType>
  ? ItemType extends DeepOmitHelper<F>
    ? Set<DeepOmit<ItemType, F>>
    : T
  : T extends ReadonlySet<infer ItemType>
  ? ItemType extends DeepOmitHelper<F>
    ? ReadonlySet<DeepOmit<ItemType, F>>
    : T
  : T extends WeakSet<infer ItemType>
  ? ItemType extends DeepOmitHelper<F>
    ? WeakSet<DeepOmit<ItemType, F>>
    : T
  : T extends Array<infer ItemType>
  ? ItemType extends DeepOmitHelper<F>
    ? Array<DeepOmit<ItemType, F>>
    : T
  : T extends Promise<infer ItemType>
  ? ItemType extends DeepOmitHelper<F>
    ? Promise<DeepOmit<ItemType, F>>
    : T
  : { [K in Exclude<KeysOptional<T>, keyof F>]+?: T[K] } &
      OmitByType<
        {
          [K in Extract<KeysOptional<T>, keyof F>]+?: F[K] extends true
            ? never
            : T[K] extends DeepOmitHelper<F[K]>
            ? DeepOmit<T[K], F[K]>
            : T[K]
        },
        never
      > &
      { [K in Exclude<KeysRequired<T>, keyof F>]: T[K] } &
      OmitByType<
        {
          [K in Extract<KeysRequired<T>, keyof F>]: F[K] extends true
            ? never
            : T[K] extends DeepOmitHelper<F[K]>
            ? DeepOmit<T[K], F[K]>
            : T[K]
        },
        never
      >

/**
 * Helper for `DeepOmit`.
 *
 * See: https://github.com/krzkaczor/ts-essentials/blob/master/lib/types.ts
 *
 * @template T - Object type
 */
type DeepOmitHelper<T> =
  | {
      [K in keyof T]: T[K] extends never
        ? any
        : T[K] extends object
        ? DeepOmitHelper<T[K]>
        : never
    }
  | Array<DeepOmitHelper<T>>
  | Promise<DeepOmitHelper<T>>
  | Set<DeepOmitHelper<T>>
  | ReadonlySet<DeepOmitHelper<T>>
  | WeakSet<DeepOmitHelper<T>>
  | Map<any, DeepOmitHelper<T>>
  | WeakMap<any, DeepOmitHelper<T>>

/**
 * Recursive version of [`Partial`][1].
 *
 * [1]: https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
 */
export type DeepPartial<T> = T extends BuiltIn
  ? T
  : T extends Map<infer K, infer V>
  ? Map<DeepPartial<K>, DeepPartial<V>>
  : T extends ReadonlyMap<infer K, infer V>
  ? ReadonlyMap<DeepPartial<K>, DeepPartial<V>>
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<DeepPartial<K>, DeepPartial<V>>
  : T extends Set<infer U>
  ? Set<DeepPartial<U>>
  : T extends ReadonlySet<infer U>
  ? ReadonlySet<DeepPartial<U>>
  : T extends WeakSet<infer U>
  ? WeakSet<DeepPartial<U>>
  : T extends Array<infer U>
  ? T extends IsTuple<T>
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Array<DeepPartial<U>>
  : T extends Promise<infer U>
  ? Promise<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

/**
 * Recursive version of [`Required`][1].
 *
 * See: [type-fest - Basic][2]
 *
 * [1]: https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype
 * [2]: https://github.com/sindresorhus/type-fest/blob/main/source/basic.d.ts
 */
export type DeepRequired<T> = T extends BuiltIn
  ? NonNullable<T>
  : T extends Map<infer K, infer V>
  ? Map<DeepRequired<K>, DeepRequired<V>>
  : T extends ReadonlyMap<infer K, infer V>
  ? ReadonlyMap<DeepRequired<K>, DeepRequired<V>>
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<DeepRequired<K>, DeepRequired<V>>
  : T extends Set<infer U>
  ? Set<DeepRequired<U>>
  : T extends ReadonlySet<infer U>
  ? ReadonlySet<DeepRequired<U>>
  : T extends WeakSet<infer U>
  ? WeakSet<DeepRequired<U>>
  : T extends Promise<infer U>
  ? Promise<DeepRequired<U>>
  : T extends {}
  ? { [K in keyof T]-?: DeepRequired<T[K]> }
  : NonNullable<T>

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
 * Determines if a value is a [tuple][1] type.
 *
 * [1]: https://www.tutorialsteacher.com/typescript/typescript-tuple
 */
type IsTuple<T> = T extends [infer A]
  ? T
  : T extends [infer A, infer B]
  ? T
  : T extends [infer A, infer B, infer C]
  ? T
  : T extends [infer A, infer B, infer C, infer D]
  ? T
  : T extends [infer A, infer B, infer C, infer D, infer E]
  ? T
  : never

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
 * Gets the object keys defined as optional.
 *
 * @template T - Object type
 */
export type KeysOptional<T> = {
  [K in keyof T]-?: undefined extends { [K2 in keyof T]: K2 }[K] ? K : never
}[keyof T]

/**
 * Gets the object keys defined as required.
 *
 * @template T - Object type
 */
export type KeysRequired<T> = Exclude<keyof T, KeysOptional<T>>

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
 * Omits all properties of given type in object type.
 *
 * @template T - Object type
 * @template P - Type of properties to omit
 */
export type OmitByType<T, P> = Pick<
  T,
  { [K in keyof T]: T[K] extends P ? never : K }[keyof T]
>

/**
 * Type that accepts one piece of data or an array of data.
 *
 * @template T - Data
 */
export type OneOrMany<T> = T | Array<T>

/**
 * Represents data returned by a function, or the return type of a function that
 * never returns a value because an error was thrown.
 *
 * @template T - Return value
 */
export type OrNever<T> = T | never

/**
 * Type allowing all properties of T or some properties of T.
 *
 * @template T - Value type
 */
export type OrPartial<T> = T | DeepPartial<T>

/**
 * Type representing an asynchronous or synchronous value.
 *
 * @template T - Value type
 */
export type OrPromise<T> = T | Promise<T>

/**
 * Omit certain fields while making others optional.
 *
 * @template T - Object type
 * @template K - Object fields (top level) to omit
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> &
  DeepPartial<Pick<T, K>>

/**
 * Pick (require) certain fields while making others required.
 *
 * @template T - Object type
 * @template K - Object fields (top level) to pick
 */
export type PartialByRequired<T, K extends keyof T> = Pick<T, K> &
  DeepPartial<Omit<T, K>>

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
 * Picks all properties of given type in object type.
 *
 * @template T - Object type
 * @template P - Type of properties to pick
 */
export type PickByType<T, P> = Pick<
  T,
  { [K in keyof T]: T[K] extends P ? K : never }[keyof T]
>

/**
 * Type representing any object (`{}`) value.
 */
export type PlainObject = { [Key in IndexSignature]?: any }

/**
 * Type representing any [primitive][1] value.
 *
 * [1]: https://developer.mozilla.org/docs/Glossary/Primitive
 */
export type Primitive = JSONPrimitive | bigint | symbol | undefined

/**
 * Type representing object with unknown values.
 */
export type UnknownObject = { [Key in IndexSignature]?: unknown }
