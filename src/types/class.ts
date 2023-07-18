/**
 * @file Type Definitions - Class
 * @module tutils/types/Class
 */

/**
 * A [`class`][1].
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes
 *
 * @template T - Class instance type
 * @template A - Constructor arguments
 */
type Class<T, A extends readonly unknown[] = any[]> = {
  new (...args: A): T
  prototype: T
}

export type { Class as default }
