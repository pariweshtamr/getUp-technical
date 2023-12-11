import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition items-center gap-x-2 md:flex">
        <Image src={"/logo.png"} alt="logo" height={80} width={80} />
      </div>
    </Link>
  )
}
