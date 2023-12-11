import { Poppins } from "next/font/google"
import { TransparencyStats } from "./_components/transparency-stats"
import { Heading } from "../ui/heading"

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const LandingPage = () => {
  return (
    <div
      className={`${textFont.className} flex items-start justify-center flex-col`}
    >
      <Heading title="GetUp Transparency Stats" />

      <TransparencyStats />
    </div>
  )
}
export default LandingPage
