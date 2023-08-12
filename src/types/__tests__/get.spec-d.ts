/**
 * @file Type Tests - Get
 * @module tutils/types/tests/unit-d/Get
 */

import type Vehicle from '#fixtures/types/vehicle'
import type At from '../at'
import type EmptyObject from '../empty-object'
import type { tag as empty } from '../empty-object'
import type Fallback from '../fallback'
import type TestSubject from '../get'
import type Indices from '../indices'
import type Integer from '../integer'
import type Numeric from '../numeric'
import type Objectify from '../objectify'
import type OmitIndexSignature from '../omit-index-signature'
import type { tag as opaque } from '../opaque'
import type Partial from '../partial'
import type Stringify from '../stringify'

describe('unit-d:types/Get', () => {
  type F = null

  it('should equal F if K is never', () => {
    expectTypeOf<TestSubject<Vehicle, never, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if keyof Objectify<T> is never', () => {
    // Arrange
    type K = keyof Vehicle | typeof empty

    // Expect
    expectTypeOf<TestSubject<{}, K, F>>().toEqualTypeOf<F>()
    expectTypeOf<TestSubject<EmptyObject, K, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if T is never', () => {
    // Arrange
    type T = never

    // Expect
    expectTypeOf<TestSubject<T, keyof Vehicle, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if T is any', () => {
    // Arrange
    type T = any

    // Expect
    expectTypeOf<TestSubject<T, keyof Vehicle, F>>().toEqualTypeOf<T>()
  })

  describe('IsAny<K> extends true', () => {
    type K = any

    it('should equal Fallback<Objectify<T>[keyof T], F>', () => {
      // Arrange
      type T = Partial<Vehicle>
      type Expect = Fallback<Objectify<T>[keyof T], F>

      // Expect
      expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
    })

    describe('T extends string', () => {
      it('should equal At<T, K, F> | Fallback<infer V, F>', () => {
        // Arrange
        type T = 'vehicle'
        type Expect = At<T, K, F> | Fallback<T[keyof OmitIndexSignature<T>], F>

        // Expect
        expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
      })
    })

    describe('T extends readonly unknown[]', () => {
      it('should equal At<T, K, F> | Fallback<infer V, F>', () => {
        // Arrange
        type T = readonly [Vehicle?, Vehicle['vin']?]
        type Expect = At<T, K, F> | Fallback<T[keyof OmitIndexSignature<T>], F>

        // Expect
        expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
      })
    })
  })

  describe('IsNumber<K> extends true', () => {
    it('should equal F if K cannot index T', () => {
      expectTypeOf<TestSubject<Vehicle, Integer, F>>().toEqualTypeOf<F>()
    })

    it('should equal Fallback<T[K], F> if HasKey<T, K> extends true', () => {
      // Arrange
      type T = { '-1'?: Vehicle }
      type K = -1

      // Expect
      expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Fallback<T[K], F>>()
    })

    it('should equal Fallback<T[K], F> if K intersects keyof T', () => {
      // Arrange
      type T = { 0?: Vehicle }
      type K = 0

      // Expect
      expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Fallback<T[K], F>>()
    })

    describe('T extends string', () => {
      it('should equal At<T, K, F>', () => {
        // Arrange
        type T = 'vehicle'
        type K = Indices<T>

        // Expect
        expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<At<T, K, F>>()
      })
    })

    describe('T extends readonly unknown[]', () => {
      it('should equal At<T, K, F>', () => {
        // Arrange
        type T = readonly [Vehicle['vin']?, Vehicle?]
        type K = Indices<T>

        // Expect
        expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<At<T, K, F>>()
      })
    })
  })

  describe('IsNumeric<K> extends true', () => {
    it('should equal F if K cannot index T', () => {
      expectTypeOf<TestSubject<Vehicle, Numeric, F>>().toEqualTypeOf<F>()
    })

    it('should equal Fallback<T[K], F> if HasKey<T, K> extends true', () => {
      // Arrange
      type T = { 1?: Vehicle }
      type K = '1'

      // Expect
      expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Fallback<T[K], F>>()
    })

    it('should equal Fallback<T[K], F> if K intersects keyof T', () => {
      // Arrange
      type T = { '0'?: Vehicle }
      type K = '0'

      // Expect
      expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Fallback<T[K], F>>()
    })

    describe('T extends string', () => {
      it('should equal At<T, K, F>', () => {
        // Arrange
        type T = 'vehicle'
        type K = Stringify<Indices<T>>

        // Expect
        expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<At<T, K, F>>()
      })
    })

    describe('T extends readonly unknown[]', () => {
      it('should equal At<T, K, F>', () => {
        // Arrange
        type T = readonly [Vehicle?, Vehicle['vin']?]
        type K = Stringify<Indices<T>>

        // Expect
        expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<At<T, K, F>>()
      })
    })
  })

  describe('K extends `${infer H}.${infer R}`', () => {
    type T = { res: { data: { 0: Partial<Vehicle> } }; 'res.total'?: number }

    it('should equal F if H cannot index T', () => {
      expectTypeOf<TestSubject<T, 'data.0.vin', F>>().toEqualTypeOf<F>()
    })

    it('should equal Fallback<T[K], F> if K intersects keyof T', () => {
      // Arrange
      type K = 'res.total'

      // Expect
      expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Fallback<T[K], F>>()
    })

    it('should equal Fallback<infer V, F> if H indexes T', () => {
      // Arrange
      type K = 'res.data.0.vin'
      type Expect = Fallback<T['res']['data'][0]['vin'], F>

      // Expect
      expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
    })
  })

  describe('K extends OwnPropertyKey', () => {
    it('should equal F if K cannot index T', () => {
      // Arrange
      type K = typeof opaque | 'vrm'

      // Expect
      expectTypeOf<TestSubject<Vehicle, K, F>>().toEqualTypeOf<F>()
    })

    it('should equal Fallback<T[K], F> if K extends keyof T', () => {
      // Arrange
      type T = { [x: string]: F | string; [x: symbol]: F | symbol }
      type K1 = typeof opaque
      type K2 = 'vrm'

      // Expect
      expectTypeOf<TestSubject<T, K1, F>>().toEqualTypeOf<Fallback<T[K1], F>>()
      expectTypeOf<TestSubject<T, K2, F>>().toEqualTypeOf<Fallback<T[K2], F>>()
    })

    it('should equal Fallback<T[K], F> if K intersects keyof T', () => {
      // Arrange
      type T = Partial<Vehicle> & { [opaque]: 'vehicle' }
      type K1 = typeof opaque
      type K2 = 'vin'

      // Expect
      expectTypeOf<TestSubject<T, K1, F>>().toEqualTypeOf<Fallback<T[K1], F>>()
      expectTypeOf<TestSubject<T, K2, F>>().toEqualTypeOf<Fallback<T[K2], F>>()
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = { data: [Vehicle['vin']?, Vehicle?]; total: number }
      type K = 'data.1.vin' | 'total'
      type Expect = F | Required<T['data']>[1]['vin'] | T['total']

      // Expect
      expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
    })
  })
})
