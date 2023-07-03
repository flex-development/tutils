/**
 * @file Type Definitions - Reverse
 * @module tutils/types/Reverse
 */

import type EmptyArray from './empty-array'
import type EmptyString from './empty-string'
import type IfAny from './if-any'
import type Join from './join'
import type Length from './length'
import type Split from './split'

/**
 * Reverses array `T`.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 *
 * @internal
 *
 * @template T - Array to reverse
 * @template Acc - Reversal accumulator
 */
type ReverseArray<
  T extends readonly unknown[],
  Acc extends readonly unknown[] = EmptyArray
> = number extends Length<T>
  ? T
  : T extends Readonly<EmptyArray>
  ? Acc
  : T extends readonly [...infer X extends readonly T[number][], infer H]
  ? ReverseArray<X, [...Acc, H]>
  : T extends readonly [...infer X extends readonly T[number][], (infer H)?]
  ? ReverseArray<X, [...Acc, H?]>
  : never

/**
 * Reverses `T`.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 *
 * @example
 *  type X = Reverse<['a', 'b', 'c']>
 *  // ['c', 'b', 'a']
 * @example
 *  type X = Reverse<['a', 'b', 'c'?]>
 *  // ['c' | undefined, 'b', 'a']
 * @example
 *  type X = Reverse<['a']>
 *  // ['a']
 * @example
 *  type X = Reverse<['c'?]>
 *  // ['c'?]
 * @example
 *  type X = Reverse<'abc'>
 *  // 'cba'
 * @example
 *  type X = Reverse<'racecar'>
 *  // 'racecar'
 * @example
 *  type X = Reverse<string[]>
 *  // string[]
 * @example
 *  type X = Reverse<string>
 *  // string
 * @example
 *  type X = Reverse<any>
 *  // any[]
 * @example
 *  type X = Reverse<never>
 *  // never
 *
 * @template T - Array or string to reverse
 */
type Reverse<T extends string | readonly unknown[]> = IfAny<
  T,
  any[],
  Length<Required<T>> extends 1
    ? T
    : T extends string
    ? Join<ReverseArray<Split<T, EmptyString>>, EmptyString>
    : T extends readonly unknown[]
    ? ReverseArray<T>
    : never
>

export type { Reverse as default }
