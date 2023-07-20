/**
 * @file Unit Tests - isDataView
 * @module tutils/utils/tests/unit/isDataView
 */

import testSubject from '../is-data-view'

describe('unit:utils/isDataView', () => {
  let buffer: ArrayBuffer

  beforeAll(() => {
    buffer = new ArrayBuffer(2)
  })

  it('should return false if value is not DataView instance', () => {
    expect(testSubject(buffer)).to.be.false
  })

  it('should return true if value is DataView instance', () => {
    expect(testSubject(new DataView(buffer))).to.be.true
  })
})
