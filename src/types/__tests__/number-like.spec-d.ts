/**
 * @file Type Tests - NumberLike
 * @module tutils/types/tests/unit-d/NumberLike
 */

import type TestSubject from '../number-like'
import type Numeric from '../numeric'

describe('unit-d:types/NumberLike', () => {
  it('should extract Numeric', () => {
    expectTypeOf<TestSubject>().extract<Numeric>().toEqualTypeOf<Numeric>()
  })

  it('should extract number', () => {
    expectTypeOf<TestSubject>().extract<number>().toBeNumber()
  })
})
