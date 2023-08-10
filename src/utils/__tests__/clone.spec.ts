/**
 * @file Unit Tests - clone
 * @module tutils/utils/tests/unit/clone
 */

import INTEGER from '#fixtures/integer'
import TODAY from '#fixtures/today'
import type Vehicle from '#fixtures/types/vehicle'
import VEHICLE, { VEHICLE_TAG } from '#fixtures/vehicle'
import testSubject from '../clone'

describe('unit:utils/clone', () => {
  describe('ArrayBuffer', () => {
    it('should return deep cloned ArrayBuffer instance', () => {
      // Arrange
      const value: ArrayBuffer = new ArrayBuffer(8)

      // Act
      const result = testSubject(value)

      // Expect
      expect(result).to.be.instanceof(ArrayBuffer)
      expect(result).to.eql(value).but.not.equal(value)
    })
  })

  describe('Buffer', () => {
    it('should return deep cloned Buffer instance', () => {
      // Arrange
      const value: Buffer = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])

      // Act
      const result = testSubject(value)

      // Expect
      expect(result).to.be.instanceof(Buffer)
      expect(result).to.eql(value).but.not.equal(value)
    })
  })

  describe('DataView', () => {
    it('should return deep cloned DataView instance', () => {
      // Arrange
      const value: DataView = new DataView(new ArrayBuffer(2))

      // Act
      const result = testSubject(value)

      // Expect
      expect(result).to.be.instanceof(DataView)
      expect(result).to.eql(value).but.not.equal(value)
    })
  })

  describe('Date', () => {
    it('should return deep cloned Date instance', () => {
      // Act
      const result = testSubject(TODAY)

      // Expect
      expect(result).to.be.instanceof(Date)
      expect(result).to.eql(TODAY).but.not.equal(TODAY)
    })
  })

  describe('Map', () => {
    it('should return deep cloned Map instance', () => {
      // Arrange
      const value: Map<string, Vehicle> = new Map([[VEHICLE.vin, VEHICLE]])

      // Act
      const result = testSubject(value)

      // Expect
      expect(result).to.be.instanceof(Map)
      expect(result).to.eql(value).but.not.equal(value)
      expect(result.get(VEHICLE.vin)).to.not.equal(value.get(VEHICLE.vin))
    })
  })

  describe('RegExp', () => {
    it('should return deep cloned RegExp instance', () => {
      // Arrange
      const value: RegExp = /{(?<tag>@\w+) +(?<text>.+)}/gm

      // Act
      const result = testSubject(value)

      // Expect
      expect(result).to.be.instanceof(RegExp)
      expect(result).to.eql(value).but.not.equal(value)
    })
  })

  describe('Set', () => {
    it('should return deep cloned Set instance', () => {
      // Arrange
      const value: Set<Vehicle> = new Set([VEHICLE])

      // Act
      const result = testSubject(value)

      // Expect
      expect(result).to.be.instanceof(Set)
      expect(result).to.eql(value).but.not.equal(value)
      expect([...result][0]).to.not.equal([...value][0])
    })
  })

  describe('TypedArray', () => {
    describe('BigInt64Array', () => {
      it('should return deep cloned BigInt64Array instance', () => {
        // Arrange
        const value: BigInt64Array = new BigInt64Array(
          new ArrayBuffer(64),
          8,
          4
        )

        // Act
        const result = testSubject(value)

        // Expect
        expect(result).to.be.instanceof(BigInt64Array)
        expect(result).to.eql(value).but.not.equal(value)
      })
    })

    describe('BigUint64Array', () => {
      it('should return deep cloned BigUint64Array instance', () => {
        // Arrange
        const value: BigUint64Array = new BigUint64Array(
          new ArrayBuffer(64),
          8,
          4
        )

        // Act
        const result = testSubject(value)

        // Expect
        expect(result).to.be.instanceof(BigUint64Array)
        expect(result).to.eql(value).but.not.equal(value)
      })
    })

    describe('Float32Array', () => {
      it('should return deep cloned Float32Array instance', () => {
        // Arrange
        const value: Float32Array = new Float32Array(new ArrayBuffer(32), 4, 4)

        // Act
        const result = testSubject(value)

        // Expect
        expect(result).to.be.instanceof(Float32Array)
        expect(result).to.eql(value).but.not.equal(value)
      })
    })

    describe('Float64Array', () => {
      it('should return deep cloned Float64Array instance', () => {
        // Arrange
        const value: Float64Array = new Float64Array(new ArrayBuffer(64), 8, 4)

        // Act
        const result = testSubject(value)

        // Expect
        expect(result).to.be.instanceof(Float64Array)
        expect(result).to.eql(value).but.not.equal(value)
      })
    })

    describe('Int8Array', () => {
      it('should return deep cloned Int8Array instance', () => {
        // Arrange
        const value: Int8Array = new Int8Array(new ArrayBuffer(8), 1, 4)

        // Act
        const result = testSubject(value)

        // Expect
        expect(result).to.be.instanceof(Int8Array)
        expect(result).to.eql(value).but.not.equal(value)
      })
    })

    describe('Int16Array', () => {
      it('should return deep cloned Int16Array instance', () => {
        // Arrange
        const value: Int16Array = new Int16Array(new ArrayBuffer(16), 2, 4)

        // Act
        const result = testSubject(value)

        // Expect
        expect(result).to.be.instanceof(Int16Array)
        expect(result).to.eql(value).but.not.equal(value)
      })
    })

    describe('Int32Array', () => {
      it('should return deep cloned Int32Array instance', () => {
        // Arrange
        const value: Int32Array = new Int32Array(new ArrayBuffer(32), 4, 4)

        // Act
        const result = testSubject(value)

        // Expect
        expect(result).to.be.instanceof(Int32Array)
        expect(result).to.eql(value).but.not.equal(value)
      })
    })

    describe('Uint8Array', () => {
      it('should return deep cloned Uint8Array instance', () => {
        // Arrange
        const value: Uint8Array = new Uint8Array(new ArrayBuffer(8), 1, 4)

        // Act
        const result = testSubject(value)

        // Expect
        expect(result).to.be.instanceof(Uint8Array)
        expect(result).to.eql(value).but.not.equal(value)
      })
    })

    describe('Uint8ClampedArray', () => {
      it('should return deep cloned Uint8ClampedArray instance', () => {
        // Arrange
        const value: Uint8ClampedArray = new Uint8ClampedArray(
          new ArrayBuffer(8),
          1,
          4
        )

        // Act
        const result = testSubject(value)

        // Expect
        expect(result).to.be.instanceof(Uint8ClampedArray)
        expect(result).to.eql(value).but.not.equal(value)
      })
    })

    describe('Uint16Array', () => {
      it('should return deep cloned Uint16Array instance', () => {
        // Arrange
        const value: Uint16Array = new Uint16Array(new ArrayBuffer(16), 2, 4)

        // Act
        const result = testSubject(value)

        // Expect
        expect(result).to.be.instanceof(Uint16Array)
        expect(result).to.eql(value).but.not.equal(value)
      })
    })

    describe('Uint32Array', () => {
      it('should return deep cloned Uint32Array instance', () => {
        // Arrange
        const value: Uint32Array = new Uint32Array(new ArrayBuffer(32), 4, 4)

        // Act
        const result = testSubject(value)

        // Expect
        expect(result).to.be.instanceof(Uint32Array)
        expect(result).to.eql(value).but.not.equal(value)
      })
    })
  })

  describe('arrays', () => {
    it('should deep cloned array', () => {
      // Arrange
      const value: RegExpExecArray = /fo+/g.exec('table football, foosball')!

      // Act
      const result = testSubject(value)

      // Expect
      expect(result).to.be.an('array').of.length(value.length)
      expect(result).to.eql(value).but.not.equal(value)
    })
  })

  describe('functions', () => {
    it('should return bound function', () => {
      // Act
      const result = testSubject(vi.fn(() => VEHICLE))

      // Expect
      expect(result).to.be.a('function')
      expect(result).to.have.property('name').startWith('bound')
    })
  })

  describe('pojos', () => {
    let value: Vehicle & { driver: { id: string } }

    beforeAll(() => {
      value = { ...VEHICLE, driver: { id: faker.string.uuid() } }
      value = Object.defineProperty(value, VEHICLE_TAG, { value: VEHICLE.vin })
      value = Object.defineProperty(value, '__value', { value })
    })

    it('should return deep cloned plain object', () => {
      // Act
      const result = testSubject(value)

      // Expect
      expect(result).to.eql(value).but.not.equal(value)
      expect(result).to.have.property('driver').not.equal(value.driver)
    })
  })

  describe('primitives', () => {
    it('should return value', () => {
      expect(testSubject(INTEGER)).to.equal(INTEGER)
    })
  })
})
