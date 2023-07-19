/**
 * @file Type Tests - Construct
 * @module tutils/types/tests/unit-d/Construct
 */

import type Vehicle from '#fixtures/types/vehicle'
import type TestSubject from '../construct'
import type Nilable from '../nilable'
import type Objectify from '../objectify'

describe('unit-d:types/Construct', () => {
  it('should equal Objectify<T> if T is any', () => {
    // Arrange
    type T = any

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
  })

  it('should equal Objectify<T> if T is never', () => {
    // Arrange
    type T = never

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
  })

  describe('T extends NIL', () => {
    it('should equal Objectify<T>', () => {
      // Arrange
      type T1 = null
      type T2 = undefined

      // Expect
      expectTypeOf<TestSubject<T1>>().toEqualTypeOf<Objectify<T1>>()
      expectTypeOf<TestSubject<T2>>().toEqualTypeOf<Objectify<T2>>()
    })
  })

  describe('T extends ObjectCurly', () => {
    it('should reconstruct T', () => {
      // Arrange
      type T = Readonly<Vehicle> & {
        [x: `reviews.${number}.content`]: string
        [x: `reviews.${number}.title`]: string
        [x: `reviews.${number}.rating`]: number
        'driver.data.nanoid': string
        'riders.0.name': string
        'riders.0.uuid': number
        'riders.2.uuid': string
      }

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<
        Readonly<Vehicle> & {
          driver: { data: { nanoid: string } }
          riders: [{ name: string; uuid: number }, never, { uuid: string }]
          reviews: { content: string; title: string; rating: number }[]
        }
      >()
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nilable<{ 'driver.data.nanoid': string }>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<
        { driver: { data: { nanoid: string } } } | {}
      >()
    })
  })
})
