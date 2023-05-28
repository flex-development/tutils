/**
 * @file Type Tests - EmptyObject
 * @module tutils/types/tests/unit-d/EmptyObject
 */

import type TestSubject from '../empty-object'
import type PropertyKey from '../property-key'

describe('unit-d:types/EmptyObject', () => {
  it('should have keys of type PropertyKey', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<PropertyKey>()
  })

  it('should have properties of type never', () => {
    expectTypeOf<TestSubject[PropertyKey]>().toBeNever()
  })
})
