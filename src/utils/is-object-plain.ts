/**
 * @file Utilities - isObjectPlain
 * @module tutils/utils/isObjectPlain
 */

import type { ObjectPlain } from '#src/types'
import isNull from './is-null'
import isObject from './is-object'

/**
 * Checks if `value` is a plain object ([POJO][1]).
 *
 * A plain object is an object created by the [`Object`][2] constructor or an
 * object with a `[[Prototype]]` of `null`.
 *
 * [1]: https://masteringjs.io/tutorials/fundamentals/pojo
 * [2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
 *
 * @see {@linkcode ObjectPlain}
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is ObjectPlain} `true` if `value` is plain object
 */
const isObjectPlain = (value: unknown): value is ObjectPlain => {
  /**
   * Plain object check.
   *
   * @var {boolean} plain
   */
  let plain: boolean = false

  // determine if value is plain object
  switch (true) {
    case !isObject(value):
      break
    case isNull(Object.getPrototypeOf(value)):
      plain = true
      break
    default:
      /**
       * Prototype being evaluated.
       *
       * @const {any} proto
       */
      let proto: any = value

      // check prototype
      while (!isNull(Object.getPrototypeOf(proto))) {
        proto = Object.getPrototypeOf(proto)
      }

      // prototypes are equal => value is plain object
      plain = proto === Object.getPrototypeOf(value)

      break
  }

  return plain
}

export default isObjectPlain
