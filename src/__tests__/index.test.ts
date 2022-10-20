import { it, describe, expect, vi } from "vitest";
import { handler } from "../index";

vi.mock("@forge/resolver", () => {
  return {
    default: class {
      define = vi.fn();
      getDefinitions = vi.fn();
    },
  };
});

describe("index.ts", () => {
  it("should pass a test", () => {
    expect(true);
  });
});
