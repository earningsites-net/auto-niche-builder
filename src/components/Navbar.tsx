import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/" + hash);
    } else {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="EarningSites" width={40} height={40} />
          <span className="font-heading text-lg font-semibold tracking-wide text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
            EarningSites<span className="text-primary">.net</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="/#services" onClick={(e) => handleAnchorClick(e, "#services")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a>
          <a href="/#autoblog" onClick={(e) => handleAnchorClick(e, "#autoblog")} className="text-sm text-muted-foreground hover:text-primary transition-colors">AutoBlog</a>
          <a href="/#testimonials" onClick={(e) => handleAnchorClick(e, "#testimonials")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
          <a href="/#contact" onClick={(e) => handleAnchorClick(e, "#contact")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
