import { Button } from "@/app/ui/button"
import { Logo } from "@/app/ui/logo"

const Navbar = () => {
  return (
    <div className="w-full h-16 px-4 border-b shadow-sm bg-bkg/90 flex items-center">
      <div className="md:max-w-screen-xl mx-auto flex items-center justify-between w-full">
        <Logo />
        <div className="space-x-8 w-auto flex items-center justify-between font-medium text-[16px] text-txt">
          <Button>Donate</Button>
          <Button className="bg-orange/90 text-white/90 rounded-md px-4 py-2 hover:bg-orange/80 transition">
            Get Involved!
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Navbar
