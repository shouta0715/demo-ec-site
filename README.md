# Nextjs App Directory Template

### データ fetch をする場合は MSW を install してください。

```bash
pnpm add -D msw

# and

pnpm add -D msw-storybook-addon

# next

npx msw init public/
```

.storybook/main.ts に以下を追加してください。

```ts
import { initialize, mswDecorator } from "msw-storybook-addon";

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];
```

pacakge.json に以下を追加してください。

```json
  "msw": {
    "workerDirectory": "public"
  }
```
