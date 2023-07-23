/**
 * @file Unit Tests - hasOwn
 * @module tutils/utils/tests/unit/hasOwn
 */

import testSubject from '../has-own'

describe('unit:utils/hasOwn', () => {
  let target: { hello: string }
  let tag: symbol

  beforeAll(() => {
    tag = Symbol('obj')
    target = { hello: 'world', [tag]: tag.description }
  })

  it('should equal false if key is not own property of target', () => {
    expect(testSubject(target, faker.string.alpha(1))).to.be.false
  })

  it('should equal false if target is null', () => {
    expect(testSubject(null, faker.string.alpha(1))).to.be.false
  })

  it('should equal false if target is undefined', () => {
    expect(testSubject(undefined, faker.string.alpha(1))).to.be.false
  })

  it('should equal true if key is own property of target', () => {
    ;[tag, 'hello'].forEach(key => expect(testSubject(target, key)).to.be.true)
  })
})
