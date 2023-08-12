/**
 * @file Type Tests - ClassDecorator
 * @module tutils/types/tests/unit-d/ClassDecorator
 */

import type Vehicle from '#fixtures/types/vehicle'
import type Class from '../class'
import type TestSubject from '../decorator-class'

describe('unit-d:types/ClassDecorator', () => {
  type T = Class<Vehicle, [vin: Vehicle['vin']]>

  it('should be callable with [T]', () => {
    expectTypeOf<TestSubject<T>>().parameters.toEqualTypeOf<[T]>()
  })

  it('should return T | void', () => {
    expectTypeOf<TestSubject<T>>().returns.toEqualTypeOf<T | void>()
  })
})
