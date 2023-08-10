/**
 * @file Unit Tests - equal
 * @module tutils/utils/tests/unit/equal
 */

import FLOAT from '#fixtures/float'
import INTEGER from '#fixtures/integer'
import TODAY from '#fixtures/today'
import type Vehicle from '#fixtures/types/vehicle'
import VEHICLE, { VEHICLE_TAG } from '#fixtures/vehicle'
import type { Mock } from '#tests/interfaces'
import clone from '../clone'
import testSubject from '../equal'
import omit from '../omit'
import pick from '../pick'

describe('unit:utils/equal', () => {
  it('should return false if a and b are different types', () => {
    expect(testSubject(null, VEHICLE)).to.be.false
  })

  describe('ArrayBuffer', () => {
    let buffer: ArrayBuffer

    beforeAll(() => {
      buffer = new ArrayBuffer(8)
    })

    it('should return false if a and b are not deeply equal', () => {
      expect(testSubject(buffer, new ArrayBuffer(2))).to.be.false
    })

    it('should return true if a and b are deeply equal', () => {
      // Arrange
      const cases: Parameters<typeof testSubject>[] = [
        [buffer, buffer],
        [buffer, clone(buffer)],
        [new ArrayBuffer(0), new ArrayBuffer(0)]
      ]

      // Act + Expect
      cases.forEach(([a, b, mapper]) => {
        expect(testSubject(a, b, mapper)).to.be.true
      })
    })
  })

  describe('DataView', () => {
    let view: DataView

    beforeAll(() => {
      view = new DataView(new ArrayBuffer(2))
    })

    it('should return false if a and b are not deeply equal', () => {
      expect(testSubject(view, new DataView(new ArrayBuffer(0)))).to.be.false
    })

    it('should return true if a and b are deeply equal', () => {
      // Arrange
      const cases: Parameters<typeof testSubject>[] = [
        [view, view],
        [view, clone(view)],
        [new DataView(new ArrayBuffer(0)), new DataView(new ArrayBuffer(0))]
      ]

      // Act + Expect
      cases.forEach(([a, b, mapper]) => {
        expect(testSubject(a, b, mapper)).to.be.true
      })
    })
  })

  describe('Date', () => {
    it('should return false if a and b are not deeply equal', () => {
      expect(testSubject(TODAY, faker.date.future())).to.be.false
    })

    it('should return true if a and b are deeply equal', () => {
      // Arrange
      const cases: Parameters<typeof testSubject>[] = [
        [TODAY, TODAY],
        [TODAY, clone(TODAY)]
      ]

      // Act + Expect
      cases.forEach(([a, b, mapper]) => {
        expect(testSubject(a, b, mapper)).to.be.true
      })
    })
  })

  describe('Map', () => {
    let map: Map<Vehicle['vin'], Vehicle>

    beforeAll(() => {
      map = new Map([[VEHICLE.vin, VEHICLE]])
    })

    it('should return false if a and b are not deeply equal', () => {
      expect(testSubject(map, new Map())).to.be.false
    })

    it('should return true if a and b are deeply equal', () => {
      // Arrange
      const cases: Parameters<typeof testSubject>[] = [
        [map, map],
        [map, clone(map)],
        [new Map(), new Map()]
      ]

      // Act + Expect
      cases.forEach(([a, b, mapper]) => {
        expect(testSubject(a, b, mapper)).to.be.true
      })
    })
  })

  describe('RegExp', () => {
    let regex: RegExp

    beforeAll(() => {
      regex = /foo/
    })

    it('should return false if a and b are not deeply equal', () => {
      expect(testSubject(regex, /bar/)).to.be.false
    })

    it('should return true if a and b are deeply equal', () => {
      // Arrange
      const cases: Parameters<typeof testSubject>[] = [
        [regex, regex],
        [regex, clone(regex)],
        [/^foo/, /^foo/]
      ]

      // Act + Expect
      cases.forEach(([a, b, mapper]) => {
        expect(testSubject(a, b, mapper)).to.be.true
      })
    })
  })

  describe('Set', () => {
    let set: Set<Vehicle>

    beforeAll(() => {
      set = new Set([VEHICLE])
    })

    it('should return false if a and b are not deeply equal', () => {
      expect(testSubject(set, new Set())).to.be.false
    })

    it('should return true if a and b are deeply equal', () => {
      // Arrange
      const cases: Parameters<typeof testSubject>[] = [
        [set, set],
        [set, clone(set)],
        [new Set(), new Set()]
      ]

      // Act + Expect
      cases.forEach(([a, b, mapper]) => {
        expect(testSubject(a, b, mapper)).to.be.true
      })
    })
  })

  describe('TypedArray', () => {
    describe('BigInt64Array', () => {
      let bigint64: BigInt64Array

      beforeAll(() => {
        bigint64 = new BigInt64Array(new ArrayBuffer(64), 8, 4)
      })

      it('should return false if a and b are not deeply equal', () => {
        expect(testSubject(bigint64, new BigInt64Array([]))).to.be.false
      })

      it('should return true if a and b are deeply equal', () => {
        // Arrange
        const cases: Parameters<typeof testSubject>[] = [
          [bigint64, bigint64],
          [bigint64, clone(bigint64)],
          [new BigInt64Array(), new BigInt64Array()]
        ]

        // Act + Expect
        cases.forEach(([a, b, mapper]) => {
          expect(testSubject(a, b, mapper)).to.be.true
        })
      })
    })

    describe('BigUint64Array', () => {
      let biguint64: BigUint64Array

      beforeAll(() => {
        biguint64 = new BigUint64Array(new ArrayBuffer(64), 8, 4)
      })

      it('should return false if a and b are not deeply equal', () => {
        expect(testSubject(biguint64, new BigUint64Array([]))).to.be.false
      })

      it('should return true if a and b are deeply equal', () => {
        // Arrange
        const cases: Parameters<typeof testSubject>[] = [
          [biguint64, biguint64],
          [biguint64, clone(biguint64)],
          [new BigUint64Array(), new BigUint64Array()]
        ]

        // Act + Expect
        cases.forEach(([a, b, mapper]) => {
          expect(testSubject(a, b, mapper)).to.be.true
        })
      })
    })

    describe('Float32Array', () => {
      let float32: Float32Array

      beforeAll(() => {
        float32 = new Float32Array(new ArrayBuffer(32), 4, 4)
      })

      it('should return false if a and b are not deeply equal', () => {
        expect(testSubject(float32, new Float32Array([]))).to.be.false
      })

      it('should return true if a and b are deeply equal', () => {
        // Arrange
        const cases: Parameters<typeof testSubject>[] = [
          [float32, float32],
          [float32, clone(float32)],
          [new Float32Array(), new Float32Array()]
        ]

        // Act + Expect
        cases.forEach(([a, b, mapper]) => {
          expect(testSubject(a, b, mapper)).to.be.true
        })
      })
    })

    describe('Float64Array', () => {
      let float64: Float64Array

      beforeAll(() => {
        float64 = new Float64Array(new ArrayBuffer(64), 8, 4)
      })

      it('should return false if a and b are not deeply equal', () => {
        expect(testSubject(float64, new Float64Array([]))).to.be.false
      })

      it('should return true if a and b are deeply equal', () => {
        // Arrange
        const cases: Parameters<typeof testSubject>[] = [
          [float64, float64],
          [float64, clone(float64)],
          [new Float64Array(), new Float64Array()]
        ]

        // Act + Expect
        cases.forEach(([a, b, mapper]) => {
          expect(testSubject(a, b, mapper)).to.be.true
        })
      })
    })

    describe('Int8Array', () => {
      let int8: Int8Array

      beforeAll(() => {
        int8 = new Int8Array(new ArrayBuffer(8), 1, 4)
      })

      it('should return false if a and b are not deeply equal', () => {
        expect(testSubject(int8, new Int8Array([]))).to.be.false
      })

      it('should return true if a and b are deeply equal', () => {
        // Arrange
        const cases: Parameters<typeof testSubject>[] = [
          [int8, int8],
          [int8, clone(int8)],
          [new Int8Array(), new Int8Array()]
        ]

        // Act + Expect
        cases.forEach(([a, b, mapper]) => {
          expect(testSubject(a, b, mapper)).to.be.true
        })
      })
    })

    describe('Int16Array', () => {
      let int16: Int16Array

      beforeAll(() => {
        int16 = new Int16Array(new ArrayBuffer(16), 2, 4)
      })

      it('should return false if a and b are not deeply equal', () => {
        expect(testSubject(int16, new Int16Array([]))).to.be.false
      })

      it('should return true if a and b are deeply equal', () => {
        // Arrange
        const cases: Parameters<typeof testSubject>[] = [
          [int16, int16],
          [int16, clone(int16)],
          [new Int16Array(), new Int16Array()]
        ]

        // Act + Expect
        cases.forEach(([a, b, mapper]) => {
          expect(testSubject(a, b, mapper)).to.be.true
        })
      })
    })

    describe('Int32Array', () => {
      let int32: Int32Array

      beforeAll(() => {
        int32 = new Int32Array(new ArrayBuffer(32), 4, 4)
      })

      it('should return false if a and b are not deeply equal', () => {
        expect(testSubject(int32, new Int32Array([]))).to.be.false
      })

      it('should return true if a and b are deeply equal', () => {
        // Arrange
        const cases: Parameters<typeof testSubject>[] = [
          [int32, int32],
          [int32, clone(int32)],
          [new Int32Array(), new Int32Array()]
        ]

        // Act + Expect
        cases.forEach(([a, b, mapper]) => {
          expect(testSubject(a, b, mapper)).to.be.true
        })
      })
    })

    describe('Uint8Array', () => {
      let uint8: Uint8Array

      beforeAll(() => {
        uint8 = new Uint8Array(new ArrayBuffer(8), 1, 4)
      })

      it('should return false if a and b are not deeply equal', () => {
        expect(testSubject(uint8, new Uint8Array([]))).to.be.false
      })

      it('should return true if a and b are deeply equal', () => {
        // Arrange
        const cases: Parameters<typeof testSubject>[] = [
          [uint8, uint8],
          [uint8, clone(uint8)],
          [new Uint8Array(), new Uint8Array()]
        ]

        // Act + Expect
        cases.forEach(([a, b, mapper]) => {
          expect(testSubject(a, b, mapper)).to.be.true
        })
      })
    })

    describe('Uint8ClampedArray', () => {
      let uint8: Uint8ClampedArray

      beforeAll(() => {
        uint8 = new Uint8ClampedArray(new ArrayBuffer(8), 1, 4)
      })

      it('should return false if a and b are not deeply equal', () => {
        expect(testSubject(uint8, new Uint8ClampedArray([]))).to.be.false
      })

      it('should return true if a and b are deeply equal', () => {
        // Arrange
        const cases: Parameters<typeof testSubject>[] = [
          [uint8, uint8],
          [uint8, clone(uint8)],
          [new Uint8ClampedArray(), new Uint8ClampedArray()]
        ]

        // Act + Expect
        cases.forEach(([a, b, mapper]) => {
          expect(testSubject(a, b, mapper)).to.be.true
        })
      })
    })

    describe('Uint16Array', () => {
      let uint16: Uint16Array

      beforeAll(() => {
        uint16 = new Uint16Array(new ArrayBuffer(16), 2, 4)
      })

      it('should return false if a and b are not deeply equal', () => {
        expect(testSubject(uint16, new Uint16Array([]))).to.be.false
      })

      it('should return true if a and b are deeply equal', () => {
        // Arrange
        const cases: Parameters<typeof testSubject>[] = [
          [uint16, uint16],
          [uint16, clone(uint16)],
          [new Uint16Array(), new Uint16Array()]
        ]

        // Act + Expect
        cases.forEach(([a, b, mapper]) => {
          expect(testSubject(a, b, mapper)).to.be.true
        })
      })
    })

    describe('Uint32Array', () => {
      let uint32: Uint32Array

      beforeAll(() => {
        uint32 = new Uint32Array(new ArrayBuffer(32), 4, 4)
      })

      it('should return false if a and b are not deeply equal', () => {
        expect(testSubject(uint32, new Uint32Array([]))).to.be.false
      })

      it('should return true if a and b are deeply equal', () => {
        // Arrange
        const cases: Parameters<typeof testSubject>[] = [
          [uint32, uint32],
          [uint32, clone(uint32)],
          [new Uint32Array(), new Uint32Array()]
        ]

        // Act + Expect
        cases.forEach(([a, b, mapper]) => {
          expect(testSubject(a, b, mapper)).to.be.true
        })
      })
    })
  })

  describe('arrays', () => {
    let arr: Vehicle[]

    beforeAll(() => {
      arr = [VEHICLE]
    })

    it('should return false if a and b are not deeply equal', () => {
      expect(testSubject(arr, [])).to.be.false
    })

    it('should return true if a and b are deeply equal', () => {
      // Arrange
      const cases: Parameters<typeof testSubject>[] = [
        [[], []],
        [arr, arr],
        [arr, clone(arr)]
      ]

      // Act + Expect
      cases.forEach(([a, b, mapper]) => {
        expect(testSubject(a, b, mapper)).to.be.true
      })
    })
  })

  describe('error objects', () => {
    let err: Error

    beforeAll(() => {
      err = new Error('unknown')
    })

    it('should return false if a and b are not deeply equal', () => {
      expect(testSubject(err, new Error())).to.be.false
    })

    it('should return true if a and b are deeply equal', () => {
      // Arrange
      const cases: Parameters<typeof testSubject>[] = [
        [err, err],
        [err, clone(err)]
      ]

      // Act + Expect
      cases.forEach(([a, b, mapper]) => {
        expect(testSubject(a, b, mapper)).to.be.true
      })
    })
  })

  describe('functions', () => {
    it('should return false if a and b are not strictly equal', () => {
      expect(testSubject(vi.fn(), vi.fn())).to.be.false
    })

    it('should return true if a and b are strictly equal', () => {
      // Arrange
      const fn: Mock = vi.fn()

      // Act + Expect
      expect(testSubject(fn, fn)).to.be.true
    })
  })

  describe('instance objects', () => {
    it('should return false if a and b are not deeply equal', () => {
      // Arrange
      const cases: Parameters<typeof testSubject>[] = [
        [Buffer.from([0x62]), Buffer.from([0x75])],
        [new Int8Array(), new Uint8Array()]
      ]

      // Act + Expect
      cases.forEach(([a, b, mapper]) => {
        expect(testSubject(a, b, mapper)).to.be.false
      })
    })

    it('should return true if a and b are deeply equal', () => {
      // Arrange
      const cases: Parameters<typeof testSubject>[] = [
        [Buffer.from([0x65, 0x72]), Buffer.from([0x65, 0x72])]
      ]

      // Act + Expect
      cases.forEach(([a, b, mapper]) => {
        expect(testSubject(a, b, mapper)).to.be.true
      })
    })
  })

  describe('pojos', () => {
    let a: { next?: object }
    let b: { previous?: object }
    let vehicle: Vehicle
    let x: { next?: object }
    let y: { previous?: object }

    beforeAll(() => {
      a = {}
      b = {}
      x = {}
      y = {}

      a.next = b
      b.previous = a
      x.next = y
      y.previous = x

      vehicle = clone(VEHICLE)
      vehicle = Object.defineProperty(vehicle, '__vehicle', { value: vehicle })
    })

    it('should return false if a and b are not deeply equal', () => {
      // Arrange
      const cases: Parameters<typeof testSubject>[] = [
        [Object.create(null), Object.create({})],
        [pick(vehicle, ['vin']), { vrm: faker.vehicle.vrm() }],
        [vehicle, omit(vehicle, [VEHICLE_TAG])],
        [{}, omit(vehicle, [VEHICLE_TAG])],
        [{}, vehicle]
      ]

      // Act + Expect
      cases.forEach(([a, b, mapper]) => {
        expect(testSubject(a, b, mapper)).to.be.false
      })
    })

    it('should return true if a and b are deeply equal', () => {
      // Arrange
      const cases: Parameters<typeof testSubject>[] = [
        [Object.create(null), Object.create(null)],
        [x, x],
        [x, a],
        [x, y.previous],
        [{ data: { vehicle } }, { data: { vehicle } }]
      ]

      // Act + Expect
      cases.forEach(([a, b, mapper]) => {
        expect(testSubject(a, b, mapper)).to.be.true
      })
    })
  })

  describe('primitives', () => {
    it('should return false if a and b are not strictly equal', () => {
      // Arrange
      const cases: Parameters<typeof testSubject>[] = [
        [0n, 1n],
        [FLOAT.toString(), INTEGER.toString()],
        [INTEGER, INTEGER * -1],
        [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY],
        [false, true],
        [null, void 0]
      ]

      // Act + Expect
      cases.forEach(([a, b, mapper]) => {
        expect(testSubject(a, b, mapper)).to.be.false
      })
    })

    it('should return true if a and b are strictly equal', () => {
      // Arrange
      const cases: Parameters<typeof testSubject>[] = [
        [0n, 0n],
        [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        [Number.MAX_VALUE, Number.MAX_VALUE],
        [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER],
        [Number.MIN_VALUE, Number.MIN_VALUE],
        [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
        [Number.NaN, Number.NaN],
        [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
        [VEHICLE_TAG, VEHICLE_TAG],
        [false, false],
        [null, null],
        [true, true],
        [void 0, undefined]
      ]

      // Act + Expect
      cases.forEach(([a, b, mapper]) => {
        expect(testSubject(a, b, mapper)).to.be.true
      })
    })
  })
})
