import * as React from 'react';
import { cn } from '../lib/utils';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'p' | 'lead' | 'muted' | 'small';
}

const variants: Record<NonNullable<TextProps['variant']>, string> = {
  p: 'text-base',
  lead: 'text-xl text-muted',
  muted: 'text-sm text-muted',
  small: 'text-sm font-medium',
};

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant = 'p', ...props }, ref) => (
    <p ref={ref} className={cn(variants[variant], className)} {...props} />
  )
);
Text.displayName = 'Text';

export { Text };
