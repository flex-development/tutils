/**
 * @file Utilities - keys
 * @module tutils/utils/keys
 */

import type { Keys, Nilable } from '#src/types'
import alphabetize from './alphabetize'
import cast from './cast'
import desegment from './desegment'
import get from './get'
import identity from './identity'
import isString from './is-string'
import type KeysOptions from './keys.options'
import select from './select'

/**
 * Returns an array containing an object's own enumerable string-keyed property
 * names.
 *
 * Non-object arguments are [coerced to objects][1]. Of the primitive values,
 * only strings have own enumerable properties.
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion
 *
 * @see {@linkcode Keys}
 * @see {@linkcode KeysOptions}
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 *
 * @todo examples
 * @todo support circular references
 *
 * @template T - Target value type
 * @template K - Key retrieval options
 *
 * @param {T} target - Target value
 * @param {K} [options] - Key retrieval options
 * @param {Nilable<boolean>} [options.deep] - Include nested keys
 * @return {Keys<T, K>[]} Enumerable string-keyed property names
 */
const keys = <T, K extends Nilable<KeysOptions> = undefined>(
  target: T,
  options?: K
): Keys<T, K> => {
  return cast(
    alphabetize(
      Object.keys(target ?? {}).reduce<Keys<T, K>>((acc, key) => {
        /**
         * Value of {@linkcode target} at {@linkcode key}.
         *
         * @const {any} value
         */
        const value: any = get(target, key)

        // add property name
        acc.push(key)

        // exit early if deep key retrieval should be skipped
        if (!options?.deep || isString(target)) return acc

        // get nested keys
        return cast([
          ...acc,
          ...select(keys(value, options), null, nk => desegment([key, nk]))
        ])
      }, cast([])),
      identity,
      options
    )
  )
}

export default keys
