/**
 * @file Type Tests - Numeric
 * @module tutils/types/tests/unit-d/Numeric
 */

import type TestSubject from '../numeric'

describe('unit-d:types/Numeric', () => {
  it('should allow value that is stringified number', () => {
    assertType<TestSubject>(`${faker.number.int()}`)
  })

  it('should not allow value that is not stringified number', () => {
    expectTypeOf<TestSubject>().not.toEqualTypeOf(faker.string.uuid())
  })
})
