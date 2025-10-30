"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "../ui/Button";
import { useIsMounted } from "../../hooks/use-is-mounted";
import { ThemeToggle } from "../ui/ThemeToggle";
import { LogoSwitcher } from "../ui/LogoSwitcher";
import { BRAND_INFO } from "../../lib/branding";

const navLinks = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Quem Somos" },
  { href: "#menu", label: "Cardápio" },
  { href: "#gallery", label: "Galeria" },
  { href: "#contact", label: "Contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <header
        className="fixed top-0 left-0 z-50 h-16 w-full bg-background/80 shadow-md"
        aria-hidden="true"
      />
    );
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background/80 shadow-md backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center space-x-2"
          aria-label="Página inicial da Pizzaria Napoli"
        >
          <LogoSwitcher />
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <Button
            asChild
            className="hidden bg-red-600 font-bold text-white hover:bg-red-700 sm:inline-flex"
          >
            <a
              href={BRAND_INFO.onlineOrderLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedido Online
            </a>
          </Button>

          <ThemeToggle />

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">
                {isMenuOpen ? "Fechar menu" : "Abrir menu"}
              </span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="border-t border-border pt-4 pb-3">
            <div className="flex items-center px-5">
              <Button
                asChild
                className="w-full bg-red-600 font-bold text-white hover:bg-red-700"
              >
                <a
                  href={BRAND_INFO.onlineOrderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pedido Online
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
