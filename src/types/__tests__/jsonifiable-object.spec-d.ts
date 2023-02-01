/**
 * @file Type Tests - JsonifiableObject
 * @module tutils/types/tests/unit-d/JsonifiableObject
 */

import type Jsonifiable from '../jsonifiable'
import type TestSubject from '../jsonifiable-object'

describe('unit-d:types/JsonifiableObject', () => {
  it('should have keys of type string', () => {
    expectTypeOf<keyof TestSubject>().toBeString()
  })

  it('should have properties of type Jsonifiable | undefined', () => {
    expectTypeOf<TestSubject[string]>().toEqualTypeOf<Jsonifiable | undefined>()
  })
})
