/**
 * @file Type Definitions - BuiltIn
 * @module tutils/types/BuiltIn
 */

import type Fn from './fn'
import type Primitive from './primitive'
import type TypedArray from './typed-array'

/**
 * Standard built-in objects and primitives.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects
 */
type BuiltIn =
  | AggregateError
  | any[]
  | ArrayBuffer
  | AsyncGenerator
  | AsyncGeneratorFunction
  | AsyncIterator<any>
  | Atomics
  | DataView
  | Date
  | Error
  | EvalError
  | FinalizationRegistry<any>
  | Fn
  | Function
  | Generator
  | GeneratorFunction
  | Intl.Collator
  | Intl.DateTimeFormat
  | Intl.DisplayNames
  | Intl.ListFormat
  | Intl.Locale
  | Intl.NumberFormat
  | Intl.PluralRules
  | Intl.RelativeTimeFormat
  | Intl.Segmenter
  | Iterator<any>
  | JSON
  | Map<any, any>
  | Math
  | Primitive
  | Promise<any>
  | RangeError
  | Readonly<Fn>
  | ReferenceError
  | RegExp
  | Set<any>
  | SharedArrayBuffer
  | SyntaxError
  | TypedArray
  | TypeError
  | URIError
  | WeakMap<any, any>
  | WeakRef<any>
  | WeakSet<any>
  | readonly any[]
  | typeof Intl
  | typeof Proxy
  | typeof Reflect

export type { BuiltIn as default }
