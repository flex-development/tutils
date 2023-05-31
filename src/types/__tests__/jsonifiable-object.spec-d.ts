/**
 * @file Type Tests - JsonifiableObject
 * @module tutils/types/tests/unit-d/JsonifiableObject
 */

import type Jsonifiable from '../jsonifiable'
import type TestSubject from '../jsonifiable-object'
import type Optional from '../optional'

describe('unit-d:types/JsonifiableObject', () => {
  it('should have keys of type string', () => {
    expectTypeOf<keyof TestSubject>().toBeString()
  })

  it('should have properties of type Optional<Jsonifiable>', () => {
    expectTypeOf<TestSubject[string]>().toEqualTypeOf<Optional<Jsonifiable>>()
  })
})
