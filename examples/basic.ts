// Basic usage example for agentcore
import { Agentcore } from "../src/core.js";

async function main() {
  const instance = new Agentcore({ verbose: true });

  console.log("=== agentcore Example ===\n");

  // Run primary operation
  const result = await instance.think({ input: "example data", mode: "demo" });
  console.log("Result:", JSON.stringify(result, null, 2));

  // Run multiple operations
  const ops = ["think", "act", "observe];
  for (const op of ops) {
    const r = await (instance as any)[op]({ source: "example" });
    console.log(`${op}:`, r.ok ? "✓" : "✗");
  }

  // Check stats
  console.log("\nStats:", JSON.stringify(instance.getStats(), null, 2));
}

main().catch(console.error);
