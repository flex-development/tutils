/**
 * @file Unit Tests - isObject
 * @module tutils/utils/tests/unit/isObject
 */

import INTEGER from '#fixtures/integer'
import TODAY from '#fixtures/today'
import VEHICLE from '#fixtures/vehicle'
import testSubject from '../is-object'

describe('unit:utils/isObject', () => {
  it('should return false if value is a primitive', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [INTEGER],
      [VEHICLE.vin],
      [faker.datatype.boolean()],
      [faker.number.bigInt()],
      [faker.string.sample()],
      [null],
      [undefined]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.false)
  })

  it('should return true if value is array', () => {
    expect(testSubject([])).to.be.true
  })

  it('should return true if value is function', () => {
    expect(testSubject(vi.fn())).to.be.true
  })

  it('should return true if value is instance object', () => {
    expect(testSubject(TODAY)).to.be.true
  })

  it('should return true if value is plain object', () => {
    expect(testSubject(VEHICLE)).to.be.true
  })
})
