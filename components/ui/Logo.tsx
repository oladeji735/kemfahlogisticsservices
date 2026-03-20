import Image from "next/image";

interface LogoProps {
  variant?: "reversed" | "dark" | "amber-bg" | "icon-only";
  size?: "nav-desktop" | "nav-mobile" | "footer" | "about" | "cta";
  className?: string;
}

const sizes = {
  "nav-desktop": { width: 180, height: 48 },
  "nav-mobile": { width: 120, height: 36 },
  "footer": { width: 160, height: 44 },
  "about": { width: 240, height: 64 },
  "cta": { width: 160, height: 40 },
};

const logoPaths = {
  reversed: {
    "nav-desktop": "/images/logos/kemfah-logo-v1-navbar-desktop.png",
    "nav-mobile": "/images/logos/kemfah-logo-v1-navbar-mobile.png",
    "footer": "/images/logos/kemfah-logo-v1-footer.png",
    "about": "/images/logos/kemfah-logo-v1-navbar-desktop.png",
    "cta": "/images/logos/kemfah-logo-v1-navbar-desktop.png",
  },
  dark: {
    "nav-desktop": "/images/logos/kemfah-logo-v2-about.png",
    "nav-mobile": "/images/logos/kemfah-logo-v2-about.png",
    "footer": "/images/logos/kemfah-logo-v2-about.png",
    "about": "/images/logos/kemfah-logo-v2-about.png",
    "cta": "/images/logos/kemfah-logo-v2-about.png",
  },
  "amber-bg": {
    "nav-desktop": "/images/logos/Kemfah-logo-v1-cta-strip.png",
    "nav-mobile": "/images/logos/Kemfah-logo-v1-cta-strip.png",
    "footer": "/images/logos/Kemfah-logo-v1-cta-strip.png",
    "about": "/images/logos/Kemfah-logo-v1-cta-strip.png",
    "cta": "/images/logos/Kemfah-logo-v1-cta-strip.png",
  },
  "icon-only": {
    "nav-desktop": "/favicon/web-app-manifest-192x192.png",
    "nav-mobile": "/favicon/web-app-manifest-192x192.png",
    "footer": "/favicon/web-app-manifest-192x192.png",
    "about": "/favicon/web-app-manifest-192x192.png",
    "cta": "/favicon/web-app-manifest-192x192.png",
  },
};

export function Logo({
  variant = "reversed",
  size = "nav-desktop",
  className = "",
}: LogoProps) {
  const { width, height } = sizes[size];
  const src = logoPaths[variant][size];

  return (
    <Image
      src={src}
      alt="Kemfah Logistics"
      width={width}
      height={height}
      className={`object-contain ${className}`}
      priority={size === "nav-desktop"}
    />
  );
}
