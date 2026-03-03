import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
  size?: 'default' | 'sm' | 'lg'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      default: "bg-[#0A2472] text-white hover:bg-[#2B4F8C] hover:text-white",
      outline: "border border-[#D1D9E8] bg-white text-[#0A2472] hover:bg-[#E8EDF5] hover:text-[#0A2472]"
    }
    
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-8 px-3 text-sm",
      lg: "h-12 px-8 text-lg"
    }
    
    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
    
    if (asChild) {
      return <span className={classes} {...props} />
    }
    
    return <button className={classes} ref={ref} {...props} />
  }
)
Button.displayName = "Button"

export { Button }