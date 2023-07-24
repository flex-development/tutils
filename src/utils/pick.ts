/**
 * @file Utilities - pick
 * @module tutils/utils/pick
 */

import type { Objectify, Pick, PropertyKey } from '#src/types'
import cast from './cast'
import define from './define'
import get from './get'
import hasOwn from './has-own'
import ksort from './ksort'

/**
 * Selects properties from a value.
 *
 * The initial target value **will not** be modified.
 *
 * @see {@linkcode Pick}
 *
 * @todo examples
 *
 * @template T - Target value type
 * @template K - Keys to select
 *
 * @param {T} target - Value to pick from
 * @param {ReadonlyArray<K>} keys - Keys to select
 * @return {Pick<T, K>} New object with properties in `keys` selected
 */
const pick = <T, K extends PropertyKey>(
  target: T,
  keys: readonly K[]
): Pick<T, K> => {
  return cast(
    ksort(
      keys.reduce<Objectify<any>>((acc, key) => {
        return hasOwn(target, key)
          ? define(acc, key, { value: get(target, key) })
          : acc
      }, {})
    )
  )
}

export default pick
