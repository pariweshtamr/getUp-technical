import { Poppins } from "next/font/google"
import { TransparencyStats } from "./_components/transparency-stats"
import { Heading } from "../ui/heading"
import { fetcher } from "../lib/fetcher"

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const LandingPage = async () => {
  // since all components in next js are server components by default we can directly fetch data from the specified api
  // fetching data from server components is recommended in next js docs and is considered to be more secure
  const stats = await fetcher(process.env.API_URL as string)

  return (
    <div
      className={`${textFont.className} flex items-start justify-center flex-col`}
    >
      {/* Reusable heading component */}
      <Heading title="GetUp Transparency Stats" />

      {/* passing the fetched data to a client component as props */}
      <TransparencyStats data={stats} />
    </div>
  )
}
export default LandingPage
