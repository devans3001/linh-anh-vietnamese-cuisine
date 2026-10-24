declare module "@/lib/vendor/lenis.mjs" {
  export default class Lenis {
    constructor(options?: Record<string, unknown>);
    raf(time: number): void;
    destroy(): void;
  }
}
