"use client"

import "@/styles/globals.css"
import { useEffect, useRef, useState } from "react"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
// Import metadata from the new file
import { buttonVariants } from "@/components/ui/button"
import RetroGrid from "@/components/magicui/retro-grid"
import TextReveal from "@/components/magicui/text-reveal"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import AnimatedListDemo from "./animatedlist-demo/page"
import GameCard from "./game-card/page"
import GlobePage from "./globe-section/page"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false) // State for modal visibility
  const [name, setName] = useState("") // State for name input
  const [email, setEmail] = useState("") // State for email input

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here (e.g., send data to an API)
    console.log("Name:", name)
    console.log("Email:", email)
    setIsModalOpen(false) // Close the modal after submission
  }

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
              <TextReveal text="who we are?" />
              <TextReveal text="at plawlabs, we are developing the tools that will reclaim the internet, disrupt industries, and set new standards. from sorana's decentralized internet platform to the real future of agi, we believe that privacy is a right, not a feature." />
            </div>
            <GameCard />

            {/* Existing Content Sections */}
            <div className="flex items-center justify-center rounded-lg bg-white dark:bg-black overflow-hidden h-auto">
              <div className="flex flex-col items-center">
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-pixel font-bold leading-tight tracking-wider text-accent-foreground text-center z-10">
                  sorana:
                </h1>
                <p className="underline decoration-gray-400 decoration-3 underline-offset-2 mt-0 lg:mt-3 md:mt-0 sm:mt-0 z-10 text-center">
                  the engine of the new internet
                </p>
              </div>
              <TextReveal text="the internet is broken. what you see isn't what it used to be it's filled with clickbait, manipulation, and hidden agendas. we're here to change that. sorana isn't just search; it's freedom." />
            </div>

            {/* Nexus Section */}
            <div className="flex items-center justify-center rounded-lg bg-white dark:bg-black overflow-hidden h-auto">
              <div className="flex flex-col items-center">
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-pixel font-bold leading-tight tracking-wider text-accent-foreground text-center z-10">
                  nexus:
                </h1>
                <p className="underline decoration-gray-400 decoration-3 underline-offset-2 mt-0 lg:mt-3 md:mt-0 sm:mt-0 z-10 text-center">
                  the engine of the new internet
                </p>
              </div>
              <TextReveal text="the browser experience designed for fluidity and freedom. nexus isn't just fast; it's free from surveillance. with no ads and no seo manipulation, it presents the web as it was meant to be: organic, useful, and human-centered." />
            </div>

            {/* Orbit Section */}
            <div className="flex items-center justify-center rounded-lg bg-white dark:bg-black overflow-hidden h-auto">
              <div className="flex flex-col items-center">
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-pixel font-bold leading-tight tracking-wider text-accent-foreground text-center z-10">
                  orbit:
                </h1>
                <p className="underline decoration-gray-400 decoration-3 underline-offset-2 mt-0 lg:mt-3 md:mt-0 sm:mt-0 z-10 text-center">
                  the engine of the new internet
                </p>
              </div>
              <TextReveal text="the decentralized satellite network, beyond borders and censorship. orbit ensures permanent connectivity and uncensored access, making sure the internet is always yours wherever you are." />
            </div>

            {/* Mesh-to-Earn Section */}
            <div className="flex items-center justify-center rounded-lg bg-white dark:bg-black overflow-hidden h-auto">
              <div className="flex flex-col items-center">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-pixel font-bold leading-tight tracking-wider text-accent-foreground text-center z-10">
                  mesh-to-earn:
                </h1>
                <p className="underline decoration-gray-400 decoration-3 underline-offset-2 mt-0 lg:mt-3 md:mt-0 sm:mt-0 z-10 text-center">
                  every interaction earns you value.
                </p>
              </div>
              <TextReveal text="with sorana's unique token economy, you don't just browse you earn. the internet should work for you, not the other way around." />
            </div>

            <div className="flex flex-col items-center justify-center space-y-10 p-10">
              <h2 className="text-2xl font-bold text-center text-accent-foreground">
                the people behind the revolution
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Yaz Çelebi Card */}
                <div className="bg-white dark:bg-black rounded-lg p-5 shadow-lg">
                  <h3 className="font-pixel font-bold text-lg">yaz çelebi</h3>
                  <p className="text-sm text-accent-foreground">
                    founder & ceo driving the vision of plawlabs and leading the
                    charge toward decentralized web and agi systems.
                  </p>
                </div>
                {/* Omar Yasin Card */}
                <div className="bg-white dark:bg-black rounded-lg p-5 shadow-lg">
                  <h3 className="font-pixel font-bold text-lg">omar yasin</h3>
                  <p className="text-sm text-accent-foreground">
                    head of web leading the engineering of sorana’s nexus
                    browser, a product that’s fast, intuitive, and resistant to
                    manipulation. omar ensures sorana remains the internet
                    experience users deserve—one free from intrusive ads and
                    tracking, where privacy is a right, not a privilege.
                  </p>
                </div>
                {/* Nikhilesh Tozhukad Card */}
                <div className="bg-white dark:bg-black rounded-lg p-5 shadow-lg">
                  <h3 className="font-pixel font-bold text-lg">
                    nikhilesh tozhukad
                  </h3>
                  <p className="text-sm text-accent-foreground">
                    head of industrial—making orbit’s satellite mesh network a
                    reality. nikhilesh isn’t just building tech—he’s building an
                    unstoppable backbone for the internet of the future,
                    ensuring that access to the web is never dependent on
                    borders or governments. orbit will bring the internet to the
                    people everywhere.
                  </p>
                </div>
              </div>
            </div>

            {/* New Section: Join the Plawlabs Movement */}
            <div
              id="join-plawlabs-movement"
              className="flex flex-col items-center justify-center space-y-6 p-10 bg-white dark:bg-black rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-center text-accent-foreground">
                join the plawlabs movement
              </h2>
              <p className="text-center text-sm md:text-base text-accent-foreground">
                we’re not waiting for the future to happen—we’re building it. if
                you’re ready to help reclaim the web and experience the tools of
                tomorrow, join us today.
              </p>
              <div className="flex flex-col items-center space-y-2">
                <button
                  onClick={() => setIsModalOpen(true)} // Open modal on button click
                  className={buttonVariants()}
                >
                  → join the sorana beta
                </button>
                <a href="#" className={buttonVariants()}>
                  subscribe for updates
                </a>
              </div>
              <div className="text-center text-sm text-accent-foreground">
                <h3 className="font-bold">contact & locations</h3>
                <p>
                  📍 london, with new operations coming soon to san francisco,
                  tokyo, and dubai.
                </p>
                <p>📧 hello@plawlabs.org</p>
                <p>📱 +1 888 850-9590</p>
              </div>
            </div>

            {/* Modal for Beta Subscription Form */}
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white dark:bg-black rounded-lg p-6 shadow-lg w-11/12 md:w-1/3">
                  <h2 className="text-xl font-bold text-center text-accent-foreground mb-4">
                    join the sorana beta
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        className="block text-sm text-accent-foreground mb-1"
                        htmlFor="name"
                      >
                        name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-sm text-accent-foreground mb-1"
                        htmlFor="email"
                      >
                        email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600"
                      />
                    </div>
                    <div className="flex justify-center">
                      <button type="submit" className={buttonVariants()}>
                        submit
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(false)} // Close modal
                        className="ml-2 bg-gray-300 text-black font-medium py-2 px-4 rounded-lg shadow hover:bg-opacity-80 transition"
                      >
                        cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            <SiteFooter className="fixed border-t bottom-0 inset-x-0 sm:static" />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
