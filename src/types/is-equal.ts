/**
 * @file Type Definitions - IsEqual
 * @module tutils/types/IsEqual
 */

/**
 * Returns a boolean indicating if `A` and `B` are equal.
 *
 * @see https://github.com/microsoft/TypeScript/issues/27024#issuecomment-421529650
 * @see https://stackoverflow.com/questions/68961864/how-does-the-equals-work-in-typescript/68963796#68963796
 *
 * @template A - First type to evaluate
 * @template B - Second type to evaluate
 */
type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false

export type { IsEqual as default }
