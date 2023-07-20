/**
 * @file Type Tests - properties
 * @module tutils/utils/tests/unit-d/properties
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { tag as opaque } from '#src/types/opaque'
import type testSubject from '../properties'
import type { Properties } from '../properties'

describe('unit-d:utils/properties', () => {
  it('should return Properties<K>[]', () => {
    // Arrange
    type T = Vehicle
    type K = keyof T | typeof opaque | 0
    type Expect = Properties<K>[]

    // Expect
    expectTypeOf<typeof testSubject<T, K>>().returns.toEqualTypeOf<Expect>()
  })
})
