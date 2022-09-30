/**
 * @file Type Definitions - Constructor
 * @module tutils/types/Constructor
 */

import type ObjectPlain from './object-plain'

/**
 * [Object class][1] type.
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes
 *
 * @template T - Object type
 * @template A - Constructor arguments
 */
type Constructor<
  T extends ObjectPlain = ObjectPlain,
  A extends any[] = any[]
> = new (...args: A) => T

export { type Constructor as default }
