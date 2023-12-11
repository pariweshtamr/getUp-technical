import Footer from "./_components/footer"
import Navbar from "./_components/navbar"

export async function generateMetadata() {
  return {
    title: "Transparency Stats",
  }
}

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-muted">
      {/* Navbar */}
      <Navbar />
      <main className="py-32 bg-muted px-3 md:max-w-screen-xl md:mx-auto">
        {children}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default LandingLayout
