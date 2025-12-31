import { Link } from 'wouter';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import logoImage from '../../public/Logo/logo.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Utsav Digital Studio" className="h-10 w-10" />
              <span className="text-xl font-bold">
                <span className="text-foreground">Utsav</span>
                <span className="text-primary ml-1">Studio</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Capturing emotions, creating stories.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/portfolio">
                <a className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-portfolio">
                  Portfolio
                </a>
              </Link>
              <Link href="/services">
                <a className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-services">
                  Services
                </a>
              </Link>
              <Link href="/about">
                <a className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-about">
                  About Us
                </a>
              </Link>
              <Link href="/contact">
                <a className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">
                  Contact
                </a>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Wedding Photography</p>
              <p className="text-sm text-muted-foreground">Pre-Wedding Shoots</p>
              <p className="text-sm text-muted-foreground">Event Coverage</p>
              <p className="text-sm text-muted-foreground">Studio Portraits</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <div className="flex gap-3 mb-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-background hover-elevate active-elevate-2"
                data-testid="link-social-instagram"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              {/* <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-background hover-elevate active-elevate-2"
                data-testid="link-social-facebook"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a> */}
              {/* <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-background hover-elevate active-elevate-2"
                data-testid="link-social-youtube"
              >
                <Youtube className="h-5 w-5 text-primary" />
              </a> */}
            </div>
            <p className="text-sm text-muted-foreground">
             113 Radhe Shyam Complex, Mahudha Dakor Chokdi<br />
              Gujarat, India 387335
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Utsav Digital Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
