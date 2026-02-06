import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

interface OnboardingPageProps {
    channel: string;
    onScanned: () => void;
}

export function OnboardingPage({ channel, onScanned }: OnboardingPageProps) {
    const [isScanned, setIsScanned] = useState(false);

    // Simulate scanning after 3.5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsScanned(true);
        }, 6000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 bg-white z-[50] flex flex-col items-center justify-center overflow-hidden">
            {/* Subtle Lobsters Pattern */}
            {[...Array(12)].map((_, i) => (
                <img
                    key={i}
                    src="/lobster.png"
                    className="fixed opacity-[0.06] pointer-events-none pixel-art"
                    style={{
                        width: `${20 + (i % 3) * 10}px`,
                        height: `${20 + (i % 3) * 10}px`,
                        top: `${(i * 17) % 90}%`,
                        left: `${(i * 23) % 90}%`,
                        transform: `rotate(${(i * 45) % 360}deg)`,
                    }}
                    alt=""
                />
            ))}

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 flex flex-col items-center max-w-md w-full p-8 mt-20 rounded-3xl border-2 border-orange-100 bg-white shadow-xl text-center"
            >
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-[#ff4f00] capitalize mb-2">
                        Connect {channel}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                        Scan the QR code with your mobile device to link Lobster AI.
                    </p>
                </div>

                <div className="relative group mb-8">
                    <div className="w-64 h-64 bg-slate-50 rounded-2xl flex items-center justify-center border-4 border-[#ff4f00]/10 overflow-hidden relative">
                        <div className={cn(
                            "w-56 h-56 transition-all duration-700 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-slate-100",
                            isScanned ? "opacity-20 blur-sm" : "opacity-100"
                        )}>
                            {/* Stylized QR SVG */}
                            <svg viewBox="0 0 100 100" className="w-full h-full text-slate-800">
                                <rect width="25" height="25" x="5" y="5" fill="currentColor" rx="2" />
                                <rect width="15" height="15" x="10" y="10" fill="white" rx="1" />
                                <rect width="7" height="7" x="14" y="14" fill="currentColor" rx="1" />

                                <rect width="25" height="25" x="70" y="5" fill="currentColor" rx="2" />
                                <rect width="15" height="15" x="75" y="10" fill="white" rx="1" />
                                <rect width="7" height="7" x="79" y="14" fill="currentColor" rx="1" />

                                <rect width="25" height="25" x="5" y="70" fill="currentColor" rx="2" />
                                <rect width="15" height="15" x="10" y="75" fill="white" rx="1" />
                                <rect width="7" height="7" x="14" y="79" fill="currentColor" rx="1" />

                                <g fill="currentColor" opacity="0.8">
                                    <rect x="40" y="5" width="5" height="5" />
                                    <rect x="50" y="5" width="5" height="5" />
                                    <rect x="60" y="15" width="5" height="5" />
                                    <rect x="40" y="25" width="10" height="5" />
                                    <rect x="55" y="25" width="5" height="10" />
                                    <rect x="70" y="40" width="15" height="5" />
                                    <rect x="70" y="55" width="5" height="15" />
                                    <rect x="85" y="70" width="10" height="10" />
                                    <rect x="45" y="45" width="12" height="12" />
                                    <rect x="15" y="45" width="10" height="10" />
                                    <rect x="45" y="70" width="10" height="10" />
                                    <rect x="70" y="85" width="10" height="5" />
                                </g>
                            </svg>
                        </div>

                        {isScanned && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="bg-[#ff4f00] rounded-full p-4 shadow-lg">
                                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </motion.div>
                        )}

                        {/* Faster Animated Scanning Line - Reduced to 1.5s */}
                        {!isScanned && (
                            <motion.div
                                animate={{ top: ['5%', '95%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute left-4 right-4 h-0.5 bg-[#ff4f00] z-20 shadow-[0_0_12px_#ff4f00]"
                            />
                        )}
                    </div>
                </div>

                <div className="w-full space-y-4">
                    <Button
                        onClick={onScanned}
                        disabled={!isScanned}
                        className={cn(
                            "w-full h-12 text-lg font-bold rounded-xl transition-all duration-300",
                            isScanned
                                ? "bg-[#ff4f00] hover:bg-[#ff4f00]/90 text-white shadow-lg transform hover:-translate-y-1"
                                : "bg-slate-100 text-slate-400 cursor-not-allowed"
                        )}
                    >
                        {isScanned ? "I've Scanned - Let's Go" : "Waiting for Scan..."}
                    </Button>

                    <div className="flex items-center justify-center gap-2">
                        <div className={cn(
                            "w-2 h-2 rounded-full",
                            isScanned ? "bg-green-500" : "bg-[#ff4f00] animate-pulse"
                        )} />
                        <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">
                            {isScanned ? "Link Established" : "System Ready"}
                        </span>
                    </div>
                </div>
            </motion.div>

            <style>{`
        .pixel-art {
          image-rendering: pixelated;
          mix-blend-mode: multiply;
        }
      `}</style>
        </div>
    );
}
