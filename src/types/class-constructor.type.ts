import type ObjectPlain from './object-plain.type'

/**
 * @file Type Definitions - ClassConstructor
 * @module tutils/types/ClassConstructor
 */

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
> = {
  new (...args: A): T
}

export default ClassConstructor
