/**
 * @file Type Tests - BsonTypeAlias
 * @module tutils/enums/tests/unit-d/BsonTypeAlias
 */

import type TestSubject from '../bson-type-alias'

describe('unit-d:enums/BsonTypeAlias', () => {
  it('should match [BOOL = "bool"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('BOOL')
      .toMatchTypeOf<'bool'>()
  })

  it('should match [DECIMAL = "decimal"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DECIMAL')
      .toMatchTypeOf<'decimal'>()
  })

  it('should match [DOUBLE = "double"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DOUBLE')
      .toMatchTypeOf<'double'>()
  })

  it('should match [INT = "int"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('INT')
      .toMatchTypeOf<'int'>()
  })

  it('should match [LONG = "long"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('LONG')
      .toMatchTypeOf<'long'>()
  })

  it('should match [REGEX = "regex"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('REGEX')
      .toMatchTypeOf<'regex'>()
  })
})
