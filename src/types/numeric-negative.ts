/**
 * @file Type Definitions - NegativeNumeric
 * @module tutils/types/NegativeNumeric
 */

/**
 * A negative numeric.
 *
 * A numeric is a string containing only numbers (not including the leading `-`
 * if the numeric is negative).
 *
 * @example
 *  type X = '-1'
 */
type NegativeNumeric = `-${number}`

export type { NegativeNumeric as default }
