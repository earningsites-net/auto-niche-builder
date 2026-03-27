const Footer = () => {
  return (
    <footer className="py-10 brand-gradient text-primary-foreground">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-90">
        <p>© {new Date().getFullYear()} EarningSites.net — All rights reserved</p>
        <p>15+ years of digital experience</p>
      </div>
    </footer>
  );
};

export default Footer;
