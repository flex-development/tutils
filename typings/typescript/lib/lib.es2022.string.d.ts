import type { At } from '@flex-development/tutils'

declare global {
  interface String {
    /**
     * Returns the character located at the specified index.
     *
     * A negative `index` will count back from the last item.
     *
     * @template T - this
     * @template K - Zero-based position of character to retrieve
     *
     * @param {K} index - Zero-based position of character to retrieve
     * @return {At<T, K>} Indexed value or `undefined`
     */
    at<T extends string, K extends number>(this: T, index: K): At<T, K>
  }
}
