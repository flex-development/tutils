/**
 * @file Type Tests - Segment
 * @module tutils/types/tests/unit-d/Segment
 */

import type Dot from '../dot'
import type EmptyArray from '../empty-array'
import type EmptyString from '../empty-string'
import type Nullable from '../nullable'
import type TestSubject from '../segment'
import type Split from '../split'

describe('unit-d:types/Segment', () => {
  it('should equal EmptyArray if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal string[] if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<string[]>()
  })

  describe('T extends NIL', () => {
    it('should equal EmptyArray', () => {
      expectTypeOf<TestSubject<null>>().toEqualTypeOf<EmptyArray>()
      expectTypeOf<TestSubject<undefined>>().toEqualTypeOf<EmptyArray>()
    })
  })

  describe('T extends string', () => {
    it('should equal Split<T, Dot>', () => {
      // Arrange
      type T = 'hello.world'

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Split<T, Dot>>()
    })

    describe('T extends EmptyString', () => {
      it('should equal EmptyArray', () => {
        expectTypeOf<TestSubject<EmptyString>>().toEqualTypeOf<EmptyArray>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nullable<'res.data.message'>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Split<T, Dot>>()
    })
  })
})
