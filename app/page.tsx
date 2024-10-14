"use client"

import { useState } from "react"; // Import useState for managing modal state
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import AnimatedShinyText from "@/components/magicui/animated-shiny-text"
import LinearGradient from "@/components/magicui/linear-gradient"
import RetroGrid from "@/components/magicui/retro-grid"

// import { NostalgiaPage } from "./nostalgia-section/page";

export default function IndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [email, setEmail] = useState(""); // State for email input
  const [message, setMessage] = useState(""); // State for message input

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log("Email:", email);
    console.log("Message:", message);
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <section
      id="top"
      className="container grid items-center gap-6 pb-8 pt-6 md:py-10 mx-auto justify-center mt-20"
    >
      <div className="flex max-w-[980px] flex-col items-center gap-6 retro-theme relative">
        <div
          className={cn(
            "group rounded-full border border-gray-200 bg-gray-200 text-sm transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 z-10"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-black hover:duration-300 hover:dark:text-black text-neutral-600 z-10">
            <span>🕹️ introducing plawlabs</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-pixel font-bold leading-tight tracking-wider text-accent-foreground text-center z-10">
          where innovation meets execution{" "}
          <p className="underline decoration-gray-400 decoration-4 underline-offset-2 mt-0 lg:mt-3 md:mt-0 sm:mt-0 z-10">
            from an idea to execution: the plawlabs journey . 🧩
          </p>
        </h1>
        <p className="max-w-[700px] text-lg sm:text-xl text-accent-foreground text-center z-10">
          we’re not here to fit into the future we’re here to build it.
        </p>
      </div>
      <RetroGrid className="z-0 absolute inset-0 max-w-[1000]" />
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setIsModalOpen(true)} // Open modal on button click
          className={buttonVariants()}
        >
          contact us
        </button>
        <Link
          href="#join-plawlabs-movement" // Change this to the ID of the section
          className={buttonVariants({ variant: "outline" })}
        >
          sorana beta
        </Link>
      </div>

      {/* Modal for Contact Form */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-black rounded-lg p-6 shadow-lg w-11/12 md:w-1/3">
            <h2 className="text-xl font-bold text-center text-accent-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-center text-sm text-accent-foreground mb-4">
              You can also reach us at: <strong>hello@plawlabs.org</strong>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-sm text-accent-foreground mb-1"
                  htmlFor="email"
                >
                  Email
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
              <div className="mb-4">
                <label
                  className="block text-sm text-accent-foreground mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600"
                  rows="4"
                />
              </div>
              <div className="flex justify-center">
                <button type="submit" className={buttonVariants()}>
                  Send
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)} // Close modal
                  className="ml-2 bg-gray-300 text-black font-medium py-2 px-4 rounded-lg shadow hover:bg-opacity-80 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
