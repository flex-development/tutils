/**
 * @file Unit Tests - shake
 * @module tutils/utils/tests/unit/shake
 */

import testSubject from '../shake'

describe('unit:utils/shake', () => {
  let obj: { x: number; y: undefined }

  beforeAll(() => {
    obj = { x: faker.number.int(), y: undefined }
  })

  it('should return filtered object', () => {
    // Act
    const result = testSubject(obj)

    // Expect
    expect(result).to.equal(obj).and.have.property('x', obj.x)
    expect(result).to.not.have.property('y')
  })
})
