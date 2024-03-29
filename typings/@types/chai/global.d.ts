import type {
  OwnPropertyKey,
  PropertyDescriptor
} from '@flex-development/tutils'

declare global {
  namespace Chai {
    interface Assertion {
      /**
       * Asserts a target has its own property descriptor for the given `key`.
       *
       * Enumerable and non-enumerable properties are included in the search.
       *
       * @template T - Property value type
       *
       * @param {OwnPropertyKey} key - Property to check
       * @param {PropertyDescriptor<T>} descriptor - Property descriptor object
       * @return {Assertion} Assertion object
       */
      descriptor<T = any>(
        key: OwnPropertyKey,
        descriptor: PropertyDescriptor<T>
      ): Assertion
    }
  }
}
