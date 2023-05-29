/**
 * @file Type Tests - Sift
 * @module tutils/types/tests/unit-d/Sift
 */

import type EmptyArray from '../empty-array'
import type EmptyString from '../empty-string'
import type NIL from '../nil'
import type TestSubject from '../sift'

describe('unit-d:types/Sift', () => {
  type I = EmptyString | NIL | 0 | 0n | 1 | 1n | false

  it('should equal T if T extends EmptyArray', () => {
    expectTypeOf<TestSubject<EmptyArray>>().toEqualTypeOf<EmptyArray>()
  })

  it('should filter Falsy out of T', () => {
    // Arrange
    type T1 = [1, 2, 3]
    type T2 = [I]
    type T3 = I[]

    // Expect
    expectTypeOf<TestSubject<T1>>().toEqualTypeOf<T1>()
    expectTypeOf<TestSubject<T2>>().toEqualTypeOf<[1, 1n]>()
    expectTypeOf<TestSubject<T3>>().toEqualTypeOf<(1 | 1n)[]>()
  })
})
