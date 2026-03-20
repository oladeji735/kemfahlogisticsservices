"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Logistics & Freight", href: "/services#logistics" },
  { label: "Marine Transport", href: "/services#marine" },
  { label: "Clearing & Forwarding", href: "/services#clearing" },
  { label: "Import & Export", href: "/services#import-export" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <Logo variant="reversed" size="nav-desktop" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.label} className={link.hasDropdown ? "relative group h-full flex items-center" : "relative flex items-center h-full"}>
                {link.hasDropdown ? (
                  <>
                    <Link
                      href={link.href}
                      className="text-white/80 group-hover:text-white border-b-2 border-transparent group-hover:border-amber transition-colors flex items-center gap-1 pb-1"
                    >
                      {link.label}
                      <svg
                        className="w-4 h-4 transition-transform group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>

                    {/* Invisible bridge to prevent dropdown from losing hover */}
                    <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-navy-midnight rounded-lg shadow-xl border border-white/10 py-2">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            className="block px-4 py-2 text-white/80 hover:text-white hover:bg-navy transition-colors"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white border-b-2 border-transparent hover:border-amber transition-colors pb-1"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <Button variant="primary" size="sm" href="/contact">
              Get a Quote
            </Button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-midnight">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.hasDropdown ? (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <Link
                        href={link.href}
                        className="block text-white/80 hover:text-white py-2 flex-grow"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                      <button
                        className="p-2 text-white/80 hover:text-white"
                        onClick={(e) => {
                          e.preventDefault();
                          setServicesDropdownOpen(!servicesDropdownOpen);
                        }}
                      >
                        <svg
                          className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    {servicesDropdownOpen && (
                      <div className="pl-4 space-y-1">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            className="block text-white/60 hover:text-white py-2"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-white/80 hover:text-white py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button variant="primary" size="sm" className="w-full" href="/contact">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
