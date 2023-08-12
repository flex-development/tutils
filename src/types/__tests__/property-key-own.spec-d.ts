/**
 * @file Type Tests - OwnPropertyKey
 * @module tutils/types/tests/unit-d/OwnPropertyKey
 */

import type TestSubject from '../property-key-own'

describe('unit-d:types/OwnPropertyKey', () => {
  it('should extract string', () => {
    expectTypeOf<TestSubject>().extract<string>().not.toBeNever()
  })

  it('should extract symbol', () => {
    expectTypeOf<TestSubject>().extract<symbol>().not.toBeNever()
  })
})
