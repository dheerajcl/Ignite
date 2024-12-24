import Features from "@/components/other/features";
import SlideUpWhenVisible from "@/components/other/slide-up-when-visible";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, MessageSquarePlus } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 -z-10 h-full w-full bg-white overflow-hidden">
        <div 
          className="absolute -right-[15%] top-0 h-[800px] w-[800px] -translate-y-[10%] rounded-full bg-[rgba(147,51,234,0.35)] opacity-90 blur-[135px] animate-[pulse_12s_ease-in-out_infinite]" 
        />
        <div 
          className="absolute -left-[10%] top-[30%] h-[600px] w-[600px] rounded-full bg-[rgba(59,130,246,0.45)] opacity-90 blur-[135px] animate-[pulse_14s_ease-in-out_infinite]" 
        />
      </div>

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(at_top,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.3)_50%)] pointer-events-none" />

      <div className="relative px-4 py-2 lg:px-16">
        <div className="h-200">
          <HeroSection />
        </div>

        <Features />

        <Link
          href="/feedback"
          className="fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-black/90 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:bg-black hover:shadow-[0_0_20px_rgba(167,139,250,0.5)]"
          title="Submit Feedback"
        >
          <MessageSquarePlus size="24" className="text-gray-300 transition-transform duration-300 hover:scale-110" />
        </Link>
      </div>
    </>
  );
}

const HeroSection = () => {
  return (
    <SlideUpWhenVisible>
      <div className="mt-20 flex flex-col items-center justify-center gap-2 py-4 lg:py-8">
        <a
          className="group mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200/50 bg-black/80 px-7 py-3 shadow-sm backdrop-blur-md transition-all duration-500 ease-out hover:border-gray-300/80 hover:bg-black/90 hover:shadow-md"
          target="_blank"
        >
          <p className="text-sm font-semibold text-white [text-wrap:balance]">
            Introducing AI Generated Flashcards 📚
          </p>
          <div className="group relative flex items-center overflow-hidden">
            <ChevronRight className="h-3.5 w-3.5 transform text-white transition-all duration-300 ease-out group-hover:translate-x-5 group-hover:opacity-0" />
            <ArrowRight className="absolute h-3.5 w-3.5 -translate-x-4 text-white opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
          </div>
        </a>

        <div className="relative mt-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            <Balancer>
              <span className="relative inline-block">
                <span className="2xl:text-[5rem] mt-2 max-w-4xl text-center text-4xl font-semibold tracking-tight text-[#013720] sm:text-5xl lg:text-[3.5rem] lg:leading-none">
                  Chat, Annotate
                </span>
                <span className="absolute bottom-2 left-0 h-3 w-full bg-purple-200/40 blur-md transition-all duration-700" />
              </span>{" "}
              <span className="2xl:text-[5rem] mt-2 max-w-4xl text-center text-4xl font-semibold tracking-tight text-[#013720] sm:text-5xl lg:text-[3.5rem] lg:leading-none opacity-[.32]">and</span>{" "}
              <span className="relative inline-block">
                <span className="2xl:text-[5rem] mt-2 max-w-4xl text-center text-4xl font-semibold tracking-tight text-[#013720] sm:text-5xl lg:text-[3.5rem] lg:leading-none">
                  Learn
                </span>
                <span className="absolute bottom-2 left-0 h-3 w-full bg-blue-200/40 blur-md transition-all duration-700" />
              </span>
              <br />
              <span className="mt-2 text-4xl font-medium text-gray-700 sm:text-5xl lg:text-6xl">
                from your PDFs with AI
              </span>
            </Balancer>
          </h1>
        </div>

        <div className="mt-8 space-y-4">
          <p className="text-center text-xl text-gray-600/90 transition-opacity duration-300 hover:text-gray-800 md:text-2xl">
            <span className="font-semibold text-purple-600">Highlight</span> important parts,{" "}
            <span className="font-semibold text-blue-600">take notes</span>, and{" "}
            <span className="font-semibold text-pink-600">ask questions</span>{" "}
            <span className="relative inline-block">
              <span className="relative">naturally</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-400 transition-all duration-300 group-hover:w-full" />
            </span>
          </p>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-base text-gray-500/90 transition-colors duration-300 hover:text-gray-600 md:text-lg">
              Transform your study materials into interactive learning experiences
            </p>
            <p className="text-sm text-gray-500/80 transition-colors duration-300 hover:text-gray-600">
              Note: Currently PDF&apos;s upto 5 pages are supported
            </p>
          </div>
        </div>

        <Link href="/f" className="group mt-10">
          <Button 
            className="relative rounded-lg bg-black px-8 py-6 text-lg font-medium text-white/90 transition-all duration-500 ease-out hover:scale-[1.02] hover:text-white hover:shadow-lg active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center">
              Get started
              <span className="ml-2 transition-all duration-500 ease-out group-hover:translate-x-1">
                🚀
              </span>
            </span>
          </Button>
        </Link>
      </div>
    </SlideUpWhenVisible>
  );
};