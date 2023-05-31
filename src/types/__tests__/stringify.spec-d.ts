/**
 * @file Type Tests - Stringify
 * @module tutils/types/tests/unit-d/Stringify
 */

import type TestSubject from '../stringify'

describe('unit-d:types/Stringify', () => {
  it('should equal `${T}` if T extends Joinable', () => {
    expectTypeOf<TestSubject<0>>().toEqualTypeOf<'0'>()
    expectTypeOf<TestSubject<boolean>>().toEqualTypeOf<'false' | 'true'>()
  })

  it('should equal never if T does not extend Joinable', () => {
    expectTypeOf<TestSubject<object>>().toBeNever()
    expectTypeOf<TestSubject<symbol>>().toBeNever()
  })
})
