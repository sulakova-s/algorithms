import { Bench } from "tinybench";
import {
  reverseSimple,
  reverseTwoPointer,
  reverseForBack,
} from "./solutions.js";

// ============================================
// ⚡️ Performance Benchmark (Speed)
// ============================================

const testStr = "hello";
const bench = new Bench({ time: 1000 });

bench
  .add("reverse()", () => reverseSimple(testStr))
  .add("Two Pointer", () => reverseTwoPointer(testStr))
  .add("For Loop", () => reverseForBack(testStr));

await bench.run();

const sortedResults = bench
  .table()
  .sort((a, b) => parseFloat(b["ops/sec"]) - parseFloat(a["ops/sec"]));

console.log(
  "\n⚡️ Performance Benchmark (sorted by ops/sec, higher is better):",
);
console.table(sortedResults);

// ============================================
// 🧠 Memory Usage Test
// ============================================

console.log("\n🧠 Memory Usage Test (10000 iterations, lower is better):");

function measureMemory(fn, label) {
  // Warmup
  for (let i = 0; i < 100; i++) {
    fn(testStr);
  }

  if (global.gc) global.gc();
  if (global.gc) global.gc();

  const before = process.memoryUsage().heapUsed;

  for (let i = 0; i < 10000; i++) {
    fn(testStr);
  }

  if (global.gc) global.gc();

  const after = process.memoryUsage().heapUsed;
  const diff = Math.max(0, (after - before) / 1024 / 1024);

  console.log(`${label.padEnd(15)}: ${diff.toFixed(2)} MB`);
}

measureMemory(reverseSimple, "reverse()");
measureMemory(reverseTwoPointer, "Two Pointer");
measureMemory(reverseForBack, "For Loop");
console.log();
