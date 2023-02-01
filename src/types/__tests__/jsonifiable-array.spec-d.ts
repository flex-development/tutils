/**
 * @file Type Tests - JsonifiableArray
 * @module tutils/types/tests/unit-d/JsonifiableArray
 */

import type Jsonifiable from '../jsonifiable'
import type TestSubject from '../jsonifiable-array'

describe('unit-d:types/JsonifiableArray', () => {
  it('should equal readonly Jsonifiable[]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<readonly Jsonifiable[]>()
  })
})
