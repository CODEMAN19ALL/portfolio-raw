import { Logo } from "./Logo";
import { Heart, Github, Linkedin, Twitter, Instagram, Facebook, Youtube, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, link: "https://github.com/gospeluwaoma", label: "GitHub" },
    { icon: Linkedin, link: "https://linkedin.com/in/gospeluwaoma", label: "LinkedIn" },
    { icon: Twitter, link: "https://twitter.com/gospeluwaoma", label: "Twitter" },
    { icon: Instagram, link: "https://instagram.com/gospeluwaoma", label: "Instagram" },
    { icon: Mail, link: "mailto:hello@gospeluwaoma.com", label: "Email" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/30 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo />
            <p className="text-muted-foreground mt-4">
              Creating exceptional digital experiences through innovation and creativity.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left w-fit relative group"
                >
                  <span className="relative z-10 px-3 py-1 block">{link.name}</span>
                  <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4">Connect With Me</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  title={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>by Gospel Uwaoma</span>
          </div>
          <div className="text-muted-foreground">
            © {currentYear} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}