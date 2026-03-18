import { describe, it, expect } from "vitest";
import { CoreAgent } from "../src/core.js";
describe("CoreAgent", () => {
  it("init", () => { expect(new CoreAgent().getStats().ops).toBe(0); });
  it("op", async () => { const c = new CoreAgent(); await c.think(); expect(c.getStats().ops).toBe(1); });
  it("reset", async () => { const c = new CoreAgent(); await c.think(); c.reset(); expect(c.getStats().ops).toBe(0); });
});
