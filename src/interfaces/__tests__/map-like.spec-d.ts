/**
 * @file Type Tests - MapLike
 * @module tutils/interfaces/tests/unit-d/MapLike
 */

import type TestSubject from '../map-like'

describe('unit-d:interfaces/MapLike', () => {
  type T = string

  it('should match [[index: number]: T]', () => {
    expectTypeOf<TestSubject<T>[number]>().toEqualTypeOf<T>()
  })

  it('should match [[index: string]: T]', () => {
    expectTypeOf<TestSubject<T>[string]>().toEqualTypeOf<T>()
  })
})
