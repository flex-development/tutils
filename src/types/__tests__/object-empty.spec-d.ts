/**
 * @file Type Tests - ObjectEmpty
 * @module tutils/types/tests/unit-d/ObjectEmpty
 */

import type TestSubject from '../object-empty'

describe('unit-d:types/ObjectEmpty', () => {
  it('should have keys of type string', () => {
    expectTypeOf<keyof TestSubject>().toBeString()
  })

  it('should have properties of type never', () => {
    expectTypeOf<TestSubject[string]>().toBeNever()
  })
})
