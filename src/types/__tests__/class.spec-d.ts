/**
 * @file Type Tests - Class
 * @module tutils/types/tests/unit-d/Class
 */

import type Vehicle from '#fixtures/vehicle'
import type TestSubject from '../class'
import type Constructor from '../constructor'

describe('unit-d:types/Class', () => {
  type T = Vehicle

  it('should extend Constructor<T, A>', () => {
    // Arrange
    type A = [Vehicle['vin']]

    // Expect
    expectTypeOf<TestSubject<T, A>>().toMatchTypeOf<Constructor<T, A>>()
  })

  it('should match [prototype: T]', () => {
    expectTypeOf<TestSubject<T>>().toMatchTypeOf<{ prototype: T }>()
  })
})
