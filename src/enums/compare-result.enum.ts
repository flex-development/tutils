/**
 * @file Enums - CompareResult
 * @module tutils/enums/CompareResult
 */

/**
 * Comparison function return values.
 *
 * Comparison functions are expected to return a negative value if the first
 * argument is less than the second argument, zero if they're equal, and a
 * positive value otherwise.
 *
 * @enum {number}
 */
enum CompareResult {
  EQUAL = 0,
  GREATER_THAN = 1,
  LESS_THAN = -1
}

export default CompareResult
