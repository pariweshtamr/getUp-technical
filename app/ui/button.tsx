type ButtonProps = {
  children: React.ReactNode
  className?: string
}
export const Button = ({ children, className }: ButtonProps) => {
  return <button className={className}>{children}</button>
}
