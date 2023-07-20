import {} from '@vitest/expect'

declare module '@vitest/expect' {
  import type { PropertyDescriptor } from '@flex-development/tutils'

  interface Assertion<T = any> {
    /**
     * Asserts a target has its own property descriptor for the given `key`.
     *
     * Enumerable and non-enumerable properties are included in the search.
     *
     * @template U - Property value type
     *
     * @param {string | symbol} key - Property to check
     * @param {PropertyDescriptor<U>} descriptor - Property descriptor object
     * @return {Assertion<T>} Assertion object
     */
    descriptor<U = any>(
      key: string | symbol,
      descriptor: PropertyDescriptor<U>
    ): Assertion<T>
  }
}
