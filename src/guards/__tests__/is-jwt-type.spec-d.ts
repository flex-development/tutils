/**
 * @file Type Tests - isJwtType
 * @module tutils/guards/tests/unit-d/isJwtType
 */

import type { JwtType } from '#src/enums'
import type testSubject from '../is-jwt-type'

describe('unit-d:guards/isJwtType', () => {
  it('should guard JwtType', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<JwtType>()
  })
})
