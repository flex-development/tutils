/**
 * @file Type Tests - NaturalRange
 * @module tutils/types/tests/unit-d/NaturalRange
 */

import type TestSubject from '../range-natural'

describe('unit-d:types/NaturalRange', () => {
  it('should construct union of numbers in the range [Acc["length"],M)', () => {
    expectTypeOf<TestSubject<3>>().toEqualTypeOf<0 | 1 | 2>()
    expectTypeOf<TestSubject<4, [1]>>().toEqualTypeOf<1 | 2 | 3>()
  })

  it('should equal never if M extends 0', () => {
    expectTypeOf<TestSubject<0>>().toBeNever()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<['a', 'b'?]['length']>>().toEqualTypeOf<0 | 1>()
    })
  })
})
