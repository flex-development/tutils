/**
 * @file Type Tests - TupleFromRecord
 * @module tutils/types/tests/unit-d/TupleFromRecord
 */

import type Vehicle from '#fixtures/types/vehicle'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type TestSubject from '../tuple-from-record'

describe('unit-d:types/TupleFromRecord', () => {
  it('should construct tuple from M', () => {
    // Arrange
    type M = { 0: { vin: Vehicle['vin'] }; 3: { vrm: string } }
    type F = {}

    // Expect
    expectTypeOf<TestSubject<M, F>>().toEqualTypeOf<[M[0], F, F, M[3]]>()
  })

  it('should equal Acc if EmptyObject extends M', () => {
    expectTypeOf<TestSubject<{}>>().toEqualTypeOf<EmptyArray>()
    expectTypeOf<TestSubject<EmptyObject>>().toEqualTypeOf<EmptyArray>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type M = { 0: Vehicle['vin'] } | { 3: Vehicle['vin'] }
      type Expect = [never, never, never, Vehicle['vin']] | [Vehicle['vin']]

      // Expect
      expectTypeOf<TestSubject<M>>().toEqualTypeOf<Expect>()
    })
  })
})
