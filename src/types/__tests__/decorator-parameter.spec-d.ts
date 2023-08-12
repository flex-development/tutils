/**
 * @file Type Tests - ParameterDecorator
 * @module tutils/types/tests/unit-d/ParameterDecorator
 */

import type Vehicle from '#fixtures/types/vehicle'
import type Class from '../class'
import type TestSubject from '../decorator-parameter'
import type Optional from '../optional'
import type OwnPropertyKey from '../property-key-own'

describe('unit-d:types/ParameterDecorator', () => {
  type T = InstanceType<Class<Vehicle>>

  it('should be callable with [T, Optional<OwnPropertyKey>, number]', () => {
    // Arrange
    type Expect = [T, Optional<OwnPropertyKey>, number]

    // Expect
    expectTypeOf<TestSubject<T>>().parameters.toEqualTypeOf<Expect>()
  })

  it('should return void', () => {
    expectTypeOf<TestSubject<T>>().returns.toBeVoid()
  })
})
