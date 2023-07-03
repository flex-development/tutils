/**
 * @file Type Tests - NumberString
 * @module tutils/types/tests/unit-d/NumberString
 */

import type TestSubject from '../number-string'

describe('unit-d:types/NumberString', () => {
  it('should extract number', () => {
    expectTypeOf<TestSubject>().extract<number>().not.toBeNever()
  })

  it('should extract string', () => {
    expectTypeOf<TestSubject>().extract<string>().not.toBeNever()
  })
})
