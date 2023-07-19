/**
 * @file Type Definitions - OmitNative
 * @module tutils/types/OmitNative
 */

/**
 * From `T`, omit a set of properties whose keys are in the union `K`.
 *
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
 *
 * @template T - Type to evaluate
 * @template K - Properties to remove
 */
type OmitNative<T, K extends keyof any> = Omit<T, K>

export type { OmitNative as default }
