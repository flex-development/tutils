import type { At } from '@flex-development/tutils'

declare global {
  interface Array<T> {
    /**
     * Returns the item located at the specified index.
     *
     * A negative `index` will count back from the last item.
     *
     * @template U - this
     * @template K - Zero-based position of item to retrieve
     *
     * @param {K} index - Zero-based position of item to retrieve
     * @return {At<U, K>} Indexed value or `undefined`
     */
    at<U extends readonly T[], K extends number>(this: U, index: K): At<U, K>
  }

  interface ReadonlyArray<T> {
    /**
     * Returns the item located at the specified index.
     *
     * A negative `index` will count back from the last item.
     *
     * @template U - this
     * @template K - Zero-based position of item to retrieve
     *
     * @param {K} index - Zero-based position of item to retrieve
     * @return {At<U, K>} Indexed value or `undefined`
     */
    at<U extends readonly T[], K extends number>(this: U, index: K): At<U, K>
  }
}
