/**
 * @file Type Definitions - ClassConstructor
 * @module tutils/types/ClassConstructor
 */

import type ObjectPlain from './object-plain.type'

/**
 * [Object class][1] type.
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes
 *
 * @template T - Object type
 * @template A - Constructor arguments
 */
type ClassConstructor<
  T extends ObjectPlain = ObjectPlain,
  A extends any[] = any[]
> = new (...args: A) => T

export { type ClassConstructor as default }
