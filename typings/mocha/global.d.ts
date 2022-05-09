declare global {
  namespace Mocha {
    interface Context {
      faker: typeof faker
      pf: typeof pf
      sandbox: typeof sandbox
    }

    interface MochaOptions {
      reporterOptions?: import('@tests/interfaces').ReporterOptions
    }
  }
}

export {}
