import { Button } from "@/app/ui/button"
import { Logo } from "@/app/ui/logo"

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-16 px-4 border-b shadow-sm bg-bkg/90 flex items-center">
      <div className="md:max-w-screen-xl mx-auto flex items-center justify-between w-full">
        <Logo />
        <div className="space-x-8 md:w-auto flex items-center justify-between w-full font-medium text-[16px] text-txt">
          <Button>Donate</Button>
          <Button className="bg-primary text-white/90 rounded-md px-4 py-2">
            Get Involved!
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Navbar
