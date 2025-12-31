import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import logoImage from '@assets/generated_images/Studio_logo_design_92dd14f7.png';
import logoImage from "../../public/Logo/logo.jpg"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <a className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-3 py-2 -ml-3" data-testid="link-home-logo">
              <img src={logoImage} alt="Utsav Digital Studio" className="h-10 w-10" />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-foreground">Utsav</span>
                <span className="text-primary ml-1">Studio</span>
              </span>
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a 
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate active-elevate-2 ${
                    isActive(link.path) 
                      ? 'text-primary' 
                      : 'text-foreground'
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <div className="h-0.5 bg-primary mt-1 rounded-full" />
                  )}
                </a>
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a 
                  className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors hover-elevate active-elevate-2 ${
                    isActive(link.path) 
                      ? 'text-primary bg-primary/10' 
                      : 'text-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                  data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
