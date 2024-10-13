import { MagicCard, MagicContainer } from "@/components/magicui/magic-card"

export default function GameCard() {
  return (
    <div className="mx-auto flex max-w-full flex-col items-center space-y-4 text-center">
      <h2 className="font-heading text-4xl leading-[1.1] sm:text-6xl md:text-3xl lg:text-5xl font-bold">
        our projects
      </h2>
      <p className="text-muted-foreground max-w-[85%] pb-1 sm:pb-1 lg:pb-10 leading-normal sm:text-lg sm:leading-7">
        i will add some text here
      </p>

      <MagicContainer
        className={
          "mt-60 flex h-auto w-full flex-wrap justify-center gap-4 px-14 pb-10 md:mt-20 lg:mt-20"
        }
      >
        <MagicCard className="flex w-4/2 sm:w-4/3 md:w-1/4 lg:1/4  cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
          <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
            clade ai
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-4/2 sm:w-4/3 md:w-1/4 lg:1/4  cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
          <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
            clade mini
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-4/2 sm:w-4/3 md:w-1/4 lg:1/4 cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
          <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
            clade pro
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-4/2 sm:w-4/3 md:w-1/4 lg:1/4  cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
          <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
            sorana
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-4/2 sm:w-4/3 md:w-1/4 lg:1/4 cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
          <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
            sorana nexus
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-4/2 sm:w-4/3 md:w-1/4 lg:1/4 cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
          <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
            sorana orbit
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
    </div>
  )
}
