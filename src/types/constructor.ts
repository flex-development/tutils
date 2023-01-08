/**
 * @file Type Definitions - Constructor
 * @module tutils/types/Constructor
 */

/**
 * Matches a [`class` constructor][1].
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes/constructor
 *
 * @template P - Class prototype
 * @template A - Constructor arguments
 */
type Constructor<P, A extends unknown[] = any[]> = new (...args: A) => P

export type { Constructor as default }
