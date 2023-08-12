/**
 * @file Type Tests - PropertyDecorator
 * @module tutils/types/tests/unit-d/PropertyDecorator
 */

import type Vehicle from '#fixtures/types/vehicle'
import type Class from '../class'
import type TestSubject from '../decorator-property'
import type OwnPropertyKey from '../property-key-own'

describe('unit-d:types/PropertyDecorator', () => {
  type T = InstanceType<Class<Vehicle>>

  it('should be callable with [T, OwnPropertyKey]', () => {
    // Arrange
    type Expect = [T, OwnPropertyKey]

    // Expect
    expectTypeOf<TestSubject<T>>().parameters.toEqualTypeOf<Expect>()
  })

  it('should return void', () => {
    expectTypeOf<TestSubject<T>>().returns.toBeVoid()
  })
})
