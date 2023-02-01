/**
 * @file Type Tests - JwtType
 * @module tutils/enums/tests/unit-d/JwtType
 */

import type TestSubject from '../jwt-type'

describe('unit-d:enums/JwtType', () => {
  it('should match [ACCESS = "ACCESS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ACCESS')
      .toMatchTypeOf<'ACCESS'>()
  })

  it('should match [REFRESH = "REFRESH"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('REFRESH')
      .toMatchTypeOf<'REFRESH'>()
  })

  it('should match [VERIFICATION = "VERIFICATION"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('VERIFICATION')
      .toMatchTypeOf<'VERIFICATION'>()
  })
})
