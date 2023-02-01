/**
 * @file Type Tests - MapLike
 * @module tutils/interfaces/tests/unit-d/MapLike
 */

import type TestSubject from '../map-like'

describe('unit-d:interfaces/MapLike', () => {
  it('should be a generic', () => {
    expectTypeOf<TestSubject<string>[string]>().toBeString()
  })
})
