/**
 * @file Type Tests - EnsureString
 * @module tutils/types/tests/unit-d/EnsureString
 */

import type TestSubject from '../ensure-string'

describe('unit-d:types/EnsureString', () => {
  it('should equal T & string', () => {
    expectTypeOf<TestSubject<symbol>>().toEqualTypeOf<string & symbol>()
  })
})
