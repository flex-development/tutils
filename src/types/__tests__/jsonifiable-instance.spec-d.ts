/**
 * @file Type Tests - JsonifiableInstance
 * @module tutils/types/tests/unit-d/JsonifiableInstance
 */

import type Jsonifiable from '../jsonifiable'
import type TestSubject from '../jsonifiable-instance'

describe('unit-d:types/JsonifiableInstance', () => {
  it('should match [toJSON: () => Jsonifiable]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('toJSON')
      .toEqualTypeOf<() => Jsonifiable>()
  })
})
