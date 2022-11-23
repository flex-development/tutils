/**
 * @file Type Definitions - Class
 * @module tutils/types/Class
 */

import type Constructor from './constructor'

/**
 * Matches a [`class` object][1].
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes
 *
 * @template P - Class prototype
 * @template A - Class `constructor` arguments
 */
type Class<P, A extends unknown[] = any[]> = Constructor<P, A> & {
  prototype: P
}

export { type Class as default }
