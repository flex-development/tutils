/**
 * @file Enums - BsonTypeAlias
 * @module tutils/enums/BsonTypeAlias
 */

/**
 * String aliases corresponding to [BSON types][1].
 *
 * [1]: https://docs.mongodb.com/manual/reference/operator/query/type/#available-types
 *
 * @enum {string}
 */
enum BsonTypeAlias {
  BOOL = 'bool',
  DECIMAL = 'decimal',
  DOUBLE = 'double',
  INT = 'int',
  LONG = 'long',
  REGEX = 'regex'
}

export default BsonTypeAlias
