import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";

const inter = Inter({ subsets: ["latin"] });
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Blue Onion | Portfolio",
  description:
    "Portfolio of Aditya Singh Rawat - Web Developer, AI Enthusiast, and Full-Stack Developer",
  keywords: [
    "Blue Onion",
    "Aditya Singh Rawat",
    "Portfolio",
    "Web Developer",
    "Full-Stack Developer",
    "AI Projects",
    "Next.js",
    "React",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Aditya Singh Rawat", url: "https://blueonion.dev" }],
  openGraph: {
    title: "Blue Onion | Portfolio",
    description:
      "Portfolio of Aditya Singh Rawat - Web Developer, AI Enthusiast, and Full-Stack Developer",
    url: "https://blueonion.dev",
    siteName: "Blue Onion Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blue Onion Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Onion | Portfolio",
    description:
      "Portfolio of Aditya Singh Rawat - Web Developer, AI Enthusiast, and Full-Stack Developer",
    images: ["/og-image.png"],
    creator: "@BlueOnion",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${archivoBlack.className}`}>
        <div className="relative w-screen min-h-screen bg-black overflow-hidden">
          {/* Background effect */}
          <div className="absolute inset-0 z-0">
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          {/* Navbar */}
          <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md ">
            <Navbar />
          </header>

          {/* Main content */}
          <main className="relative z-10 w-full pt-24 p-4 sm:p-6 max-w-8xl 2xl:max-w-[1600px] mx-auto min-h-screen">
            {children}
          </main>

          {/* Footer */}
          <footer className="relative z-10 bg-muted/50 py-10 border-t border-white/10">
            <div className="container mx-auto px-3 text-center text-gray-300 text-sm">
              <p>© {new Date().getFullYear()} Blue Onion. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
