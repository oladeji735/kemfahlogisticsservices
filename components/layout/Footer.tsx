import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/data/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Submit Payment Proof", href: "/payment-proof" },
];

export function Footer() {
  const { contact, social } = siteConfig;

  return (
    <footer className="bg-midnight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo variant="reversed" size="footer" />
            <p className="mt-4 text-white/65 text-sm max-w-sm">
              Your Cargo Moves. Globally. Reliably. Kemfah Logistics is built to move what matters, wherever it needs to go.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/65 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            
            {/* Phone Numbers */}
            <div className="space-y-2 mb-4">
              <a href={`tel:${contact.phone.lagos.replace(/[-\s]/g, "")}`} className="flex items-center gap-2 text-white/65 hover:text-amber transition-colors text-sm">
                <svg className="w-4 h-4 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{contact.phone.lagos}</span>
                <span className="text-white/40 text-xs">(Lagos)</span>
              </a>
              <a href={`tel:${contact.phone.ibadan.replace(/[-\s]/g, "")}`} className="flex items-center gap-2 text-white/65 hover:text-amber transition-colors text-sm">
                <svg className="w-4 h-4 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{contact.phone.ibadan}</span>
                <span className="text-white/40 text-xs">(Ibadan)</span>
              </a>
            </div>

            {/* Office Addresses */}
            <div className="space-y-3 mb-4">
              {contact.offices.map((office) => (
                <div key={office.city}>
                  <span className="flex items-start gap-2 text-white/65 text-sm">
                    <svg className="w-4 h-4 text-amber mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>
                      <span className="font-medium text-white">{office.city}</span>
                      <br />
                      <span className="text-white/50">{office.address}</span>
                    </span>
                  </span>
                </div>
              ))}
            </div>

            {/* Email */}
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-white/65 hover:text-amber transition-colors text-sm">
              <svg className="w-4 h-4 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{contact.email}</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/50 text-sm">
              © {new Date().getFullYear()} Kemfah Logistics Services Limited. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              {social.facebook !== "#" && (
                <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                  </svg>
                </a>
              )}
              {social.instagram !== "#" && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
                  </svg>
                </a>
              )}
              {social.linkedin !== "#" && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.45,20.45H16.89V14.88c0-1.33,0-3-1.85-3s-2.14,1.45-2.14,2.94v5.66H9.34V9h3.41v1.56h.05a3.75,3.75,0,0,1,3.37-1.85c3.6,0,4.27,2.37,4.27,5.46v6.28ZM5.34,7.43A2.06,2.06,0,1,1,7.4,5.37,2.06,2.06,0,0,1,5.34,7.43Zm1.78,13H3.56V9H7.12ZM22.22,0H1.78A1.75,1.75,0,0,0,0,1.73V22.27A1.75,1.75,0,0,0,1.78,24H22.22A1.76,1.76,0,0,0,24,22.27V1.73A1.76,1.76,0,0,0,22.22,0Z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
          <div className="mt-4 text-center md:text-right text-white/40 text-xs">
            CAC Licensed · {contact.hours.weekday}
          </div>
        </div>
      </div>
    </footer>
  );
}
