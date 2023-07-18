/**
 * @file Type Definitions - Constructor
 * @module tutils/types/Constructor
 */

/**
 * A [`class` constructor][1].
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes/constructor
 *
 * @template T - Constructor instance type
 * @template A - Constructor arguments
 */
type Constructor<T, A extends readonly unknown[] = any[]> = new (
  ...args: A
) => T

export type { Constructor as default }
