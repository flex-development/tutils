/**
 * @file Type Tests - PathNT
 * @module tutils/types/tests/unit-d/PathNT
 */

import type PathN from '../path-n'
import type TestSubject from '../path-nt'

describe('unit-d:types/PathNT', () => {
  type T = { foo: { data: string } }

  it('should extract PathN<T, keyof T>', () => {
    // Arrange
    type Extract = PathN<T, keyof T>

    // Expect
    expectTypeOf<TestSubject<T>>().extract<Extract>().toEqualTypeOf<Extract>()
  })

  it('should extract keyof T', () => {
    expectTypeOf<TestSubject<T>>().extract<keyof T>().toEqualTypeOf<keyof T>()
  })
})
