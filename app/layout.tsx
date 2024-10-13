import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import RetroGrid from "@/components/magicui/retro-grid"
import TextReveal from "@/components/magicui/text-reveal"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import AnimatedListDemo from "./animatedlist-demo/page"
import GameCard from "./game-card/page"
import GlobePage from "./globe-section/page"
import NostalgiaPage from "./nostalgia-section/page"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "max-h-auto bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1 mx-auto justify-center items-center">
                {children}
                <div className="pt-20 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
                  <GlobePage />
                  <AnimatedListDemo />
                </div>
              </div>
            </div>

            {/* Existing Sections */}
            <div className="flex items-center justify-center rounded-lg bg-white dark:bg-black overflow-hidden h-auto">
              <TextReveal text="Who we are?" />
              <TextReveal text="At Plawlabs, we are developing the tools that will reclaim the internet, disrupt industries, and set new standards. From Sorana's decentralized internet platform to the real future of AGI, we believe that privacy is a right, not a feature." />
            </div>
            <GameCard />

            {/* Existing Content Sections */}
            <div className="flex items-center justify-center rounded-lg bg-white dark:bg-black overflow-hidden h-auto">
              <div className="flex flex-col items-center">
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-pixel font-bold leading-tight tracking-wider text-accent-foreground text-center z-10">
                  Sorana:
                </h1>
                <p className="underline decoration-gray-400 decoration-3 underline-offset-2 mt-0 lg:mt-3 md:mt-0 sm:mt-0 z-10 text-center">
                  The engine of the new internet
                </p>
              </div>
              <TextReveal text="The internet is broken. What you see isn't what it used to be it's filled with clickbait, manipulation, and hidden agendas. We're here to change that. Sorana isn't just search; it's freedom." />
            </div>

            {/* Nexus Section */}
            <div className="flex items-center justify-center rounded-lg bg-white dark:bg-black overflow-hidden h-auto">
              <div className="flex flex-col items-center">
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-pixel font-bold leading-tight tracking-wider text-accent-foreground text-center z-10">
                  Nexus:
                </h1>
                <p className="underline decoration-gray-400 decoration-3 underline-offset-2 mt-0 lg:mt-3 md:mt-0 sm:mt-0 z-10 text-center">
                  The engine of the new internet
                </p>
              </div>
              <TextReveal text="The browser experience designed for fluidity and freedom. Nexus isn't just fast; it's free from surveillance. With no ads and no SEO manipulation, it presents the web as it was meant to be: organic, useful, and human-centered." />
            </div>

            {/* Orbit Section */}
            <div className="flex items-center justify-center rounded-lg bg-white dark:bg-black overflow-hidden h-auto">
              <div className="flex flex-col items-center">
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-pixel font-bold leading-tight tracking-wider text-accent-foreground text-center z-10">
                  Orbit:
                </h1>
                <p className="underline decoration-gray-400 decoration-3 underline-offset-2 mt-0 lg:mt-3 md:mt-0 sm:mt-0 z-10 text-center">
                  The engine of the new internet
                </p>
              </div>
              <TextReveal text="The decentralized satellite network, beyond borders and censorship. Orbit ensures permanent connectivity and uncensored access, making sure the internet is always yours wherever you are." />
            </div>

            {/* Mesh-to-Earn Section */}
            <div className="flex items-center justify-center rounded-lg bg-white dark:bg-black overflow-hidden h-auto">
              <div className="flex flex-col items-center">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-pixel font-bold leading-tight tracking-wider text-accent-foreground text-center z-10">
                  Mesh-to-Earn:
                </h1>
                <p className="underline decoration-gray-400 decoration-3 underline-offset-2 mt-0 lg:mt-3 md:mt-0 sm:mt-0 z-10 text-center">
                  Every interaction earns you value.
                </p>
              </div>
              <TextReveal text="With Sorana's unique token economy, you don't just browse you earn. The internet should work for you, not the other way around." />
            </div>

            {/* The Dead Internet Theory Section */}
            <div className="flex items-center justify-center rounded-lg bg-white dark:bg-black overflow-hidden h-auto">
              <div className="flex flex-col items-center">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-pixel font-bold leading-tight tracking-wider text-accent-foreground text-center z-10">
                  The Dead Internet Theory:
                </h1>
                <p className="underline decoration-gray-400 decoration-3 underline-offset-2 mt-0 lg:mt-3 md:mt-0 sm:mt-0 z-10 text-center">
                  A new era of the web
                </p>
              </div>
              <TextReveal text="The web has become a shadow of what it used to be filled with bots, hidden manipulation, and algorithmic control. Sorana exists to reverse that. This is the start of a new era, where the web is driven by people, not corporations." />
            </div>
            <div className="flex flex-col items-center justify-center space-y-10 p-10">
              <h2 className="text-2xl font-bold text-center text-accent-foreground">
                The People Behind the Revolution
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Yaz Çelebi Card */}
                <div className="bg-white dark:bg-black rounded-lg p-5 shadow-lg">
                  <h3 className="font-pixel font-bold text-lg">Yaz Çelebi</h3>
                  <p className="text-sm text-accent-foreground">
                    Founder & CEO driving the vision of Plawlabs and leading the
                    charge toward decentralized web and AGI systems.
                  </p>
                </div>
                {/* Omar Yasin Card */}
                <div className="bg-white dark:bg-black rounded-lg p-5 shadow-lg">
                  <h3 className="font-pixel font-bold text-lg">Omar Yasin</h3>
                  <p className="text-sm text-accent-foreground">
                    Head of Web leading the engineering of Sorana’s Nexus
                    browser, a product that’s fast, intuitive, and resistant to
                    manipulation. Omar ensures Sorana remains the internet
                    experience users deserve—one free from intrusive ads and
                    tracking, where privacy is a right, not a privilege.
                  </p>
                </div>
                {/* Nikhilesh Tozhukad Card */}
                <div className="bg-white dark:bg-black rounded-lg p-5 shadow-lg">
                  <h3 className="font-pixel font-bold text-lg">
                    Nikhilesh Tozhukad
                  </h3>
                  <p className="text-sm text-accent-foreground">
                    Head of Industrial—making Orbit’s satellite mesh network a
                    reality. Nikhilesh isn’t just building tech—he’s building an
                    unstoppable backbone for the internet of the future,
                    ensuring that access to the web is never dependent on
                    borders or governments. Orbit will bring the internet to the
                    people—everywhere.
                  </p>
                </div>
              </div>
            </div>
            <SiteFooter className="fixed border-t bottom-0 inset-x-0 sm:static" />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
