// Setup file for Vitest tests in frontend
// Ensure Vitest's expect is assigned globally before loading jest-dom
import { expect as vitestExpect } from 'vitest';

// Use globalThis to be compatible with different JS environments
globalThis.expect = vitestExpect;

// Dynamically import jest-dom so it runs after we've set the global expect
// (static imports are hoisted and would run before the assignment)
await import('@testing-library/jest-dom');

// Provide a noop for createObjectURL if not present (tests may mock it)
if (typeof globalThis.URL !== 'undefined' && !globalThis.URL.createObjectURL) {
  globalThis.URL.createObjectURL = () => 'blob:fake-url';
}
