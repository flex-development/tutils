/**
 * @file Type Tests - MethodDecorator
 * @module tutils/types/tests/unit-d/MethodDecorator
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { PropertyDescriptor } from '#src/interfaces'
import type Class from '../class'
import type TestSubject from '../decorator-method'
import type Fn from '../fn'
import type OwnPropertyKey from '../property-key-own'

describe('unit-d:types/MethodDecorator', () => {
  type T = Fn<[vin: Vehicle['vin']], Vehicle>
  type U = Class<Vehicle, [vin: Vehicle['vin']]>

  it('should be callable with [U, OwnPropertyKey, PropertyDescriptor<T>]', () => {
    // Arrange
    type Expect = [U, OwnPropertyKey, PropertyDescriptor<T>]

    // Expect
    expectTypeOf<TestSubject<T, U>>().parameters.toEqualTypeOf<Expect>()
  })

  it('should return PropertyDescriptor<T> | void', () => {
    // Arrange
    type Expect = PropertyDescriptor<T> | void

    // Expect
    expectTypeOf<TestSubject<T>>().returns.toEqualTypeOf<Expect>()
  })
})
