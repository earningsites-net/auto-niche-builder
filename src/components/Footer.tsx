const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} EarningSites.net — All rights reserved</p>
        <p>15+ years of digital experience</p>
      </div>
    </footer>
  );
};

export default Footer;
