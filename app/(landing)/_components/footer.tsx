import { Logo } from "@/app/ui/logo"

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-bkg/90">
      <div className="md:max-w-screen-xl mx-auto flex items-center w-full justify-between">
        <Logo />
      </div>
    </div>
  )
}
export default Footer
