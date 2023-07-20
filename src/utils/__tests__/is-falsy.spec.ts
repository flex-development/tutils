/**
 * @file Unit Tests - isFalsy
 * @module tutils/utils/tests/unit/isFalsy
 */

import VEHICLE from '#fixtures/vehicle'
import testSubject from '../is-falsy'

describe('unit:utils/isFalsy', () => {
  it('should return false if value is not falsy', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [1],
      [true],
      [VEHICLE],
      [() => 'hello, world']
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.false)
  })

  it('should return true if value is falsy', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [0],
      [0n],
      [''],
      [null],
      [false],
      [undefined],
      [Number.NaN]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
