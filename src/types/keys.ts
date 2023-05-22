/**
 * @file Type Definitions - Keys
 * @module tutils/types/Keys
 */

import type BuiltInObject from './built-in-object'
import type Class from './class'
import type EmptyArray from './empty-array'
import type EmptyObject from './empty-object'
import type Fn from './fn'
import type IfTuple from './if-tuple'
import type Indices from './indices'
import type Numeric from './numeric'
import type Primitive from './primitive'

/**
 * Constructs a union of enumerable string-keyed property names.
 *
 * **Note**: TypeScript does not track enumerability. This type does its best to
 * remove non-enumerable properties for built-in objects only.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 * @see https://github.com/microsoft/TypeScript/issues/9726
 *
 * @template T - Type to evaluate
 * @template B - Built-in objects
 */
type Keys<T, B extends BuiltInObject = BuiltInObject> = Extract<
  NonNullable<T> extends readonly unknown[]
    ? NonNullable<T> extends EmptyArray
      ? Exclude<keyof NonNullable<T>, keyof any[]> | Indices<T>
      : IfTuple<
          NonNullable<T>,
          Exclude<keyof NonNullable<T>, keyof any[]> | Indices<T>,
          Exclude<keyof NonNullable<T>, keyof any[]> | Numeric
        >
    : NonNullable<T> extends Readonly<Fn>
    ? Exclude<keyof NonNullable<T>, keyof Fn>
    : NonNullable<T> extends Readonly<Exclude<B, Error>>
    ? T extends Readonly<InstanceType<Class<infer U>>>
      ? Exclude<keyof NonNullable<T>, keyof Extract<Exclude<B, Error>, U>>
      : never
    : T extends Readonly<Primitive>
    ? T extends infer U
      ? Exclude<keyof T, keyof Extract<Primitive, Partial<U>>>
      : never
    : T extends EmptyObject
    ? never
    : keyof NonNullable<T>,
  string
>

export type { Keys as default }
