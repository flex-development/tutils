/**
 * @file Utilities - keys
 * @module tutils/utils/keys
 */

import type { Nilable, PropertyKey } from '#src/types'
import alphabetize from './alphabetize'
import cast from './cast'
import identity from './identity'
import isArray from './is-array'
import isObject from './is-object'
import type KeysOptions from './keys.options'

/**
 * Returns an array containing an object's own enumerable string-keyed property
 * names. An empty array is returned if the object is `NIL`.
 *
 * Non-object arguments are [coerced to objects][1]. Of the primitive values,
 * only strings have own enumerable properties.
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion
 *
 * @see {@linkcode KeysOptions}
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 *
 * @todo examples
 * @todo support circular references
 *
 * @template K - Key type
 *
 * @param {Nilable<object>} obj - Object containing properties and methods
 * @param {Nilable<KeysOptions>} [options] - Key retrieval options
 * @param {Nilable<boolean>} [options.deep] - Include nested keys
 * @return {Extract<K, string>[]} Enumerable string-keyed property names
 */
const keys = <K extends PropertyKey = string>(
  obj: Nilable<object>,
  options?: Nilable<KeysOptions>
): Extract<K, string>[] => {
  return alphabetize(
    Object.keys((obj ??= {})).reduce<Extract<K, string>[]>((acc, key) => {
      // push key
      acc = cast([...acc, key])

      /**
       * Value of {@linkcode obj} at {@linkcode key}.
       *
       * @const {any} value
       */
      const value: any = obj![cast<keyof typeof obj>(key)]

      // exit early if deep key retrieval is disabled or value is not candidate
      // for deep key retrieval
      if (!options?.deep || !isObject(value)) return acc

      // get nested keys
      return cast([
        ...acc,
        ...(isArray(value)
          ? value.flatMap((item, index) => {
              /**
               * Key for {@linkcode item}.
               *
               * @const {string} i
               */
              const i: string = `${key}.${index}`

              return isObject(item)
                ? keys(item, { deep: true }).flatMap(k => [i, `${i}.${k}`])
                : [i]
            })
          : keys(value, { deep: true }).map(k => `${key}.${k}`))
      ])
    }, cast([])),
    identity,
    options
  )
}

export default keys
