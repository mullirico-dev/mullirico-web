import '@testing-library/jest-dom/vitest';

// jsdom has no IntersectionObserver; the menu scroll-spy degrades
// gracefully without one, so a no-op stand-in is enough for tests.
class NoopIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

if (typeof globalThis.IntersectionObserver === 'undefined') {
  globalThis.IntersectionObserver = NoopIntersectionObserver;
}
