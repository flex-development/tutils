/**
 * @file Enums - BsonTypeCode
 * @module tutils/enums/BsonTypeCode
 */

/**
 * Numbers corresponding to [BSON types][1].
 *
 * [1]: https://docs.mongodb.com/manual/reference/operator/query/type/#available-types
 *
 * @enum {number}
 */
enum BsonTypeCode {
  BOOL = 8,
  DECIMAL = 19,
  DOUBLE = 1,
  INT = 16,
  LONG = 18,
  REGEX = 11
}

export default BsonTypeCode
