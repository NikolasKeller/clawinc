import React from 'react';
import { cn } from "../lib/utils";

interface ModelSelectorProps {
    selectedModel: string;
    onSelectModel: (model: string) => void;
}

export const ModelSelector: React.FC<ModelSelectorProps> = ({ selectedModel, onSelectModel }) => {
    return (
        <div className="w-full flex justify-center p-4 font-sans fade-in animate-in duration-700">
            <div
                className="rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/90 border border-gray-700/50 shadow-2xl backdrop-blur-3xl overflow-hidden p-8 transition-all duration-500 hover:scale-[1.02]"
                style={{
                    boxShadow: '0 0 50px rgba(139, 92, 246, 0.1), 0 0 80px rgba(124, 58, 237, 0.1)'
                }}
            >
                <h2 className="text-lg md:text-xl font-semibold text-center text-white tracking-tight mb-6">
                    Which model do you want as default?
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {/* Claude Opus 4.5 */}
                    <button
                        onClick={() => onSelectModel('claude-opus-4.5')}
                        className={cn(
                            "group relative flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-2xl border transition-all duration-300",
                            selectedModel === 'claude-opus-4.5'
                                ? "bg-[#D97757]/10 border-[#D97757] shadow-[0_0_20px_rgba(217,119,87,0.3)] scale-105"
                                : "bg-gray-800/40 border-gray-700/50 hover:bg-gray-800/60 hover:border-gray-600 hover:scale-105 hover:shadow-lg"
                        )}
                    >
                        {selectedModel === 'claude-opus-4.5' && (
                            <div className="absolute top-2 right-2 w-5 h-5 bg-[#D97757] rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3 text-black">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                        )}

                        <div className={cn(
                            "w-12 h-12 md:w-16 md:h-16 mb-3 transition-transform duration-300 group-hover:scale-110",
                            selectedModel === 'claude-opus-4.5' ? "text-[#D97757]" : "text-gray-400 group-hover:text-white"
                        )}>
                            {/* Claude/Anthropic Logo */}
                            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.14 16.51L17.29 12.83C17.29 12.83 14.77 7.74 13.51 5.22C12.85 3.91 10.98 3.96 10.37 5.22L6.71 12.83L4.86 16.51C4.38 17.5 5.09 18.67 6.19 18.67H9.28C9.55 18.67 9.8 18.5 9.93 18.25L10.59 16.94H13.41L14.07 18.25C14.19 18.5 14.45 18.67 14.72 18.67H17.8C18.91 18.67 19.61 17.5 19.14 16.51ZM12 14.12L11.23 12.55H12.77L12 14.12Z" />
                            </svg>
                        </div>
                        <span className={cn(
                            "text-sm font-medium transition-colors",
                            selectedModel === 'claude-opus-4.5' ? "text-white" : "text-gray-400 group-hover:text-white"
                        )}>
                            Claude Opus 4.5
                        </span>
                    </button>

                    {/* GPT-5.2 */}
                    <button
                        onClick={() => onSelectModel('gpt-5.2')}
                        className={cn(
                            "group relative flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-2xl border transition-all duration-300",
                            selectedModel === 'gpt-5.2'
                                ? "bg-[#10A37F]/10 border-[#10A37F] shadow-[0_0_20px_rgba(16,163,127,0.3)] scale-105"
                                : "bg-gray-800/40 border-gray-700/50 hover:bg-gray-800/60 hover:border-gray-600 hover:scale-105 hover:shadow-lg"
                        )}
                    >
                        {selectedModel === 'gpt-5.2' && (
                            <div className="absolute top-2 right-2 w-5 h-5 bg-[#10A37F] rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3 text-black">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                        )}

                        <div className={cn(
                            "w-12 h-12 md:w-16 md:h-16 mb-3 transition-transform duration-300 group-hover:scale-110",
                            selectedModel === 'gpt-5.2' ? "text-[#10A37F]" : "text-gray-400 group-hover:text-white"
                        )}>
                            {/* OpenAI Logo */}
                            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a1.54 1.54 0 0 1 .8312 1.32v5.406a4.481 4.481 0 0 1-5.2877 3.403zM23.234 9.61a4.481 4.481 0 0 1-2.4355 4.6506l-.2753.1587-4.7065-2.713a.7948.7948 0 0 0-.8-.0148l-6.0232 3.4771-2.02-1.1686a1.54 1.54 0 0 1-.771-1.3533V7.2001a4.481 4.481 0 0 1 5.271-3.4124 4.481 4.481 0 0 1 2.3787 1.8906l8.0384 4.636a1.54 1.54 0 0 1 .8312 1.32v5.406a4.481 4.481 0 0 1-5.2877 3.403 4.481 4.481 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a1.54 1.54 0 0 1 .8312 1.32v5.406zM2.8764 15.2197a4.481 4.481 0 0 1-1.1352-3.8997l.2753.1587 4.7065 2.713a.7948.7948 0 0 0 .8.0148l6.0232-3.4771 2.02 1.1686a1.54 1.54 0 0 1 .771 1.3533v5.4466a4.481 4.481 0 0 1-5.271 3.4124 4.481 4.481 0 0 1-2.3787-1.8906l-8.0384-4.636a1.54 1.54 0 0 1-.8312-1.32v-5.406a4.481 4.481 0 0 1 5.2877-3.403 4.481 4.481 0 0 1 2.8764 1.0408l-.1419.0804-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369l-2.02-1.1686a1.54 1.54 0 0 1-.8312-1.32z" />
                            </svg>
                        </div>
                        <span className={cn(
                            "text-sm font-medium transition-colors",
                            selectedModel === 'gpt-5.2' ? "text-white" : "text-gray-400 group-hover:text-white"
                        )}>
                            GPT-5.2
                        </span>
                    </button>

                    {/* Gemini 3 Flash */}
                    <button
                        onClick={() => onSelectModel('gemini-3-flash')}
                        className={cn(
                            "group relative flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-2xl border transition-all duration-300",
                            selectedModel === 'gemini-3-flash'
                                ? "bg-[#4E88D4]/10 border-[#4E88D4] shadow-[0_0_20px_rgba(78,136,212,0.3)] scale-105"
                                : "bg-gray-800/40 border-gray-700/50 hover:bg-gray-800/60 hover:border-gray-600 hover:scale-105 hover:shadow-lg"
                        )}
                    >
                        {selectedModel === 'gemini-3-flash' && (
                            <div className="absolute top-2 right-2 w-5 h-5 bg-[#4E88D4] rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3 text-black">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                        )}

                        <div className={cn(
                            "w-12 h-12 md:w-16 md:h-16 mb-3 transition-transform duration-300 group-hover:scale-110",
                            selectedModel === 'gemini-3-flash' ? "text-[#4E88D4]" : "text-gray-400 group-hover:text-white"
                        )}>
                            {/* Gemini Logo */}
                            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 24c0-6 4-10 10-10-6 0-10-4-10-10 0 6-4 10-10 10 6 0 10 4 10 10z" />
                                {/* Simplified sparkle for Gemini */}
                            </svg>
                        </div>
                        <span className={cn(
                            "text-sm font-medium transition-colors",
                            selectedModel === 'gemini-3-flash' ? "text-white" : "text-gray-400 group-hover:text-white"
                        )}>
                            Gemini 3 Flash
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};
