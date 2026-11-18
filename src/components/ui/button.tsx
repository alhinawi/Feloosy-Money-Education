import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: 'bg-[linear-gradient(115deg,#96741a_0%,#d4af37_30%,#f6e27a_50%,#d4af37_70%,#96741a_100%)] bg-[length:200%_100%] bg-left text-primary-foreground shadow-md transition-[background-position,box-shadow] duration-500 hover:bg-right hover:shadow-lg',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline:
          'border-2 border-brand-600 bg-transparent text-brand-700 hover:bg-brand-50 dark:border-gold-400 dark:text-gold-300 dark:hover:bg-brand-950',
        ghost: 'hover:bg-muted hover:text-foreground',
        link: 'text-brand-700 underline-offset-4 hover:underline dark:text-gold-300',
      },
      size: {
        default: 'px-5 py-2.5',
        sm: 'rounded-lg px-3 py-1.5 text-xs',
        lg: 'px-6 py-3 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
