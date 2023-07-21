import type { Flat, Nilable } from '@flex-development/tutils'

declare global {
  interface Array<T> {
    /**
     * Returns a new array with all sub-array elements concatenated into it
     * recursively up to the specified depth.
     *
     * @template U - this
     * @template D - Maximum recursion depth
     *
     * @param {D} [depth=1] - Maximum recursion depth
     * @return {Flat<U, D>} Flattened array
     */
    flat<U extends readonly T[], D extends Nilable<number>>(
      this: U,
      depth?: D
    ): Flat<U, D>
  }

  interface ReadonlyArray<T> {
    /**
     * Returns a new array with all sub-array elements concatenated into it
     * recursively up to the specified depth.
     *
     * @template U - this
     * @template D - Maximum recursion depth
     *
     * @param {D} [depth=1] - Maximum recursion depth
     * @return {Flat<U, D>} Flattened array
     */
    flat<U extends readonly T[], D extends Nilable<number>>(
      this: U,
      depth?: D
    ): Flat<U, D>
  }
}
