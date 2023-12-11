import { Logo } from "@/app/ui/logo"

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-bkg/90">
      <div className="md:max-w-screen-xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-2 w-auto flex items-center justify-between font-medium text-xs md:text-[16px] text-txt">
          <span>Technical Exercise</span>
          <div className="h-6 w-1 bg-orange" />
          <span className="text-secondary">Pariwesh Tamrakar</span>
        </div>
      </div>
    </div>
  )
}
export default Footer
