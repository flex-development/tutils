/**
 * @file Unit Tests - properties
 * @module tutils/utils/tests/unit/properties
 */

import testSubject from '../properties'

describe('unit:utils/properties', () => {
  let target: Error

  beforeAll(() => {
    target = new Error(faker.word.words({ count: { max: 10, min: 5 } }))
  })

  it('should return array containing own properties', () => {
    expect(testSubject(target)).to.have.members(['stack', 'message'])
  })

  describe('enumerable', () => {
    it('should return array containing enumerable own properties', () => {
      expect(testSubject(target, { enu: true })).to.be.an('array').that.is.empty
    })
  })
})
