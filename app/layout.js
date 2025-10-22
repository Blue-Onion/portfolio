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
  description: "Portfolio of Aditya Singh Rawat - Web Developer, AI Enthusiast, and Full-Stack Developer",
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
    description: "Portfolio of Aditya Singh Rawat - Web Developer, AI Enthusiast, and Full-Stack Developer",
    url: "https://blueonion.dev",
    siteName: "Blue Onion Portfolio",
    images: [
      {
        url: "/og-image.png", // You can replace with your OG image
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
    description: "Portfolio of Aditya Singh Rawat - Web Developer, AI Enthusiast, and Full-Stack Developer",
    images: ["/og-image.png"],
    creator: "@BlueOnion",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${[archivoBlack.className].join(" ")}`}>
        <div className="relative w-screen bg-black min-h-screen">
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

          <div className="relative z-10">
            <Navbar />
            <main className="w-full -mt-20 min-h-screen">{children}</main>

            <footer className="bg-muted/50 py-10">
              <div className="container mx-auto px-3 text-center text-gray-200">
                <p>
                  © {new Date().getFullYear()} Blue Onion. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
