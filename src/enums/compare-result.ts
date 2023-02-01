/**
 * @file Enums - CompareResult
 * @module tutils/enums/CompareResult
 */

/**
 * Comparison function return values.
 *
 * Comparison functions are expected to return a negative number if one argument
 * is less than the other, a positive number if an argument is greater than the
 * other, or zero (`0`) if the arguments are equal.
 *
 * @enum {number}
 */
enum CompareResult {
  EQUAL = 0,
  GREATER_THAN = 1,
  LESS_THAN = -1
}

export default CompareResult
