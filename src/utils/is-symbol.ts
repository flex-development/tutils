/**
 * @file Type Guards - isSymbol
 * @module tutils/utils/isSymbol
 */

/**
 * Checks if the given `value` is a [`symbol`][1] [primitive][2].
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol
 * [2]: https://developer.mozilla.org/docs/Glossary/Primitive
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is symbol} `true` if `value` is `symbol`
 */
const isSymbol = (value: unknown): value is symbol => typeof value === 'symbol'

export default isSymbol
