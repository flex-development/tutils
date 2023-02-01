/**
 * @file Type Tests - BsonTypeCode
 * @module tutils/enums/tests/unit-d/BsonTypeCode
 */

import type TestSubject from '../bson-type-code'

describe('unit-d:enums/BsonTypeCode', () => {
  it('should match [BOOL = 8]', () => {
    expectTypeOf<typeof TestSubject>().toHaveProperty('BOOL').toEqualTypeOf<8>()
  })

  it('should match [DECIMAL = 19]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DECIMAL')
      .toEqualTypeOf<19>()
  })

  it('should match [DOUBLE = 1]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DOUBLE')
      .toEqualTypeOf<1>()
  })

  it('should match [INT = 16]', () => {
    expectTypeOf<typeof TestSubject>().toHaveProperty('INT').toEqualTypeOf<16>()
  })

  it('should match [LONG = 18]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('LONG')
      .toEqualTypeOf<18>()
  })

  it('should match [REGEX = 11]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('REGEX')
      .toEqualTypeOf<11>()
  })
})
