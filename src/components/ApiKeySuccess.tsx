import React from 'react';
import { Check, CreditCard, Key } from 'lucide-react';
import { cn } from "../lib/utils";

interface ApiKeySuccessProps {
    onCharge: () => void;
}

export const ApiKeySuccess: React.FC<ApiKeySuccessProps> = ({ onCharge }) => {
    return (
        <div className="w-full flex justify-center p-4 font-sans fade-in animate-in duration-700">
            <div
                className="rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/90 border border-gray-700/50 shadow-2xl backdrop-blur-3xl overflow-hidden p-8 w-full max-w-md"
                style={{
                    boxShadow: '0 0 50px rgba(16, 185, 129, 0.1), 0 0 80px rgba(5, 150, 105, 0.1)'
                }}
            >
                <div className="flex flex-col items-center text-center space-y-6">
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                        <Key className="w-10 h-10 text-green-500" />
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-white">API Key Created</h2>
                        <p className="text-gray-400 text-sm">
                            Your OpenRouter configuration is ready for <span className="text-white font-medium">Open Lobster</span>
                        </p>
                    </div>

                    <div className="w-full bg-gray-800/50 rounded-xl p-4 border border-gray-700 space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-sm">Status</span>
                            <span className="flex items-center text-green-400 text-sm font-medium">
                                <Check className="w-4 h-4 mr-1" /> Active
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-sm">Starting Budget</span>
                            <span className="text-white text-sm font-medium">€20.00</span>
                        </div>
                    </div>

                    <button
                        onClick={onCharge}
                        className={cn(
                            "group relative w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300",
                            "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500",
                            "shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]",
                            "hover:-translate-y-0.5 active:translate-y-0"
                        )}
                    >
                        <CreditCard className="w-5 h-5" />
                        Charge Account
                    </button>
                </div>
            </div>
        </div>
    );
};
