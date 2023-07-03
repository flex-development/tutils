/**
 * @file Type Tests - UnwrapNumeric
 * @module tutils/types/tests/unit-d/UnwrapNumeric
 */

import type NumberLike from '../number-like'
import type Numeric from '../numeric'
import type NegativeNumeric from '../numeric-negative'
import type TestSubject from '../unwrap-numeric'

describe('unit-d:types/UnwrapNumeric', () => {
  it('should equal never if T is never', () => {
    expectTypeOf<TestSubject<never>>().toBeNever()
  })

  it('should equal never if T is unknown', () => {
    expectTypeOf<TestSubject<unknown>>().toBeNever()
  })

  it('should equal number if NegativeNumeric extends T', () => {
    expectTypeOf<TestSubject<NegativeNumeric>>().toEqualTypeOf<number>()
  })

  it('should equal number if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<number>()
  })

  describe('T extends `-${infer N extends 0}`', () => {
    it('should equal N', () => {
      expectTypeOf<TestSubject<'-0'>>().toEqualTypeOf<0>()
    })
  })

  describe('T extends `${infer N extends number}`', () => {
    it('should equal N', () => {
      expectTypeOf<TestSubject<'-3'>>().toEqualTypeOf<-3>()
      expectTypeOf<TestSubject<'3'>>().toEqualTypeOf<3>()
      expectTypeOf<TestSubject<Numeric>>().toEqualTypeOf<number>()
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<'-3' | '3' | 0>>().toEqualTypeOf<-3 | 3>()
      expectTypeOf<TestSubject<'0' | '1' | '2'>>().toEqualTypeOf<0 | 1 | 2>()
      expectTypeOf<TestSubject<NumberLike>>().toEqualTypeOf<number>()
    })
  })
})
