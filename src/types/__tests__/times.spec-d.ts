/**
 * @file Type Tests - Times
 * @module tutils/types/tests/unit-d/Times
 */

import type Vehicle from '#fixtures/vehicle'
import type EmptyArray from '../empty-array'
import type TestSubject from '../times'

describe('unit-d:types/Times', () => {
  type V = Vehicle | Vehicle['vin'] | Vehicle['year']

  it('should equal EmptyArray if L is never', () => {
    expectTypeOf<TestSubject<never, V>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal V[] if L is any', () => {
    expectTypeOf<TestSubject<any, V>>().toEqualTypeOf<V[]>()
  })

  describe('L extends number', () => {
    it('should construct tuple of length L', () => {
      expectTypeOf<TestSubject<100, V>>().toEqualTypeOf<
        [
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V
        ]
      >()
    })

    it('should equal V[] if number extends L', () => {
      expectTypeOf<TestSubject<number, V>>().toEqualTypeOf<V[]>()
    })
  })
})
