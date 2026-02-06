import { useState } from "react"
import { cn } from "./lib/utils"
import { PromptInputBox } from "./components/PromptInputBox"
import { ChannelSelector } from "./components/ChannelSelector"

import { AnimatePresence, motion } from "framer-motion"
import { Pricing } from "./components/pricing"
import { OnboardingPage } from "./components/OnboardingPage"

function App() {

  const [hasSentMessage, setHasSentMessage] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(false);


  const handleSend = (msg: string, files?: File[]) => {
    setHasSentMessage(true);
    console.log(msg, files);
  };

  const handleSelectChannel = (channel: string) => {
    console.log("Selected channel:", channel);
    setSelectedChannel(channel);
    setShowOnboarding(true);
  };

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    setShowPricing(true);
  };

  const currentStep = showPricing ? 'pricing' : showOnboarding ? 'onboarding' : hasSentMessage ? 'input' : 'channel';

  const demoPlans = [
    {
      name: "Light",
      price: "29",
      yearlyPrice: "278",
      period: "month",
      features: ["TBD", "TBD", "TBD"],
      description: "Simple AI assistance for the agile professional.",
      buttonText: "Join Light",
      href: "#",
      isPopular: false,
    },
    {
      name: "Mediumcore",
      price: "39",
      yearlyPrice: "374",
      period: "month",
      features: ["TBD", "TBD", "TBD"],
      description: "Robust automation for scaling teams.",
      buttonText: "Go Mediumcore",
      href: "#",
      isPopular: true,
    },
    {
      name: "Hardcore",
      price: "0",
      yearlyPrice: "0",
      period: "month",
      features: ["TBD", "TBD", "TBD"],
      description: "Maximum power for the most demanding labs.",
      buttonText: "Contact Sales",
      href: "#",
      isPopular: false,
    },
  ];

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center p-4 text-[#ff4f00] relative overflow-hidden">

      {/* Shared Header Title with precisely synced animation */}
      <motion.div
        layout
        initial={false}
        animate={{
          top: (showPricing || showOnboarding) ? 15 : 80,
          scale: (showPricing || showOnboarding) ? 0.7 : 1,
        }}
        transition={{
          duration: 2.0,
          delay: 0.4,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="fixed left-0 w-full z-[60] flex justify-center pointer-events-none origin-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-center text-[#ff4f00] tracking-tight drop-shadow-sm">
          Lobster AI
        </h1>
      </motion.div>

      {(!showPricing && !showOnboarding) && (
        <div className={cn(
          "w-full max-w-4xl flex flex-col items-center z-10 relative transition-all duration-500",
          "mt-32 space-y-12"
        )}>
          <div className="w-full flex justify-center min-h-[400px]">
            <AnimatePresence mode="wait">
              {currentStep === 'channel' && (
                <motion.div
                  key="channel"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-2xl flex flex-col items-center mt-6"
                >
                  <ChannelSelector onSelectChannel={handleSelectChannel} />

                  {/* Lobsters under the window */}
                  <div className="flex gap-48 mt-20 items-center">
                    <img src="/lobster.png" className="w-16 h-16 opacity-20 still-lobster -rotate-12" alt="" />
                    <img src="/lobster.png" className="w-24 h-24 opacity-30 still-lobster rotate-[200deg] transform scale-x-[-1] relative top-8" alt="" />
                  </div>
                </motion.div>
              )}

              {currentStep === 'input' && (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-2xl"
                >
                  <PromptInputBox
                    onSend={handleSend}
                    placeholder="Build your company with Lobster..."
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      <AnimatePresence>
        {showOnboarding && selectedChannel && (
          <motion.div
            key="onboarding"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          >
            <OnboardingPage
              channel={selectedChannel}
              onScanned={handleOnboardingComplete}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPricing && (
          <motion.div
            key="pricing-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[55] overflow-hidden flex flex-col items-center justify-center"
          >
            {/* More prominent, slightly larger decorative lobsters for Pricing */}
            <img src="/lobster.png" className="fixed top-[15%] left-[5%] w-14 h-14 opacity-[0.15] pointer-events-none pixel-art still-lobster z-0 rotate-12" alt="" />
            <img src="/lobster.png" className="fixed top-[45%] left-[2%] w-16 h-16 opacity-[0.12] pointer-events-none pixel-art still-lobster z-0 -rotate-45" alt="" />
            <img src="/lobster.png" className="fixed bottom-[15%] left-[8%] w-20 h-20 opacity-[0.18] pointer-events-none pixel-art still-lobster z-0 rotate-180" alt="" />
            <img src="/lobster.png" className="fixed top-[25%] right-[5%] w-12 h-12 opacity-[0.14] pointer-events-none pixel-art still-lobster z-0 -rotate-90" alt="" />
            <img src="/lobster.png" className="fixed top-[65%] right-[3%] w-16 h-16 opacity-[0.15] pointer-events-none pixel-art still-lobster z-0 rotate-45" alt="" />
            <img src="/lobster.png" className="fixed bottom-[10%] right-[10%] w-20 h-20 opacity-[0.12] pointer-events-none pixel-art still-lobster z-0 -rotate-12" alt="" />
            <img src="/lobster.png" className="fixed top-[5%] left-[30%] w-14 h-14 opacity-[0.12] pointer-events-none pixel-art still-lobster z-0 rotate-[200deg]" alt="" />
            <img src="/lobster.png" className="fixed bottom-[5%] right-[40%] w-12 h-12 opacity-[0.15] pointer-events-none pixel-art still-lobster z-0 -rotate-12" alt="" />

            <div className="relative z-10 w-full max-w-6xl px-4 mt-20 md:mt-24">
              <Pricing plans={demoPlans} title="Choose Your Plan" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {(!showPricing && !showOnboarding) && (
        <>
          {/* Decorative Background Lobsters (Original Approved Version) */}
          <img src="/lobster.png" className="fixed top-20 left-[10%] w-24 h-24 opacity-40 pointer-events-none pixel-art still-lobster z-0" alt="" />
          <img src="/lobster.png" className="fixed bottom-40 left-[15%] w-32 h-32 opacity-30 pointer-events-none pixel-art still-lobster z-0 rotate-12" alt="" />
          <img src="/lobster.png" className="fixed top-40 right-[12%] w-20 h-20 opacity-40 pointer-events-none pixel-art still-lobster z-0 -rotate-12" alt="" />
          <img src="/lobster.png" className="fixed bottom-20 right-[10%] w-28 h-28 opacity-30 pointer-events-none pixel-art still-lobster z-0" alt="" />

          {/* Smaller edge lobsters */}
          <img src="/lobster.png" className="fixed top-[10%] left-[2%] w-12 h-12 opacity-20 pointer-events-none pixel-art still-lobster z-0 -rotate-45" alt="" />
          <img src="/lobster.png" className="fixed top-[50%] right-[3%] w-16 h-16 opacity-25 pointer-events-none pixel-art still-lobster z-0 rotate-90" alt="" />
          <img src="/lobster.png" className="fixed bottom-[5%] left-[5%] w-14 h-14 opacity-20 pointer-events-none pixel-art still-lobster z-0 rotate-180" alt="" />
          <img src="/lobster.png" className="fixed top-[5%] right-[25%] w-10 h-10 opacity-15 pointer-events-none pixel-art still-lobster z-0 -rotate-12" alt="" />
        </>
      )}

      <style>{`
        .still-lobster {
          image-rendering: pixelated;
          mix-blend-mode: multiply;
        }
      `}</style>
    </div>

  )
}

export default App
