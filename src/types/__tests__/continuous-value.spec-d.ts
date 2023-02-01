/**
 * @file Type Tests - ContinuousValue
 * @module tutils/types/tests/unit-d/ContinuousValue
 */

import type TestSubject from '../continuous-value'

describe('unit-d:types/ContinuousValue', () => {
  it('should extract Date', () => {
    expectTypeOf<TestSubject>().extract<Date>().toEqualTypeOf<Date>()
  })

  it('should extract number', () => {
    expectTypeOf<TestSubject>().extract<number>().toBeNumber()
  })
})
