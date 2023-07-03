/**
 * @file Type Tests - Length
 * @module tutils/types/tests/unit-d/Length
 */

import type Vehicle from '#fixtures/vehicle'
import type EmptyArray from '../empty-array'
import type EmptyString from '../empty-string'
import type TestSubject from '../length'
import type Split from '../split'

describe('unit-d:types/Length', () => {
  it('should equal never if T is never', () => {
    expectTypeOf<TestSubject<never>>().toBeNever()
  })

  it('should equal number if T is any', () => {
    expectTypeOf<TestSubject<any>>().toBeNumber()
  })

  describe('T extends { readonly length: number }', () => {
    it('should equal T["length"]', () => {
      expectTypeOf<TestSubject<EmptyArray | [Vehicle]>>().toEqualTypeOf<0 | 1>()
      expectTypeOf<TestSubject<Readonly<EmptyArray>>>().toEqualTypeOf<0>()
      expectTypeOf<TestSubject<Vehicle[]>>().toBeNumber()
      expectTypeOf<TestSubject<[Vehicle?]>>().toEqualTypeOf<0 | 1>()
    })

    describe('T extends string', () => {
      type Expected<T extends string> = Split<T, EmptyString>['length']

      it('should equal Split<T, EmptyString>["length"]', () => {
        // Arrange
        type T1 = string
        type T2 = 'abcdefghijklmnopqrstuvwyz'
        type T3 = EmptyString

        // Expect
        expectTypeOf<TestSubject<T1>>().toEqualTypeOf<Expected<T1>>()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<Expected<T2>>()
        expectTypeOf<TestSubject<T3>>().toEqualTypeOf<Expected<T3>>()
      })
    })
  })
})
