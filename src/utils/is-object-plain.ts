/**
 * @file Utilities - isObjectPlain
 * @module tutils/utils/isObjectPlain
 */

import type { ObjectPlain } from '#src/types'
import isNull from './is-null'

/**
 * Checks if the given `value` is a plain object.
 *
 * A plain object is an object created by the [`Object`][1] constructor or an
 * object with a `[[Prototype]]` of `null`.
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is ObjectPlain} `true` if `value` is plain object
 */
const isObjectPlain = (value: unknown): value is ObjectPlain => {
  /**
   * Plain object check for {@linkcode value}.
   *
   * @var {boolean} plain
   */
  let plain: boolean = false

  // determine if value is plain object
  switch (true) {
    case Array.isArray(value):
    case isNull(value):
    case typeof value !== 'object':
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
      plain = Object.getPrototypeOf(value) === proto

      break
  }

  return plain
}

export default isObjectPlain