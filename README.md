# agentcore

**Build a Claude Code-like AI agent from scratch — Bash is all you need**

![Build](https://img.shields.io/badge/build-passing-brightgreen) ![License](https://img.shields.io/badge/license-proprietary-red)

## Install
```bash
npm install
```

## Quick Start
```typescript
import { Agentcore } from "./agentcore";
const instance = new Agentcore()
const r = await instance.think({ input: 'test' })
```

## CLI
```bash
npx tsx src/cli.ts status
npx tsx src/cli.ts run --input "data"
```

## API
| Method | Description |
|--------|-------------|
| `think()` | Think |
| `act()` | Act |
| `observe()` | Observe |
| `plan()` | Plan |
| `usetool()` | Usetool |
| `getcontext()` | Getcontext |

## Test
```bash
npx vitest
```

## License
(c) 2026 Officethree Technologies. All Rights Reserved.
