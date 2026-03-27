import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="EarningSites" width={40} height={40} />
          <span className="font-heading text-lg font-semibold tracking-wide text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
            EarningSites<span className="text-primary">.net</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a>
          <a href="#autoblog" className="text-sm text-muted-foreground hover:text-primary transition-colors">AutoBlog</a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
