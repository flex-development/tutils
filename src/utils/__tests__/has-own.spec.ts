/**
 * @file Unit Tests - hasOwn
 * @module tutils/utils/tests/unit/hasOwn
 */

import testSubject from '../has-own'

describe('unit:utils/hasOwn', () => {
  let obj: { hello: string }
  let tag: symbol

  beforeAll(() => {
    tag = Symbol('obj')
    obj = { hello: 'world', [tag]: tag.description }
  })

  it('should equal false if key is not own property', () => {
    expect(testSubject(obj, obj.hello)).to.be.false
  })

  it('should equal true if key is own property', () => {
    ;[tag, 'hello'].forEach(key => expect(testSubject(obj, key)).to.be.true)
  })
})
