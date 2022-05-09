declare module 'chai' {
  global {
    export namespace Chai {
      interface Assertion {
        each(fn: (item: Assertion, index: number) => any): Assertion
      }
    }
  }
}
