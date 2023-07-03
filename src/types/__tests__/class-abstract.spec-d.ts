/**
 * @file Type Tests - AbstractClass
 * @module tutils/types/tests/unit-d/AbstractClass
 */

import type Vehicle from '#fixtures/vehicle'
import type TestSubject from '../class-abstract'
import type AbstractConstructor from '../constructor-abstract'

describe('unit-d:types/AbstractClass', () => {
  type T = Vehicle

  it('should extend AbstractConstructor<T, A>', () => {
    // Arrange
    type A = [
      Vehicle['vin'],
      Vehicle['make'],
      Vehicle['model'],
      Vehicle['year']
    ]

    // Expect
    expectTypeOf<TestSubject<T, A>>().toMatchTypeOf<AbstractConstructor<T, A>>()
  })

  it('should match [prototype: T]', () => {
    expectTypeOf<TestSubject<T>>().toMatchTypeOf<{ prototype: T }>()
  })
})
