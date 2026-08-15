# String Reversal Benchmark

This project compares **three approaches** to reverse a string in JavaScript by **speed** and **memory usage**:

| #   | Approach        | Description                          |
| :-- | :-------------- | :----------------------------------- |
| 1   | **`reverse()`** | Built-in method (declarative)        |
| 2   | **Two Pointer** | Two-pointer algorithm                |
| 3   | **For Loop**    | Loop with concatenation (imperative) |

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/sulakova-s/algorithms.git
cd algorithms/common/string-reverse
npm install
```

### 2. Run Benchmark (Measure Performance)

```bash
npm run benchmark
```

What happens:

- Each approach runs for 1 second
- The benchmark measures how many times it can reverse the string "hello" per second
- Results are displayed in a table and sorted from fastest to slowest

`Expected time: ~5-10 seconds depending on your machine`

## 📊 Results

_Example results — your numbers may vary depending on hardware and Node.js version._

### ⚡️ Speed Test

| Approach        |       ops/sec | Avg Time (ns) | Margin |   Samples |
| :-------------- | ------------: | ------------: | :----: | --------: |
| 🏆 **For Loop** | **9,973,891** |        100.26 | ±1.99% | 9,973,892 |
| Two Pointer     |     5,050,230 |        198.01 | ±1.04% | 5,050,231 |
| reverse()       |     4,870,308 |        205.33 | ±0.79% | 4,870,309 |

### 🧠 Memory Test

| Approach        | Memory Used |
| :-------------- | ----------: |
| 🏆 **For Loop** | **0.92 MB** |
| Two Pointer     |     1.68 MB |
| reverse()       |     1.69 MB |

**Test details:**

- **Test string:** `"hello"`
- **Speed test:** each approach ran for **1 second** to measure operations per second
- **Memory test:** each approach ran **10,000 times** to measure memory usage

### 🔍 Why For Loop Wins

| Factor                   | Why it helps                         |
| :----------------------- | :----------------------------------- |
| **No `split()`**         | Doesn't create an intermediate array |
| **No `join()`**          | Doesn't create temporary strings     |
| **Simple concatenation** | Optimized by modern JS engines (V8)  |
| **No destructuring**     | Avoids temporary arrays for swaps    |

## 💡 Key Takeaways

| Rank | Approach        | Speed (ops/sec) | Memory (MB) | Best for                  |
| :--: | :-------------- | --------------: | ----------: | :------------------------ |
|  🥇  | **For Loop**    |   **9,973,891** |    **0.92** | Performance-critical code |
|  🥈  | **Two Pointer** |       5,050,230 |        1.68 | Interviews, algorithms    |
|  🥉  | **reverse()**   |       4,870,308 |        1.69 | Readable, everyday code   |

## 🏆 Conclusion

On my machine, **For Loop** wins:

- 🚀 2.05× faster than `reverse()`, 1.97× faster than Two Pointer
- 🧠 45% less memory than both

**Bottom line:** If you need maximum performance, use `For Loop`. If you value readability, `reverse()` is still a great choice.
