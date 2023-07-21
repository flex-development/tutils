/**
 * @file Unit Tests - reverse
 * @module tutils/utils/tests/unit/reverse
 */

import DOT from '../dot'
import testSubject from '../reverse'

describe('unit:utils/reverse', () => {
  describe('arrays', () => {
    it('should return reversed array', () => {
      // Arrange
      const value: string[] = ['y', DOT, 'x']

      // Act
      const result = testSubject(value)

      // Expect
      expect(result).to.eql(['x', DOT, 'y']).but.not.equal(value)
    })
  })

  describe('strings', () => {
    it('should return reversed string', () => {
      expect(testSubject(`y${DOT}x`)).to.equal(`x${DOT}y`)
    })
  })
})
