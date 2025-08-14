# @thewolfbook/ui

Shared design tokens and primitive components for the Millennium Wolves multiverse project.

## Design Tokens

```ts
import { colors, spacing, radii } from '@thewolfbook/ui';
```

## Tailwind preset

Extend your Tailwind config with the preset:

```ts
// tailwind.config.ts
import preset from '@thewolfbook/ui/tailwind.config';

export default {
  presets: [preset],
};
```

## Components

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Text } from '@thewolfbook/ui';

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Text>
          <Button>Click me</Button>
        </Text>
      </CardContent>
    </Card>
  );
}
```
