import localFont from "next/font/local"

type HeadingProps = {
  title: string
}

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
})
export const Heading = ({ title }: HeadingProps) => {
  return (
    <h1
      className={`${headingFont.className} text-2xl text-center w-full md:text-left md:text-4xl tracking-wider leading-10 text-txt`}
    >
      {title}
    </h1>
  )
}
