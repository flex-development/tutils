/**
 * @file Unit Tests - sift
 * @module tutils/utils/tests/unit/sift
 */

import testSubject from '../sift'

describe('unit:utils/sift', () => {
  it('should return empty array if arr is null', () => {
    expect(testSubject(null)).to.be.an('array').that.is.empty
  })

  it('should return empty array if arr is undefined', () => {
    expect(testSubject(undefined)).to.be.an('array').that.is.empty
  })

  it('should return new array with falsy values removed', () => {
    // Arrange
    const id1: string = faker.string.uuid()
    const id2: string = faker.string.uuid()
    const arr: [string, null, undefined, string] = [id1, null, undefined, id2]

    // Act + Expect
    expect(testSubject(arr)).to.eql([id1, id2]).but.not.equal(arr)
  })
})
