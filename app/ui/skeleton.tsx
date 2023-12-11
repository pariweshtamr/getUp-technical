export const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`${className} rounded-md bg-orange/40 animate-pulse`}
      {...props}
    />
  )
}
