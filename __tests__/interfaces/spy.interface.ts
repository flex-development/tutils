/**
 * @file Test Interfaces - Spy
 * @module tests/interfaces/Spy
 */

import type { SinonSpy } from 'sinon'

/**
 * {@link SinonSpy} utility.
 *
 * @template Fn - Function being spied on
 *
 * @extends {SinonSpy<Parameters<Fn>, ReturnType<Fn>>}
 */
interface Spy<Fn extends (...args: any) => any = (...args: any) => any>
  extends SinonSpy<Parameters<Fn>, ReturnType<Fn>> {}

export default Spy
