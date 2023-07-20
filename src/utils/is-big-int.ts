/**
 * @file Utilities - isBigInt
 * @module tutils/utils/isBigInt
 */

/**
 * Checks if `value` is a [`bigint`][1] [primitive][2].
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 * [2]: https://developer.mozilla.org/docs/Glossary/Primitive
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is bigint} `true` if `value` is `bigint` primitive
 */
const isBigInt = (value: unknown): value is bigint => typeof value === 'bigint'

export default isBigInt
