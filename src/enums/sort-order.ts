/**
 * @file Enums - SortOrder
 * @module tutils/enums/SortOrder
 */

/**
 * Values indicating how to sort a dataset.
 *
 * @see https://docs.mongodb.com/manual/reference/method/cursor.sort/#ascending-descending-sort
 *
 * @enum {number}
 */
enum SortOrder {
  ASCENDING = 1,
  DESCENDING = -1
}

export default SortOrder
