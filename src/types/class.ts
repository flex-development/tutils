/**
 * @file Type Definitions - Class
 * @module tutils/types/Class
 */

import type Constructor from './constructor'

/**
 * A [`class`][1].
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes
 *
 * @template T - Class prototype
 * @template A - Class constructor arguments
 */
type Class<T, A extends unknown[] = any[]> = Constructor<T, A> & {
  prototype: T
}

export type { Class as default }
