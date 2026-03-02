import { Button } from "@/components/ui/button";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { SiLinkedin, SiX } from "react-icons/si";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Audit & Assurance", href: "/services#audit" },
  { name: "Income Tax Services", href: "/services#income-tax" },
  { name: "GST Compliance", href: "/services#gst" },
  { name: "Corporate Tax", href: "/services#corporate-tax" },
  { name: "Accounting & Bookkeeping", href: "/services#accounting" },
  { name: "Financial Advisory", href: "/services#advisory" },
];

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/assets/uploads/NEw1-1.png"
                alt="Parameswaran P S & Associates"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold tracking-tight group-hover:text-secondary transition-colors">
                  Parameswaran P S & Associates
                </span>
                <span className="text-xs text-muted-foreground">
                  Chartered Accountants
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => {
                const isActive = currentPath === item.href;
                return (
                  <Button
                    key={item.name}
                    asChild
                    variant={isActive ? "default" : "ghost"}
                    className={isActive ? "" : "hover:text-secondary"}
                  >
                    <Link to={item.href}>{item.name}</Link>
                  </Button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => {
                  const isActive = currentPath === item.href;
                  return (
                    <Button
                      key={item.name}
                      asChild
                      variant={isActive ? "default" : "ghost"}
                      className="justify-start"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Link to={item.href}>{item.name}</Link>
                    </Button>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-12 md:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/assets/uploads/NEw1-1.png"
                  alt="Parameswaran P S & Associates"
                  className="h-10 w-auto object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-display font-bold">
                    Parameswaran P S & Associates
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Chartered Accountants
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Professional chartered accountant services for businesses and
                individuals across India.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                  <span>Bangalore, Karnataka, India</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 shrink-0 text-secondary" />
                  <a
                    href="tel:+919538967951"
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    +91 9538967951
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 shrink-0 text-secondary" />
                  <a
                    href="mailto:office@pspcafirm.co.in"
                    className="text-muted-foreground hover:text-secondary transition-colors break-all"
                  >
                    office@pspcafirm.co.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © 2026. Built with <span className="text-secondary">♥</span> using{" "}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                caffeine.ai
              </a>
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
