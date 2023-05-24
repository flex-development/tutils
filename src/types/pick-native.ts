/**
 * @file Type Definitions - PickNative
 * @module tutils/types/PickNative
 */

/**
 * From `T`, pick a set of properties whose keys are in the union `K`.
 *
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
 *
 * @template T - Type to evaluate
 * @template K - Keys to select
 */
type PickNative<T, K extends keyof T> = Pick<T, K>

export type { PickNative as default }
