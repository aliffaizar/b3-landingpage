import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { NavMenu } from "@/components/nav-menu"
import { NavigationSheet } from "@/components/navigation-sheet"

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 h-16 border-b bg-card/70 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button render={<a href="#contact" />}>Konsultasi</Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
