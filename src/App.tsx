import { useState } from "react"
import { cn } from "./lib/utils"
import { PromptInputBox } from "./components/PromptInputBox"
import { ChannelSelector } from "./components/ChannelSelector"

import { AnimatePresence, motion } from "framer-motion"
import { Pricing } from "./components/pricing"

function App() {

  const [hasSentMessage, setHasSentMessage] = useState(false);
  const [showPricing, setShowPricing] = useState(false);


  const handleSend = (msg: string, files?: File[]) => {
    setHasSentMessage(true);
    console.log(msg, files);
  };

  const handleSelectChannel = (channel: string) => {
    console.log("Selected channel:", channel);
    setShowPricing(true);
  };

  const currentStep = showPricing ? 'pricing' : hasSentMessage ? 'input' : 'channel';

  const demoPlans = [
    {
      name: "Starter",
      price: "15",
      yearlyPrice: "12",
      period: "month",
      features: [
        "Automated Lead Generation",
        "Basic Analytics Dashboard",
        "Email Support",
        "5 AI Agents"
      ],
      description: "Perfect for small businesses getting started with AI automation.",
      buttonText: "Start Free Trial",
      href: "#",
      isPopular: false,
    },
    {
      name: "Professional",
      price: "49",
      yearlyPrice: "39",
      period: "month",
      features: [
        "Advanced Lead Generation",
        "Full Analytics Suite",
        "Priority Support",
        "Unlimited AI Agents",
        "Custom Integrations"
      ],
      description: "Ideal for growing companies needing powerful AI tools.",
      buttonText: "Get Started",
      href: "#",
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "99",
      yearlyPrice: "79",
      period: "month",
      features: [
        "Custom Solutions",
        "Dedicated Account Manager",
        "24/7 Phone Support",
        "White-label Options"
      ],
      description: "For large organizations requiring bespoke AI infrastructure.",
      buttonText: "Contact Sales",
      href: "#",
      isPopular: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-[#ff4f00] relative overflow-hidden">
      <div className={cn(
        "w-full max-w-4xl flex flex-col items-center z-10 relative transition-all duration-500",
        showPricing ? "space-y-4" : "space-y-12"
      )}>
        <h1 className="text-6xl md:text-8xl font-bold text-center text-[#ff4f00] tracking-tight">
          Lobster Labs
        </h1>

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

            {currentStep === 'pricing' && (
              <motion.div
                key="pricing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="bg-white border-2 border-[#ff4f00] rounded-2xl p-0.5 shadow-2xl overflow-hidden max-w-5xl mx-auto relative">
                  <div className="max-h-[85vh] overflow-y-auto custom-scrollbar">
                    <Pricing plans={demoPlans} title="Choose Your Plan" description="Scale your business with our AI-powered solutions." />
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* Decorative Background Lobsters (Still) */}
      <img src="/lobster.png" className="fixed top-20 left-[10%] w-24 h-24 opacity-40 pointer-events-none pixel-art still-lobster z-0" alt="" />
      <img src="/lobster.png" className="fixed bottom-40 left-[15%] w-32 h-32 opacity-30 pointer-events-none pixel-art still-lobster z-0 rotate-12" alt="" />
      <img src="/lobster.png" className="fixed top-40 right-[12%] w-20 h-20 opacity-40 pointer-events-none pixel-art still-lobster z-0 -rotate-12" alt="" />
      <img src="/lobster.png" className="fixed bottom-20 right-[10%] w-28 h-28 opacity-30 pointer-events-none pixel-art still-lobster z-0" alt="" />

      {/* Smaller edge lobsters */}
      <img src="/lobster.png" className="fixed top-[10%] left-[2%] w-12 h-12 opacity-20 pointer-events-none pixel-art still-lobster z-0 -rotate-45" alt="" />
      <img src="/lobster.png" className="fixed top-[50%] right-[3%] w-16 h-16 opacity-25 pointer-events-none pixel-art still-lobster z-0 rotate-90" alt="" />
      <img src="/lobster.png" className="fixed bottom-[5%] left-[5%] w-14 h-14 opacity-20 pointer-events-none pixel-art still-lobster z-0 rotate-180" alt="" />
      <img src="/lobster.png" className="fixed top-[5%] right-[25%] w-10 h-10 opacity-15 pointer-events-none pixel-art still-lobster z-0 -rotate-12" alt="" />

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
