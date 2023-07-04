/**
 * @file Type Tests - Invert
 * @module tutils/types/tests/unit-d/Invert
 */

import type EmptyObject from '../empty-object'
import type TestSubject from '../invert'
import type PropertyKey from '../property-key'

describe('unit-d:types/Invert', () => {
  it('should equal Record<PropertyKey, PropertyKey> if T is any', () => {
    // Arrange
    type Expect = Record<PropertyKey, PropertyKey>

    // Expect
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<Expect>()
  })

  it('should equal Record<never, never> if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<Record<never, never>>()
  })

  describe('T extends { [K in PropertyKey]?: Primitive }', () => {
    it('should construct object type with K and T[K] reversed', () => {
      // Arrange
      type T = {
        [x: number]: string | undefined
        readonly 0: 'a'
        1: 'b'
        2: 'c'
        3?: 'd'
        4?: 'e'
      }

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<{
        [x: string]: number
        readonly a: 0
        b: 1
        c: 2
        d?: 3
        e?: 4
        undefined?: 3 | 4
      }>()
    })

    describe('EmptyObject extends T', () => {
      it('should equal {}', () => {
        expectTypeOf<TestSubject<{}>>().toEqualTypeOf<{}>()
        expectTypeOf<TestSubject<EmptyObject>>().toEqualTypeOf<{}>()
      })
    })
  })
})
