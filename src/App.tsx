import { useState } from "react"
import { PromptInputBox } from "./components/PromptInputBox"
import { ChannelSelector } from "./components/ChannelSelector"
import { ModelSelector } from "./components/ModelSelector"
import ClassicLoader from "./components/ClassicLoader"
import { AnimatePresence, motion } from "framer-motion"

function App() {
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string>('claude-opus-4.5');
  const [hasSentMessage, setHasSentMessage] = useState(false);

  const handleSend = (msg: string, files?: File[]) => {
    setHasSentMessage(true);
    console.log(msg, files);
  };

  const currentStep = !hasSentMessage
    ? 'input'
    : !selectedChannel
      ? 'channel'
      : 'model';

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-12 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold text-center text-white tracking-tight">
          Claw, Inc.
          <span className="block text-2xl md:text-3xl font-normal text-gray-400 mt-4">
            The AI company builder
          </span>
        </h1>

        <div className="w-full flex justify-center min-h-[400px]">
          <AnimatePresence mode="wait">
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
                  placeholder="Build your company with Claw..."
                />
              </motion.div>
            )}

            {currentStep === 'channel' && (
              <motion.div
                key="channel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col items-center space-y-8"
              >
                <ClassicLoader />
                <ChannelSelector onSelectChannel={setSelectedChannel} />
              </motion.div>
            )}

            {currentStep === 'model' && (
              <motion.div
                key="model"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col items-center space-y-8"
              >
                <ClassicLoader />
                <ModelSelector selectedModel={selectedModel} onSelectModel={setSelectedModel} />
                <button
                  onClick={() => setSelectedChannel(null)}
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  ← Back to channels
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default App
