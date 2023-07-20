/**
 * @file Unit Tests - desegment
 * @module tutils/utils/tests/unit/desegment
 */

import testSubject from '../desegment'

describe('unit:utils/desegment', () => {
  it('should return path segments array as string', () => {
    expect(testSubject(['vehicles', '0', 'vin'])).to.equal('vehicles.0.vin')
  })
})
