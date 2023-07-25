/**
 * @file Unit Tests - segment
 * @module tutils/utils/tests/unit/segment
 */

import type { Dot } from '#src/types'
import DOT from '../dot'
import testSubject from '../segment'
import split from '../split'

describe('unit:utils/segment', () => {
  it('should return empty array if path is empty string', () => {
    expect(testSubject('')).to.be.an('array').that.is.empty
  })

  it('should return empty array if path is null', () => {
    expect(testSubject(null)).to.be.an('array').that.is.empty
  })

  it('should return empty array if path is undefined', () => {
    expect(testSubject(undefined)).to.be.an('array').that.is.empty
  })

  it('should return path segments array', () => {
    // Arrange
    const path: `${string}${Dot}${string}` = 'vehicles.0.vin'

    // Expect
    expect(testSubject(path)).to.eql(split(path, DOT))
  })
})
