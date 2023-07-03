/**
 * @file Type Tests - ContinuousValue
 * @module tutils/types/tests/unit-d/ContinuousValue
 */

import type TestSubject from '../continuous-value'

describe('unit-d:types/ContinuousValue', () => {
  it('should extract Date', () => {
    expectTypeOf<TestSubject>().extract<Date>().not.toBeNever()
  })

  it('should extract number', () => {
    expectTypeOf<TestSubject>().extract<number>().not.toBeNever()
  })
})
